import { Contract } from '@ethersproject/contracts'
import { WBTT } from '@quackswap/sdk'
import {
  QuackSwapPairAbi,
  StakingRewardsAbi,
  AirdropAbi,
  GovernorAlphaAbi,
  QUACKAbi,
  MasterChefAbi,
  QuackSwapBridgeMigrationRouterAbi
} from '@quackswap/sdk'
import { useMemo } from 'react'
import ENS_PUBLIC_RESOLVER_ABI from '../constants/abis/ens-public-resolver.json'
import { ERC20_BYTES32_ABI } from '../constants/abis/erc20'
import ERC20_ABI from '../constants/abis/erc20.json'
import BRIDGE_TOKEN_ABI from '../constants/abis/bridge-token.json'
import { MIGRATOR_ABI, MIGRATOR_ADDRESS } from '../constants/abis/migrator'
import WETH_ABI from '../constants/abis/weth.json'
import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../constants/multicall'
import { V1_EXCHANGE_ABI, V1_FACTORY_ABI, V1_FACTORY_ADDRESSES } from '../constants/v1'
import { getContract } from '../utils'
import { useActiveWeb3React } from './index'
import {
  AIRDROP_ADDRESS,
  BRIDGE_MIGRATOR_ADDRESS,
  MINICHEF_ADDRESS,
  ZERO_ADDRESS,
  GOVERNANCE_ADDRESS
} from '../constants'
import { QUACK } from '../constants/tokens'
import { REWARDER_VIA_MULTIPLIER_INTERFACE } from '../constants/abis/rewarderViaMultiplier'
import { useChainId } from 'src/hooks'

// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || address === ZERO_ADDRESS || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useV1FactoryContract(): Contract | null {
  const chainId = useChainId()
  return useContract(chainId && V1_FACTORY_ADDRESSES[chainId], V1_FACTORY_ABI, false)
}

export function useV2MigratorContract(): Contract | null {
  return useContract(MIGRATOR_ADDRESS, MIGRATOR_ABI, true)
}

export function useMiniChefContract(): Contract | null {
  const chainId = useChainId()
  return useContract(MINICHEF_ADDRESS[chainId], MasterChefAbi, true)
}

export function useBridgeMigratorContract(): Contract | null {
  return useContract(BRIDGE_MIGRATOR_ADDRESS, QuackSwapBridgeMigrationRouterAbi, true)
}

export function useV1ExchangeContract(address?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, V1_EXCHANGE_ABI, withSignerIfPossible)
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useBridgeTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, BRIDGE_TOKEN_ABI, withSignerIfPossible)
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
  const chainId = useChainId()
  return useContract(chainId ? WBTT[chainId]?.address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(pairAddress, QuackSwapPairAbi, withSignerIfPossible)
}

export function useMulticallContract(): Contract | null {
  const chainId = useChainId()
  return useContract(MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false)
}

export function useGovernanceContract(): Contract | null {
  return useContract(GOVERNANCE_ADDRESS, GovernorAlphaAbi, true)
}

export function usePngContract(): Contract | null {
  const chainId = useChainId()
  return useContract(chainId ? QUACK[chainId].address : undefined, QUACKAbi, true)
}

export function useStakingContract(stakingAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  const chainId = useChainId()
  return useContract(
    stakingAddress,
    stakingAddress === MINICHEF_ADDRESS[chainId] ? MasterChefAbi : StakingRewardsAbi,
    withSignerIfPossible
  )
}

export function useRewardViaMultiplierContract(address?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, REWARDER_VIA_MULTIPLIER_INTERFACE, withSignerIfPossible)
}

export function useAirdropContract(): Contract | null {
  const chainId = useChainId()
  return useContract(chainId ? AIRDROP_ADDRESS[chainId] : undefined, AirdropAbi, true)
}
