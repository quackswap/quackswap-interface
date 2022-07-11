import { ChainId } from '@hotcrosscom/quackswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.BITTORRENT_MAINNET]: '0x24C216BE4CeD48f729626dcB65230Efa83cc0CE5'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
