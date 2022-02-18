import { ChainId, Currency, WNATIVE } from '@mintswapcash/sdk'
import React, { FunctionComponent, useMemo } from 'react'

import Logo from '../Logo'
import { WrappedTokenInfo } from '../../state/lists/wrappedTokenInfo'
import useHttpLocations from '../../hooks/useHttpLocations'

const BLOCKCHAIN = {
  [ChainId.MINTME]: 'mintme',
}

function getCurrencySymbol(currency) {
  if (currency.symbol === 'WMINT') {
    return 'MINTME'
  }
  return currency.symbol.toLowerCase()
}

export function getCurrencyLogoUrls(currency) {
  const urls = []

  urls.push(`https://raw.githubusercontent.com/prsstech/icons/master/token/${getCurrencySymbol(currency)}.jpg`)
  if (currency.chainId in BLOCKCHAIN) {
    urls.push(
      `https://assets.mintswap.cash/blockchains/mintme/assets/${
        currency.address
      }/logo.png`
    )
    urls.push(
      `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${
        currency.address
      }/logo.png`
    )
  }

  return urls
}

const BitcoinCashLogo = 'https://raw.githubusercontent.com/prsstech/icons/master/token/bch.jpg'

const LOGO: { readonly [chainId in ChainId]?: string } = {
  [ChainId.MINTME]: BitcoinCashLogo,
}

interface CurrencyLogoProps {
  currency?: Currency
  size?: string | number
  style?: React.CSSProperties
  className?: string
  squared?: boolean
}

const unknown = 'https://raw.githubusercontent.com/prsstech/icons/master/token/unknown.png'

const CurrencyLogo: FunctionComponent<CurrencyLogoProps> = ({
  currency,
  size = '24px',
  style,
  className = '',
  ...rest
}) => {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI || currency.tokenInfo.logoURI : undefined
  )

  const srcs = useMemo(() => {
    if (!currency) {
      return [unknown]
    }

    if (currency["logoURI"]) {
      return [currency["logoURI"]]
    }

    if (currency.isNative || currency.equals(WNATIVE[currency.chainId])) {
      return [LOGO[currency.chainId], unknown]
    }

    if (currency.isToken) {
      const defaultUrls = [...getCurrencyLogoUrls(currency)]
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls, unknown]
      }
      return defaultUrls
    }
  }, [currency, uriLocations])

  return <Logo srcs={srcs} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
}

export default CurrencyLogo
