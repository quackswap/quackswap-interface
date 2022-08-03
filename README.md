# QuackSwap Interface

An open source interface for QuackSwap -- a community-driven decentralized exchange for Bittorrent assets with fast settlement, low transaction fees, and a democratic distribution -- powered by Bittorrent.

## Accessing the QuackSwap Interface

Visit [app.quackswap.exchange](https://app.quackswap.exchange).

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to your JSON-RPC provider 

Note that the interface only works on testnets where both 
[Quackswap]() and 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Attribution
This code was adapted from this Pangolin repo: [pangolin-interface](https://github.com/pangolindex/interface)
