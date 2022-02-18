import { ChainId } from '@mintswapcash/sdk'

const MINTME = 'https://raw.githubusercontent.com/prsstech/icons/master/network/smartbch.jpg'

export const NETWORK_ICON = {
  [ChainId.MINTME]: MINTME,
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
  [ChainId.MINTME]: 'MINTME',
}
