import { ChainId, Currency } from '@mintswapcash/sdk'

export function currencyId(currency: Currency): string {
  if (currency.isNative) return 'MINTME'

  if (currency.isToken) return currency.address
  throw new Error('invalid currency')
}

// export function currencyId(
//   currency: Currency,
//   chainId = ChainId.MAINNET
// ): string {
//   if (currency === Currency.getNativeCurrency(chainId))
//     return Currency.getNativeCurrencySymbol(chainId);
//   if (currency instanceof Token) return currency.address;
//   throw new Error("invalid currency");
// }
