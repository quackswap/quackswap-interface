import { ChainId, Currency, CurrencyAmount, CBTT, Token, TokenAmount, WBTT } from '@hotcrosscom/quackswap-sdk'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined {
  return chainId && currency === CBTT[chainId] ? WBTT[chainId] : currency instanceof Token ? currency : undefined
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount | undefined,
  chainId: ChainId | undefined
): TokenAmount | undefined {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined
  return token && currencyAmount ? new TokenAmount(token, currencyAmount.raw) : undefined
}

export function unwrappedToken(token: Token, chainId: ChainId): Currency | Token {
  if (token?.equals?.(WBTT[token.chainId])) return CBTT[chainId]
  return token
}
