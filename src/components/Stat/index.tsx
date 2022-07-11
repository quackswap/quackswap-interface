import React from 'react'
import { Text, Box, CurrencyLogo } from '@hotcrosscom/quackswap-components'
import { Currency, Token, WBTT } from '@hotcrosscom/quackswap-sdk'
import { Colors } from 'src/theme/styled'
import { useChainId } from 'src/hooks'
import { ANALYTICS_PAGE } from 'src/constants'
import { ReactComponent as AnalyticsIcon } from 'src/assets/svg/menu/analytics.svg'
import { AnalyticsLink } from './styled'

export interface StatProps {
  title?: React.ReactNode
  titlePosition?: 'top' | 'bottom'
  stat?: any
  titleColor?: keyof Colors
  statColor?: keyof Colors
  titleFontSize?: number
  statFontSize?: number
  currency?: Currency
  statAlign?: 'center' | 'right' | 'left'
  showAnalytics?: boolean
}

const Stat = ({
  title,
  titlePosition,
  stat,
  titleColor,
  titleFontSize,
  statColor,
  statFontSize,
  currency,
  statAlign,
  showAnalytics = false
}: StatProps) => {
  const chainId = useChainId()
  const token = currency instanceof Currency && currency instanceof Token ? currency : WBTT[chainId]
  return (
    <Box display="inline-block">
      {titlePosition === 'top' && title && (
        <Box display="flex" flexDirection="row" style={{ gap: '5px' }} alignItems="center">
          <Text color={titleColor || 'text1'} fontSize={titleFontSize || 20}>
            {title}
          </Text>
          {showAnalytics && (
            <AnalyticsLink href={`${ANALYTICS_PAGE}/#/token/${token.address}`} target="_blank">
              <AnalyticsIcon />
            </AnalyticsLink>
          )}
        </Box>
      )}

      <Box
        display="flex"
        alignItems="center"
        justifyContent={statAlign === 'center' ? 'center' : statAlign === 'right' ? 'flex-end' : 'flex-start'}
      >
        <Text color={statColor || 'text1'} fontSize={statFontSize || 16}>
          {stat}
        </Text>
        {currency && (
          <Box ml={10} mt="8px">
            <CurrencyLogo currency={currency} size={24} imageSize={48} />
          </Box>
        )}
      </Box>

      {titlePosition === 'bottom' && title && (
        <Text color={titleColor || 'text1'} fontSize={titleFontSize || 16}>
          {title}
        </Text>
      )}
    </Box>
  )
}

export default Stat
