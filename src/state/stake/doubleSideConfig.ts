import { ChainId, WBTT } from '@quackswap/sdk'
import { MINICHEF_ADDRESS } from '../../constants'
import * as TOKENS from '../../constants/tokens'
import { BridgeMigrator, DoubleSideStaking, Migration } from './hooks'

export const DOUBLE_SIDE_STAKING: { [key: string]: DoubleSideStaking } = {
  WBTT_ETH_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ETH[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xa16381eae6285123c323A665D4D99a6bCfaAC307',
    version: 0,
    multiplier: 0
  },
  WBTT_USDT_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.USDT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4f019452f51bbA0250Ec8B69D64282B79fC8BD9f',
    version: 0,
    multiplier: 0
  },
  WBTT_WBTC_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WBTC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x01897e996EEfFf65AE9999C02D1d8D7E9e0C0352',
    version: 0,
    multiplier: 0
  },
  WBTT_PNG_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.QUACK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x8FD2755c6ae7252753361991bDcd6fF55bDc01CE',
    version: 0,
    multiplier: 0
  },
  WBTT_LINK_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.LINK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x7d7eCd4d370384B17DFC1b4155a8410e97841B65',
    version: 0,
    multiplier: 0
  },
  WBTT_DAI_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.DAI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xb5b9DEd9C193731f816AE1f8FfB7f8B0FaE40c88',
    version: 0,
    multiplier: 0
  },
  WBTT_UNI_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.UNI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xe4d9aE03859DaC6d65432d557F75b9b588a38eE1',
    version: 0,
    multiplier: 0
  },
  WBTT_SUSHI_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SUSHI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x88f26b81c9cae4ea168e31BC6353f493fdA29661',
    version: 0,
    multiplier: 0
  },
  WBTT_AAVE_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AAVE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xEe0023108918884181E48902f7C797573F413EcE',
    version: 0,
    multiplier: 0
  },
  WBTT_YFI_V0: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x797CBcf107519f4b279Fc5Db372e292cdF7e6956',
    version: 0,
    multiplier: 0
  },
  PNG_ETH_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.ETH[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4e550fEfBf888cB43eaD73d821f646F43b1F2309',
    version: 0,
    multiplier: 0
  },
  PNG_USDT_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.USDT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x7accC6f16Bf8c0Dce22371fbD914c6B5b402BF9f',
    version: 0,
    multiplier: 0
  },
  PNG_WBTC_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.WBTC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x99B06B9673fea30Ba55179b1433ce909Fdc28723',
    version: 0,
    multiplier: 0
  },
  PNG_LINK_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.LINK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4Ad6e309805cb477010beA9fFC650cB27C1A9504',
    version: 0,
    multiplier: 0
  },
  PNG_DAI_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.DAI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x8866077F08b076360C25F4Fd7fbC959ef135474C',
    version: 0,
    multiplier: 0
  },
  PNG_UNI_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.UNI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x41188B4332fe68135d1524E43db98e81519d263B',
    version: 0,
    multiplier: 0
  },
  PNG_SUSHI_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.SUSHI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x6955Cb85edEa63F861c0Be39C3d7F8921606c4Dc',
    version: 0,
    multiplier: 0
  },
  PNG_AAVE_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.AAVE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xb921a3aE9CeDa66fa8A74DBb0946367FB14faE34',
    version: 0,
    multiplier: 0
  },
  PNG_YFI_V0: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.YFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x2061298C76cD76219b9b44439e96A75F19C61f7f',
    version: 0,
    multiplier: 0
  },
  WBTT_ETH_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ETH[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x417C02150b9a31BcaCb201d1D60967653384E1C6',
    version: 1,
    multiplier: 0
  },
  WBTT_WETHe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WETHe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x830A966B9B447c9B15aB24c0369c4018E75F31C9',
    version: 1,
    multiplier: 8
  },
  WBTT_USDT_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.USDT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x94C021845EfE237163831DAC39448cFD371279d6',
    version: 1,
    multiplier: 0
  },
  WBTT_USDTe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.USDTe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x006cC053bdb84C2d6380B3C4a573d84636378A47',
    version: 1,
    multiplier: 11
  },
  WBTT_WBTC_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WBTC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xe968E9753fd2c323C2Fe94caFF954a48aFc18546',
    version: 1,
    multiplier: 0
  },
  WBTT_WBTCe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WBTCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x30CbF11f6fcc9FC1bF6E55A6941b1A47A56eAEC5',
    version: 1,
    multiplier: 6
  },
  WBTT_PNG_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.QUACK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x574d3245e36Cf8C9dc86430EaDb0fDB2F385F829',
    version: 1,
    multiplier: 12
  },
  WBTT_LINK_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.LINK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xBDa623cDD04d822616A263BF4EdbBCe0B7DC4AE7',
    version: 1,
    multiplier: 0
  },
  WBTT_LINKe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.LINKe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x2e10D9d08f76807eFdB6903025DE8e006b1185F5',
    version: 1,
    multiplier: 4
  },
  WBTT_DAI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.DAI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x701e03fAD691799a8905043C0d18d2213BbCf2c7',
    version: 1,
    multiplier: 0
  },
  WBTT_DAIe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.DAIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x63A84F66b8c90841Cb930F2dC3D28799F0c6657B',
    version: 1,
    multiplier: 10
  },
  WBTT_UNI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.UNI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x1F6aCc5F5fE6Af91C1BB3bEbd27f4807a243D935',
    version: 1,
    multiplier: 0
  },
  WBTT_UNIe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.UNIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x6E36A71c1A211f01Ff848C1319D4e34BB5483224',
    version: 1,
    multiplier: 1
  },
  WBTT_SUSHI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SUSHI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xDA354352b03f87F84315eEF20cdD83c49f7E812e',
    version: 1,
    multiplier: 0
  },
  WBTT_SUSHIe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SUSHIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x2D55341f2abbb5472020e2d556a4f6B951C8Fa22',
    version: 1,
    multiplier: 1
  },
  WBTT_AAVE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AAVE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4dF32F1F8469648e89E62789F4246f73fe768b8E',
    version: 1,
    multiplier: 0
  },
  WBTT_AAVEe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AAVEe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xa04fCcE7955312709c838982ad0E297375002C32',
    version: 1,
    multiplier: 2
  },
  WBTT_YFI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x2C31822F35506C6444F458Ed7470c79f9924Ee86',
    version: 1,
    multiplier: 0
  },
  WBTT_YFIe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YFIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x642c5B7AC22f56A0eF87930a89f0980FcA904B03',
    version: 1,
    multiplier: 1
  },
  WBTT_SNOB_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SNOB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x640D754113A3CBDd80BcCc1b5c0387148EEbf2fE',
    version: 1,
    multiplier: 1
  },
  WBTT_VSO_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.VSO[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xf2b788085592380bfCAc40Ac5E0d10D9d0b54eEe',
    version: 1,
    multiplier: 1
  },
  WBTT_SPORE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SPORE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xd3e5538A049FcFcb8dF559B85B352302fEfB8d7C',
    version: 1,
    multiplier: 2
  },
  WBTT_BIFI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.BIFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4E258f7ec60234bb6f3Ea7eCFf5931901182Bd6E',
    version: 1,
    multiplier: 2
  },
  WBTT_BNB_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.BNB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x21CCa1672E95996413046077B8cf1E52F080A165',
    version: 1,
    multiplier: 2
  },
  WBTT_XAVA_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.XAVA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4219330Af5368378D5ffd869a55f5F2a26aB898c',
    version: 1,
    multiplier: 2
  },
  WBTT_PEFI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.PEFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xd7EDBb1005ec65721a3976Dba996AdC6e02dc9bA',
    version: 1,
    multiplier: 4
  },
  WBTT_TRYB_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TRYB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x079a479e270E72A1899239570912358C6BC22d94',
    version: 1,
    multiplier: 2
  },
  WBTT_SHERPA_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SHERPA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x99918c92655D6f8537588210cD3Ddd52312CB36d',
    version: 1,
    multiplier: 2
  },
  WBTT_YAK_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YAK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xb600429CCD364F1727F91FC0E75D67d65D0ee4c5',
    version: 1,
    multiplier: 4
  },
  WBTT_DYP_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.DYP[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x29a7F3D1F27637EDA531dC69D989c86Ab95225D8',
    version: 1,
    multiplier: 2
  },
  WBTT_QI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.QI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xeD472431e02Ea9EF8cC99B9812c335ac0873bba2',
    version: 1,
    multiplier: 1
  },
  WBTT_WALBT_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WALBT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xa296F9474e77aE21f90afb50713F44Cc6916FbB2',
    version: 1,
    multiplier: 2
  },
  WBTT_HUSKY_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.HUSKY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x2e60ab79BbCdfea164874700D5d98969a386eB2a',
    version: 1,
    multiplier: 2
  },
  WBTT_USDCe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.USDCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x84B536dA1A2D9b0609f9Da73139674cc2D75AF2D',
    version: 1,
    multiplier: 11
  },
  WBTT_LYD_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.LYD[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xE6dE666a80a357497A2cAB3A91F1c28dcAA1Eca4',
    version: 1,
    multiplier: 2
  },
  WBTT_TUSD_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TUSD[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xf2dd964AcF53ad8959540CceEFD9FeA13d4D0Eb1',
    version: 1,
    multiplier: 2
  },
  WBTT_GAJ_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.GAJ[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xd31FFD05a41645631A22a64c1f870a6248A4DDcF',
    version: 1,
    multiplier: 2
  },
  WBTT_GDL_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.GDL[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xA6F2408e3CD34084c37A0D88FED8C6b6490F7529',
    version: 1,
    multiplier: 2
  },
  WBTT_MFI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.MFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xd64370aeDbEbbAE04CfCaE27E8E0c5ecbD343336',
    version: 1,
    multiplier: 1
  },
  WBTT_SHIBX_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SHIBX[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x0029381eFF48E9eA963F8095eA204098ac8e44B5',
    version: 1,
    multiplier: 2
  },
  WBTT_AVE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AVE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x94183DD08FFAa595e43B104804d55eE95492C8cB',
    version: 1,
    multiplier: 1
  },
  WBTT_ELE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ELE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x10E5d5f598abb970F85456Ea59f0611D77E00168',
    version: 1,
    multiplier: 2
  },
  WBTT_FRAX_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.FRAX[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xfd0824dF1E598D34C3495e1C2a339E2FA23Af40D',
    version: 1,
    multiplier: 0
  },
  WBTT_FXS_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.FXS[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x76Ad5c64Fe6B26b6aD9aaAA19eBa00e9eCa31FE1',
    version: 1,
    multiplier: 0
  },
  WBTT_START_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.START[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x5105d9De003fB7d22979cd0cE167Ab919E60900A',
    version: 1,
    multiplier: 2
  },
  WBTT_SWAPe_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SWAPe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x255e7a0eB5aa1616781702203B042821C35394eF',
    version: 1,
    multiplier: 2
  },
  WBTT_YTS_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YTS[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x6F571bA11447136fC11BA9AC98f0f0233dAc1BFF',
    version: 1,
    multiplier: 2
  },
  WBTT_TUNDRA_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TUNDRA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xeD617a06C6c727827Ca3B6fb3E565C68342c4c2b',
    version: 1,
    multiplier: 2
  },
  WBTT_XUSD_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.XUSD[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xbD56b964FCdd208a7a83C291864eEb8271BaB773',
    version: 1,
    multiplier: 2
  },
  WBTT_XDO_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.XDO[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x5d479aEbfc49b9e08860BbfCfb3BB4D768Aa1fc3',
    version: 1,
    multiplier: 0
  },
  WBTT_JOE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.JOE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xC0B2D45b8617997bcDad0F33AEE03e4DF4C4f81E',
    version: 1,
    multiplier: 4
  },
  WBTT_ZABU_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ZABU[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x184949E5A7E8740Da20231B90Fd38E7725FA657A',
    version: 1,
    multiplier: 0
  },
  WBTT_YAY_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YAY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x2DaE4d6Cccd824917cA783774C1e8854FF86951F',
    version: 1,
    multiplier: 2
  },
  WBTT_STORM_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.STORM[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x62Da43b98a9338221cc36dDa40605B0F5eA0Ac2d',
    version: 1,
    multiplier: 2
  },
  WBTT_OOE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.OOE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xB9cE09322FC55Da298e27b8678d300423988b40E',
    version: 1,
    multiplier: 4
  },
  WBTT_VEE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.VEE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xDa959F3464FE2375f0B1f8A872404181931978B2',
    version: 1,
    multiplier: 2
  },
  WBTT_AVXT_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AVXT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x05930052a9a1e2f14B0e6cCc726b60E06792fB67',
    version: 1,
    multiplier: 2
  },
  WBTT_OLIVE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.OLIVE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x01bc14c7063212c8cAc269960bA875E58568E4fD',
    version: 1,
    multiplier: 2
  },
  WBTT_APEIN_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.APEIN[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xac102f66A1670508DFA5753Fcbbba80E0648a0c7',
    version: 1,
    multiplier: 4
  },
  WBTT_GB_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.GB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x6cFdB5Ce2a26a5b07041618fDAD81273815c8bb4',
    version: 1,
    multiplier: 4
  },
  WBTT_CNR_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.CNR[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xd43035F5Ef932E1335A664c707d85c54C924667e',
    version: 1,
    multiplier: 2
  },
  WBTT_CYCLE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.CYCLE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x45cd033361E9fEF750AAea96DbC360B342F4b4a2',
    version: 1,
    multiplier: 2
  },
  WBTT_ICE_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.IronICE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x12b493A6E4F185EF1feef45565654F71156C25bA',
    version: 1,
    multiplier: 2
  },
  WBTT_MYAK_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.MYAK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x716c19807f46F97DdAc0745878675fF5B3A75004',
    version: 1,
    multiplier: 4
  },
  WBTT_WOW_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WOW[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x437352A8E2394379521BC84f0874c66c94F32fbb',
    version: 1,
    multiplier: 2
  },
  WBTT_TEDDY_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TEDDY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x676247D8729B728BEEa83d1c1314acDD937327b6',
    version: 1,
    multiplier: 5
  },
  WBTT_TSD_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TSD[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x30914Dbb452BeF7aD226aF0Aeb130658A4aC1Cb0',
    version: 1,
    multiplier: 5
  },
  WBTT_EVRT_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.EVRT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xfC04c452035A1E4D4fD4d5BF6b083CB563a20CA4',
    version: 1,
    multiplier: 2
  },
  WBTT_RAI_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.RAI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xA69057977211C7bAe847c72dF6338d1B71E838af',
    version: 1,
    multiplier: 2
  },
  WBTT_ABTTB_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ABTTB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xAa01F80375528F36291677C683905b4A113A6470',
    version: 1,
    multiplier: 2
  },
  WBTT_INSUR_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.INSUR[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x41d731926E5B8d3ba70Bb62B9f067A163bE706ab',
    version: 1,
    multiplier: 2
  },
  WBTT_AVME_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AVME[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xE4FED988974C0B7DFEB162287DeD67c6B197Af63',
    version: 1,
    multiplier: 2
  },
  WBTT_TIME_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TIME[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x0875e51e54fbb7e63b1819acb069dc8d684563eb',
    version: 1,
    multiplier: 4
  },
  WBTT_HCT_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.HCT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x6528DCc443B2e014185946d1Dc1efd6e9aBE4CD8',
    version: 1,
    multiplier: 4
  },
  WBTT_FRAXV2_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.FRAXV2[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x55152E05202AE58fDab26b20c6Fd762F5BCA797c',
    version: 1,
    multiplier: 6
  },
  WBTT_ROCO_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ROCO[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x23855F21d158efAE410e3568FB623C35BC1952E0',
    version: 1,
    multiplier: 4
  },
  WBTT_IMX_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.IMX[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xD6887808CfCd5cBFf867379e41FaC912F167b084',
    version: 1,
    multiplier: 4
  },
  WBTT_AMPL_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AMPL[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xFE6338BEBef1989afA225494A63f235D8e8f46fd',
    version: 1,
    multiplier: 4
  },
  WBTT_ORBS_V1: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ORBS[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xc2ecb35624Ad941474371E696AC8DAd0dda5e4d5',
    version: 1,
    multiplier: 4
  },

  PNG_ETH_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.ETH[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x7ac007afB5d61F48D1E3C8Cc130d4cf6b765000e',
    version: 1,
    multiplier: 0
  },
  PNG_WETHe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.WETHe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x03a9091620CACeE4968c915232B175C16a584733',
    version: 1,
    multiplier: 3
  },
  PNG_USDT_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.USDT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xE2510a1fCCCde8d2D1c40b41e8f71fB1F47E5bBA',
    version: 1,
    multiplier: 0
  },
  PNG_USDTe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.USDTe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x7216d1e173c1f1Ed990239d5c77d74714a837Cd5',
    version: 1,
    multiplier: 10
  },
  PNG_WBTC_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.WBTC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x681047473B6145BA5dB90b074E32861549e85cC7',
    version: 1,
    multiplier: 1
  },
  PNG_WBTCe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.WBTCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xEeEA1e815f12d344b5035a33da4bc383365F5Fee',
    version: 1,
    multiplier: 3
  },
  PNG_LINK_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.LINK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x6356b24b36074AbE2903f44fE4019bc5864FDe36',
    version: 1,
    multiplier: 3
  },
  PNG_LINKe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.LINKe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4B283e4211B3fAa525846d21869925e78f93f189',
    version: 1,
    multiplier: 3
  },
  PNG_DAI_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.DAI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xe3103e565cF96a5709aE8e603B1EfB7fED04613B',
    version: 1,
    multiplier: 0
  },
  PNG_DAIe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.DAIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xF344611DD94099708e508C2Deb16628578940d77',
    version: 1,
    multiplier: 1
  },
  PNG_UNI_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.UNI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4f74BbF6859A994e7c309eA0f11E3Cc112955110',
    version: 1,
    multiplier: 0
  },
  PNG_UNIe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.UNIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xD4E49A8Ec23daB51ACa459D233e9447DE03AFd29',
    version: 1,
    multiplier: 3
  },
  PNG_SUSHI_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.SUSHI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x633F4b4DB7dD4fa066Bd9949Ab627a551E0ecd32',
    version: 1,
    multiplier: 0
  },
  PNG_SUSHIe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.SUSHIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x923E69322Bea5e22799a29Dcfc9c616F3B5cF95b',
    version: 1,
    multiplier: 3
  },
  PNG_AAVE_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.AAVE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xFd9ACEc0F413cA05d5AD5b962F3B4De40018AD87',
    version: 1,
    multiplier: 0
  },
  PNG_AAVEe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.AAVEe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x3F91756D773A1455A7a1A70f5d9239F1B1d1f095',
    version: 1,
    multiplier: 0
  },
  PNG_YFI_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.YFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xc7D0E29b616B29aC6fF4FD5f37c8Da826D16DB0D',
    version: 1,
    multiplier: 0
  },
  PNG_YFIe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.YFIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x269Ed6B2040f965D9600D0859F36951cB9F01460',
    version: 1,
    multiplier: 3
  },
  PNG_SNOB_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.SNOB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x08B9A023e34Bad6Db868B699fa642Bf5f12Ebe76',
    version: 1,
    multiplier: 5
  },
  PNG_VSO_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.VSO[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x759ee0072901f409e4959E00b00a16FD729397eC',
    version: 1,
    multiplier: 5
  },
  PNG_SPORE_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.SPORE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x12A33F6B0dd0D35279D402aB61587fE7eB23f7b0',
    version: 1,
    multiplier: 5
  },
  PNG_BIFI_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.BIFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x518B07E2d9e08A8c2e3cB7704336520827a4d399',
    version: 1,
    multiplier: 0
  },
  PNG_BNB_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.BNB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x68a90C38bF4f90AC2a870d6FcA5b0A5A218763AD',
    version: 1,
    multiplier: 5
  },
  PNG_XAVA_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.XAVA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x5b3Ed7f47D1d4FA22b559D043a09d78bc55A94E9',
    version: 1,
    multiplier: 5
  },
  PNG_PEFI_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.PEFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x76e404Ab7357fD97d4f1e8Dd52f298A035fd408c',
    version: 1,
    multiplier: 5
  },
  PNG_TRYB_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.TRYB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x0A9773AEbc1429d860A492d70c8EA335fAa9F19f',
    version: 1,
    multiplier: 5
  },
  PNG_SHERPA_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.SHERPA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x80E919784e7c5AD3Dd59cAfCDC0e9C079B65f262',
    version: 1,
    multiplier: 0
  },
  PNG_YAK_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.YAK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x42ff9473a5AEa00dE39355e0288c7A151EB00B6e',
    version: 1,
    multiplier: 5
  },
  PNG_DYP_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.DYP[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x3A0eF6a586D9C15de30eDF5d34ae00E26b0125cE',
    version: 1,
    multiplier: 5
  },
  PNG_QI_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.QI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x2bD42C357a3e13F18849C67e8dC108Cc8462ae33',
    version: 1,
    multiplier: 5
  },
  PNG_WALBT_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.WALBT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x393fe4bc29AfbB3786D99f043933c49097449fA1',
    version: 1,
    multiplier: 5
  },
  PNG_HUSKY_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.HUSKY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x07b34dAABcb75C9cbD0c8AEfbC0ed5E30845eF12',
    version: 1,
    multiplier: 5
  },
  PNG_USDCe_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.USDCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x73d1cC4B8dA555005E949B3ECEE490A7206C14DF',
    version: 1,
    multiplier: 10
  },
  PNG_LYD_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.LYD[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xe1314E6d436877850BB955Ac074226FCB0B8a86d',
    version: 1,
    multiplier: 5
  },
  PNG_TUSD_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.TUSD[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x6fa49bd916e392dc9264636b0b5Cf2beee652dA3',
    version: 1,
    multiplier: 5
  },
  PNG_GAJ_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.GAJ[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x95bD8FDb58692d343C89bC7bc435773779CC0e47',
    version: 1,
    multiplier: 5
  },
  PNG_GDL_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.GDL[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xb008e7AD32c710B07fb8D4453aBC79214Cd34891',
    version: 1,
    multiplier: 0
  },
  PNG_MFI_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.MFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x4c0650668A63EF468c7bDCd910A62287e9FC4d52',
    version: 1,
    multiplier: 5
  },
  PNG_SHIBX_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.SHIBX[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xEcF9b9aE88150F11cbf2263c69823e2ECb84F07B',
    version: 1,
    multiplier: 0
  },
  PNG_AVE_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.AVE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0x7C960e55C8119457528490C3a34C1438FaF6B039',
    version: 1,
    multiplier: 5
  },
  PNG_ELE_V1: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.ELE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: '0xfcB0C53FC5c71005D11C6838922e254323b7Ca06',
    version: 1,
    multiplier: 0
  },

  WBTT_PNG_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.QUACK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  PNG_USDCe_V2: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.USDCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  USDTe_USDCe_V2: {
    tokens: [TOKENS.USDTe[ChainId.BITTORRENT_MAINNET], TOKENS.USDCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_SPELL_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SPELL[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_TIME_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TIME[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_WBTCe_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WBTCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_DAIe_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.DAIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_USDTe_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.USDTe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_WETHe_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WETHe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_USDCe_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.USDCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_LINKe_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.LINKe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  USDCe_DAIe_V2: {
    tokens: [TOKENS.USDCe[ChainId.BITTORRENT_MAINNET], TOKENS.DAIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_KLO_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.KLO[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_WALBT_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WALBT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_JOE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.JOE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_YAK_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YAK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_APEIN_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.APEIN[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_ROCO_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ROCO[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_XAVA_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.XAVA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_QI_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.QI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_FRAX_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.FRAX[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_FRAXV2_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.FRAXV2[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_AMPL_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AMPL[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_SNOB_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SNOB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_PEFI_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.PEFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_OOE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.OOE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_TUSD_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TUSD[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_HUSKY_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.HUSKY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_TEDDY_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TEDDY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_DYP_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.DYP[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_SPORE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SPORE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_YAY_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YAY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_VEE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.VEE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_WOW_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.WOW[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_HCT_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.HCT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_IMX_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.IMX[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_INSUR_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.INSUR[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_ORBS_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ORBS[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  MIM_USDCe_V2: {
    tokens: [TOKENS.MIM[ChainId.BITTORRENT_MAINNET], TOKENS.USDCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_gOHM_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.gOHM[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_CRA_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.CRA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_CRAFT_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.CRAFT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_MAXI_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.MAXI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  TUSD_DAIe_V2: {
    tokens: [TOKENS.TUSD[ChainId.BITTORRENT_MAINNET], TOKENS.DAIe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_AVAI_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AVAI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_ORCA_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ORCA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_JEWEL_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.JEWEL[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  NFTD_USDTe_V2: {
    tokens: [TOKENS.NFTD[ChainId.BITTORRENT_MAINNET], TOKENS.USDTe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_CLY_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.CLY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_COOK_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.COOK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  USDTe_SKILL_V2: {
    tokens: [TOKENS.USDTe[ChainId.BITTORRENT_MAINNET], TOKENS.SKILL[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  MIM_WBTT_V2: {
    tokens: [TOKENS.MIM[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_TUS_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TUS[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  USDCe_USDC_V2: {
    tokens: [TOKENS.USDCe[ChainId.BITTORRENT_MAINNET], TOKENS.USDC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_USDC_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.USDC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_HSHARES_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.HSHARES[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_HERMES_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.HERMES[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_PTP_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.PTP[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_ISA_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ISA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_ICE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ICE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_AVE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AVE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_IDYP_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.iDYP[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_BOOFI_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.BOOFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_VSO_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.VSO[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  LOOT_WBTT_V2: {
    tokens: [TOKENS.LOOT[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  FEED_WBTT_V2: {
    tokens: [TOKENS.FEED[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  DCAU_WBTT_V2: {
    tokens: [TOKENS.DCAU[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  AGEUR_WBTT_V2: {
    tokens: [TOKENS.agEUR[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  MAGE_WBTT_V2: {
    tokens: [TOKENS.MAGE[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  HTZ_WBTT_V2: {
    tokens: [TOKENS.HTZ[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  PLN_WBTT_V2: {
    tokens: [TOKENS.PLN[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  HEC_WBTT_V2: {
    tokens: [TOKENS.HEC[ChainId.BITTORRENT_MAINNET], WBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_RACEX_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.RACEX[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },

  WBTT_axlUST_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.axlUST[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  USDC_axlUST_V2: {
    tokens: [TOKENS.USDC[ChainId.BITTORRENT_MAINNET], TOKENS.axlUST[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_LUNA_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.LUNA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_AAVEe_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AAVEe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_BNB_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.BNB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_IME_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.IME[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_AVXT_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AVXT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_MONEY_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.MONEY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_YDR_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.YDR[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_FIRE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.FIRE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_BAVA_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.BAVA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_BRIBE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.BRIBE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_AGF_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.AGF[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_ODDZ_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ODDZ[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  axlUST_DLAUNCH_V2: {
    tokens: [TOKENS.axlUST[ChainId.BITTORRENT_MAINNET], TOKENS.DLAUNCH[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_ACRE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ACRE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_sBTT_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.sBTT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_DEP_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.DEP[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_ZEE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.ZEE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_TOMB_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.TOMB[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_MAI_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.MAI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_BUSINESSES_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.BUSINESSES[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_DOLLA_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.DOLLA[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_NCASH_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.NCASH[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_KACY_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.KACY[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_OML_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.OML[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },

  USDC_JPYC_V2: {
    tokens: [TOKENS.USDC[ChainId.BITTORRENT_MAINNET], TOKENS.JPYC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  UST_PNG_V2: {
    tokens: [TOKENS.UST[ChainId.BITTORRENT_MAINNET], TOKENS.QUACK[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_UST_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.UST[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  UST_USDC_V2: {
    tokens: [TOKENS.UST[ChainId.BITTORRENT_MAINNET], TOKENS.USDC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_axlATOM_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.axlATOM[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_LOST_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.LOST[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_KTE_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.KTE[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_BPT_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.BPT[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  PNG_SFI_V2: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.SFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_FITFI_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.FITFI[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_SLIME_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.SLIME[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  PNG_ZEUS_V2: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.ZEUS[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  PNG_USDC_V2: {
    tokens: [TOKENS.QUACK[ChainId.BITTORRENT_MAINNET], TOKENS.USDC[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  WBTT_USDt_V2: {
    tokens: [WBTT[ChainId.BITTORRENT_MAINNET], TOKENS.USDt[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  USDC_WETHe_V2: {
    tokens: [TOKENS.USDC[ChainId.BITTORRENT_MAINNET], TOKENS.WETHe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
    version: 2
  },
  USDC_WBTCe_V2: {
    tokens: [TOKENS.USDC[ChainId.BITTORRENT_MAINNET], TOKENS.WBTCe[ChainId.BITTORRENT_MAINNET]],
    stakingRewardAddress: MINICHEF_ADDRESS[ChainId.BITTORRENT_MAINNET],
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
