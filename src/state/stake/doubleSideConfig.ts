import { ChainId, WBTT } from '@hotcrosscom/quackswap-sdk'
import { MASTERCHEF_ADDRESS } from '../../constants'
import * as TOKENS from '../../constants/tokens'
import { BridgeMigrator, DoubleSideStaking, Migration } from './hooks'

export const DOUBLE_SIDE_STAKING: { [key: string]: DoubleSideStaking } = {
  PGL_WBTT_V2: {
    tokens: [TOKENS.PGL[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MASTERCHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  }
}

// The first mapping in the list takes priority if multiple migrations exist from the same pool
export const MIGRATIONS: Migration[] = [
  // From v1 (WBTT)
  { from: DOUBLE_SIDE_STAKING.WBTT_ETH_V1, to: DOUBLE_SIDE_STAKING.WBTT_WETHe_V1 },
  { from: DOUBLE_SIDE_STAKING.WBTT_USDT_V1, to: DOUBLE_SIDE_STAKING.WBTT_USDTe_V1 },
  { from: DOUBLE_SIDE_STAKING.WBTT_WBTC_V1, to: DOUBLE_SIDE_STAKING.WBTT_WBTCe_V1 },
  { from: DOUBLE_SIDE_STAKING.WBTT_LINK_V1, to: DOUBLE_SIDE_STAKING.WBTT_LINKe_V1 },
  { from: DOUBLE_SIDE_STAKING.WBTT_DAI_V1, to: DOUBLE_SIDE_STAKING.WBTT_DAIe_V1 },
  { from: DOUBLE_SIDE_STAKING.WBTT_UNI_V1, to: DOUBLE_SIDE_STAKING.WBTT_UNIe_V1 },
  { from: DOUBLE_SIDE_STAKING.WBTT_SUSHI_V1, to: DOUBLE_SIDE_STAKING.WBTT_SUSHIe_V1 },
  { from: DOUBLE_SIDE_STAKING.WBTT_AAVE_V1, to: DOUBLE_SIDE_STAKING.WBTT_AAVEe_V1 },
  { from: DOUBLE_SIDE_STAKING.WBTT_YFI_V1, to: DOUBLE_SIDE_STAKING.WBTT_YFIe_V1 },
  // From v1 (QUACK)
  { from: DOUBLE_SIDE_STAKING.PNG_ETH_V1, to: DOUBLE_SIDE_STAKING.PNG_WETHe_V1 },
  { from: DOUBLE_SIDE_STAKING.PNG_USDT_V1, to: DOUBLE_SIDE_STAKING.PNG_USDTe_V1 },
  { from: DOUBLE_SIDE_STAKING.PNG_WBTC_V1, to: DOUBLE_SIDE_STAKING.PNG_WBTCe_V1 },
  { from: DOUBLE_SIDE_STAKING.PNG_LINK_V1, to: DOUBLE_SIDE_STAKING.PNG_LINKe_V1 },
  { from: DOUBLE_SIDE_STAKING.PNG_DAI_V1, to: DOUBLE_SIDE_STAKING.PNG_DAIe_V1 },
  { from: DOUBLE_SIDE_STAKING.PNG_UNI_V1, to: DOUBLE_SIDE_STAKING.PNG_UNIe_V1 },
  { from: DOUBLE_SIDE_STAKING.PNG_SUSHI_V1, to: DOUBLE_SIDE_STAKING.PNG_SUSHIe_V1 },
  { from: DOUBLE_SIDE_STAKING.PNG_AAVE_V1, to: DOUBLE_SIDE_STAKING.PNG_AAVEe_V1 },
  { from: DOUBLE_SIDE_STAKING.PNG_YFI_V1, to: DOUBLE_SIDE_STAKING.PNG_YFIe_V1 }
]

export const BRIDGE_MIGRATORS: BridgeMigrator[] = [
  { aeb: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15', ab: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB' }, // ETH
  { aeb: '0xde3A24028580884448a5397872046a019649b084', ab: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118' }, // USDT
  { aeb: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB', ab: '0x50b7545627a5162F82A992c33b87aDc75187B218' }, // WBTC
  { aeb: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651', ab: '0x5947BB275c521040051D82396192181b413227A3' }, // LINK
  { aeb: '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a', ab: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70' }, // DAI
  { aeb: '0xf39f9671906d8630812f9d9863bBEf5D523c84Ab', ab: '0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580' }, // UNI
  { aeb: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc', ab: '0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76' }, // SUSHI
  { aeb: '0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9', ab: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9' }, // AAVE
  { aeb: '0x99519AcB025a0e0d44c3875A4BbF03af65933627', ab: '0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc' } // YFI
]

export const DOUBLE_SIDE_STAKING_V0: DoubleSideStaking[] = Object.values(DOUBLE_SIDE_STAKING).filter(
  staking => staking.version === 0
)
export const DOUBLE_SIDE_STAKING_V1: DoubleSideStaking[] = Object.values(DOUBLE_SIDE_STAKING).filter(
  staking => staking.version === 1
)
export const DOUBLE_SIDE_STAKING_V2: DoubleSideStaking[] = Object.values(DOUBLE_SIDE_STAKING).filter(
  staking => staking.version === 2
)

export const DOUBLE_SIDE_STAKING_REWARDS_CURRENT_VERSION = Math.max(
  ...Object.values(DOUBLE_SIDE_STAKING).map(staking => staking.version)
)

export const DOUBLE_SIDE_STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: DoubleSideStaking[][]
} = {
  [ChainId.BITTORRENT_MAINNET]: [DOUBLE_SIDE_STAKING_V0, DOUBLE_SIDE_STAKING_V1, DOUBLE_SIDE_STAKING_V2]
}
