import { ChainId } from '@mintswapcash/sdk'

export enum Feature {
  AMM = 'AMM',
  AMM_V2 = 'AMM V2',
  LIQUIDITY_MINING = 'Liquidity Mining',
  BENTOBOX = 'BentoBox',
  KASHI = 'Kashi',
  MISO = 'MISO',
  ANALYTICS = 'Analytics',
  MIGRATE = 'Migrate',
  STAKING = 'Staking',
  BRIDGE = 'Bridge',
  GOVERNANCE = 'Governance',
}

const features = {
  [ChainId.MINTME]: [
    Feature.AMM,
    Feature.LIQUIDITY_MINING,
    // Feature.MIGRATE,
    Feature.ANALYTICS,
    Feature.STAKING,
    Feature.BRIDGE,
    Feature.GOVERNANCE,
  ],
}

export function featureEnabled(feature: Feature, chainId: ChainId): boolean {
  return features?.[chainId]?.includes(feature)
}

export function chainsWithFeature(feature: Feature): ChainId[] {
  return Object.keys(features)
    .filter((chain) => features[chain].includes(feature))
    .map((chain) => ChainId[chain])
}
