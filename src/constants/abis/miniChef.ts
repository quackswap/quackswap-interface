import { Interface } from '@ethersproject/abi'
import { MasterChefAbi } from '@quackswap/sdk'

const MASTERCHEF_INTERFACE = new Interface(MasterChefAbi)

export { MASTERCHEF_INTERFACE }
