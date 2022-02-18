import { ChainId, MINT_ADDRESS, BAR_ADDRESS, Token, WMINT} from '@mintswapcash/sdk'

export const FLEXUSD = new Token(ChainId.MINTME, '0xe249f3537af85cef70dfe35cfa12062f7a43d95a', 18, 'flexUSD', 'flexUSD')

export const XMINT: ChainTokenMap = {
    [ChainId.MINTME]: new Token(ChainId.MINTME, BAR_ADDRESS[ChainId.MINTME], 18, 'xMINT', 'MintSwap Bar'),
}

type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token
}

export const MINT: ChainTokenMap = {
  [ChainId.MINTME]: new Token(ChainId.MINTME, MINT_ADDRESS[ChainId.MINTME], 18, 'MINT', 'MintSwap Token'),
}

export const WMINT_EXTENDED: { [chainId: number]: Token } = {
  ...WMINT,
}

type ChainTokenMapList = {
  readonly [chainId in ChainId]?: Token[]
}

// These are available for migrate
export const MINTSWAP_TOKENS: ChainTokenMapList = {
  [ChainId.MINTME]: [
  ],
}
