# Configuring the environment (optional)

## Set up leverdex-core
1. `git clone git@github.com:LeverDEX/leverdex-core.git`
2. `cd leverdex-core`
3. `git clone git@github.com:LeverDEX/leverdex-core-abi.git build`
4. Place a private key file in your home folder ~/.leverdex-secret. If you want it to match up with your wallet like MetaMask, create the account in your wallet, copy the private key and paste it into the file.
5. Install the dependencies by running `yarn`
6. then run `npx hardhat node ` in the leverdex-core root and leave it running in a terminal tab
7. in a new tab, move to the build directory `cd leverdex-core/build`
8. create a yarn link to this directory `yarn link`

## set up leverdex-sdk
1. `git clone git@github.com:LeverDEX/leverdex-sdk.git`
2. `yarn`
3. `yarn build`
4. yarn link the core-abi repo `yarn link @leverdex/core-abi`
5. create a link for this repo `yarn link`

## set up this repo (leverdex-app)
1. `yarn`
2. `cp .env.sample .env`
3. link the core repo `yarn link @leverdex/core-abi`
4. link the sdk repo `yarn link @leverdex/sdk`
5. In metamask, set your network to Localhost 8545, then go to Settings > Networks > Localhost 8545 and set the chain ID to 31337
6. `yarn start`

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env.sample` named `.env`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"`

Note that the interface only works on testnets where both
[Uniswap V2](https://uniswap.org/docs/v2/smart-contracts/factory/) and
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.**
CI checks will run against all PRs.
