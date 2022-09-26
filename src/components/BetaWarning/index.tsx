import React from 'react'
import styled from 'styled-components'
import { AlertTriangle, X } from 'react-feather'
import { useBetaWarningVisible } from '../../state/user/hooks'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'

const PhishAlert = styled.div<{ isActive: any }>`
  width: 100%;
  padding: 6px 6px;
  background-color: ${({ theme }) => theme.primary1};
  color: white;
  font-size: 11px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

export const StyledClose = styled(X)`
  :hover {
    cursor: pointer;
  }
`
const StyledLink = styled.a`
  color: ${({ theme }) => theme.white}
`

export default function BetaWarning() {
  // const toggleBetaWarning = useBetaWarningToggle()
  const showBetaWarning = useBetaWarningVisible()
  const { t } = useTranslation()

  return isMobile ? (
    <PhishAlert isActive={showBetaWarning}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AlertTriangle style={{ marginRight: 6 }} size={12} /> {t('header.betaWarning')} | &nbsp;
        <StyledLink href="https://github.com/quackswap">GitHub</StyledLink>
      </div>
      {/* <StyledClose size={12} onClick={toggleBetaWarning} /> */}
    </PhishAlert>
  ) : (
    <PhishAlert isActive={true}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AlertTriangle style={{ marginRight: 6 }} size={12} /> {t('header.betaWarning')} | &nbsp;
        <StyledLink href="https://github.com/quackswap">GitHub</StyledLink>
      </div>
      {/* <StyledClose size={12} onClick={toggleBetaWarning} /> */}
    </PhishAlert>
  )
}
