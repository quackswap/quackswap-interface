import { Interface } from '@ethersproject/abi'
import { QuackSwapPairAbi } from '@quackswap/sdk'

const QUACKSWAP_PAIR_INTERFACE = new Interface(QuackSwapPairAbi)

export { QUACKSWAP_PAIR_INTERFACE }
