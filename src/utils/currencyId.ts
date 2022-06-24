import { Currency, CBTT, Token, ChainId } from '@quackswap/sdk'

export function currencyId(currency: Currency, chainId: ChainId): string {
  if (chainId && currency === CBTT[chainId]) return 'BTT'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
