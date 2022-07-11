import { Interface } from '@ethersproject/abi'
import { StakingRewardsAbi } from '@hotcrosscom/quackswap-sdk'

const STAKING_REWARDS_INTERFACE = new Interface(StakingRewardsAbi)

export { STAKING_REWARDS_INTERFACE }
