// import { TokenAmount } from '@hotcrosscom/quackswap-sdk'
// import { Button } from '@quackswapdex/components'
import React, { useState, useRef } from 'react'
import { Text } from 'rebass'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { darken } from 'polished'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Logo from '../../assets/images/logo_mobile.png'
import { useActiveWeb3React } from '../../hooks'
import { useETHBalances } from '../../state/wallet/hooks'
// import { CardNoise } from '../earn/styled'
// import { CountUp } from 'use-count-up'
import { ChevronDown } from 'react-feather'
import { ExternalLink } from '../../theme'
import { ThemeColorCard } from '../Card'
import Settings from '../Settings'
import Menu from '../Menu'
import Row, { RowFixed } from '../Row'
import Web3Status from '../Web3Status'
import Modal from '../Modal'
import PngBalanceContent from './PngBalanceContent'
// import usePrevious from '../../hooks/usePrevious'
import LanguageSelection from '../LanguageSelection'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { MenuFlyout } from '../StyledMenu'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import {
  NETWORK_LABELS,
  ANALYTICS_PAGE,
  NETWORK_CURRENCY
} from 'src/constants'
import { Hidden, Visible } from 'src/theme'
import { useChainId } from 'src/hooks'

const HeaderFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.5rem 1rem;
  `}
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    border-radius: 12px 12px 0 0;
    background-color: ${({ theme }) => theme.bg1};
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
   flex-direction: row-reverse;
    align-items: center;
  `};
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

const HeaderLinks = styled(Row)`
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem 0 1rem 1rem;
    justify-content: flex-end;
    overflow-x: scroll;
`};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  :focus {
    border: 1px solid blue;
  }
  /* :hover {
    background-color: ${({ theme, active }) => (!active ? theme.bg2 : theme.bg4)};
  } */
`

const NetworkCard = styled(ThemeColorCard)`
  border-radius: 12px;
  padding: 8px 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0;
    margin-right: 0.5rem;
    width: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

const PngIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const StyledLink = styled.div<{ isActive: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme, isActive }) => (isActive ? theme.text1 : theme.text2)};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: ${({ isActive }) => (isActive ? 600 : 500)};
  font-weight: 500;
  line-height: 24px;

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const StyledFlyoutLink = styled(StyledLink)`
  margin: 0;
  line-height: 0;
  display: none;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: block;
  `}
`

const StyledExternalLink = styled(ExternalLink).attrs({
  activeClassName
})<{ isActive?: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    text-decoration: none;
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
`}
`

const StyledExternalFlyoutLink = styled(StyledExternalLink)`
  display: none;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: block;
  `}
`

const NarrowMenuFlyout = styled(MenuFlyout)`
  min-width: 8.125rem;
  left: 15rem;
  right: auto !important;
`

export default function Header() {
  const { account } = useActiveWeb3React()
  const chainId = useChainId()

  const { t } = useTranslation()

  const location: any = useLocation()

  const userEthBalance = useETHBalances(chainId, account ? [account] : [])?.[account ?? '']

  // const aggregateBalance: TokenAmount | undefined = useAggregatePngBalance()

  const [showPngBalanceModal, setShowPngBalanceModal] = useState(false)

  // const countUpValue = aggregateBalance?.toFixed(0) ?? '0'
  // const countUpValuePrevious = usePrevious(countUpValue) ?? '0'
  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.FARM)
  const toggle = useToggleModal(ApplicationModal.FARM)
  useOnClickOutside(node, open ? toggle : undefined)

  return (
    <HeaderFrame>
      <Modal isOpen={showPngBalanceModal} onDismiss={() => setShowPngBalanceModal(false)}>
        <PngBalanceContent setShowPngBalanceModal={setShowPngBalanceModal} />
      </Modal>
      <HeaderRow>
        <Title href=".">
          <PngIcon>
            <Hidden upToMedium={true}>
              <img width={'125px'} src={Logo} alt="logo" style={{marginTop: '10px'}} />
            </Hidden>
            <Visible upToMedium={true}>
              <img width={'100px'} src={Logo} alt="logo" style={{marginTop: '8px'}}/>
            </Visible>
          </PngIcon>
        </Title>
        <HeaderLinks>
          <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
            {t('header.swap')}
          </StyledNavLink>
          <StyledNavLink
            id={`pool-nav-link`}
            to={'/pool'}
            isActive={(match, { pathname }) =>
              Boolean(match) ||
              pathname.startsWith('/add') ||
              pathname.startsWith('/remove') ||
              pathname.startsWith('/create') ||
              pathname.startsWith('/find')
            }
          >
            {t('header.pool')}
          </StyledNavLink>

          <StyledLink
            id={`png-nav-link`}
            onClick={toggle}
            isActive={location?.pathname?.startsWith('/quack')}
            ref={node as any}
          >
            <StyledNavLink id={`swap-nav-link`} to={'/quack/2'}>
              {t('header.farm')}
            </StyledNavLink>
          </StyledLink>
          <StyledExternalLink id={`info-nav-link`} href={ANALYTICS_PAGE}>
            {t('header.charts')} <span style={{ fontSize: '11px' }}>↗</span>
          </StyledExternalLink>
          <StyledFlyoutLink id={`png-nav-link`} onClick={toggle} isActive={false} ref={node as any}>
            <ChevronDown size={20} />
            {open && (
              <NarrowMenuFlyout>
                <StyledExternalFlyoutLink id={`info-nav-link`} href={ANALYTICS_PAGE}>
                  {t('header.charts')} <span style={{ fontSize: '11px' }}>↗</span>
                </StyledExternalFlyoutLink>
              </NarrowMenuFlyout>
            )}
          </StyledFlyoutLink>
        </HeaderLinks>
      </HeaderRow>
      <HeaderControls>
        <HeaderElement>
          <Hidden upToSmall={true}>
            {NETWORK_LABELS[chainId] && (
              <NetworkCard title={NETWORK_LABELS[chainId]}>{NETWORK_LABELS[chainId]}</NetworkCard>
            )}
          </Hidden>
          <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
            {account && userEthBalance ? (
              <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                {userEthBalance?.toSignificant(4)} {NETWORK_CURRENCY[chainId]}
              </BalanceText>
            ) : null}
            <Web3Status />
          </AccountElement>
        </HeaderElement>
        <HeaderElementWrap>
          <Settings />
          <LanguageSelection />
          <Menu />
        </HeaderElementWrap>
      </HeaderControls>
    </HeaderFrame>
  )
}
