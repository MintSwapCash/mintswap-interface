import { AddressZero } from '@ethersproject/constants'
import { ChainId, FLEXUSD_ADDRESS } from '@mintswapcash/sdk'

type Currency = { address: string; decimals: number }

// Pricing currency
// TODO: Check decimals and finish table
export const USD_CURRENCY: { [chainId in ChainId]?: Currency } = {
  [ChainId.MINTME]: {
    address: FLEXUSD_ADDRESS[ChainId.MINTME],
    decimals: 18,
  },
}

export function getCurrency(chainId: ChainId): Currency {
  return (
    USD_CURRENCY[chainId] || {
      address: AddressZero,
      decimals: 18,
    }
  )
}
