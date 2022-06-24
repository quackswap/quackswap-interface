import { BigNumber } from '@ethersproject/bignumber'
import { ChainId, Token, TokenAmount } from '@quackswap/sdk'
import { useTokenContract } from '../hooks/useContract'
import { useSingleCallResult } from '../state/multicall/hooks'
import { QUACK } from '../constants/tokens'

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched
export function useTotalSupply(token?: Token): TokenAmount | undefined {
  const contract = useTokenContract(token?.address, false)

  const totalSupply: BigNumber = useSingleCallResult(contract, 'totalSupply')?.result?.[0]

  // Special case to handle QUACK's proxy burnt total supply
  if (token?.equals(QUACK[ChainId.BITTORRENT_MAINNET])) {
    return new TokenAmount(token, '230000000000000000000000000')
  }

  return token && totalSupply ? new TokenAmount(token, totalSupply.toString()) : undefined
}
