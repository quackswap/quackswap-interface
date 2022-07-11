import { Interface } from '@ethersproject/abi'
import { QuackSwapPairAbi } from '@hotcrosscom/quackswap-sdk'

const QUACKSWAP_PAIR_INTERFACE = new Interface(QuackSwapPairAbi)

export { QUACKSWAP_PAIR_INTERFACE }
