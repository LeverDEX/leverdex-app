import { ChainId } from '@leverdex/sdk'

//import Arbitrum from '../assets/networks/arbitrum-network.jpg'
//import Avalanche from '../assets/networks/avalanche-network.jpg'
import Bsc from '../assets/networks/bsc-network.jpg'
import Fantom from '../assets/networks/fantom-network.jpg'
import Avalanche from '../assets/networks/avalanche-network.png'
import Goerli from '../assets/networks/goerli-network.jpg'
import Harmony from '../assets/networks/harmonyone-network.jpg'
import Heco from '../assets/networks/heco-network.jpg'
import Kovan from '../assets/networks/kovan-network.jpg'
//import Matic from '../assets/networks/matic-network.jpg'
//import Moonbeam from '../assets/networks/moonbeam-network.jpg'
import Polygon from '../assets/networks/polygon-network.png'
import Rinkeby from '../assets/networks/rinkeby-network.jpg'
import Ropsten from '../assets/networks/ropsten-network.jpg'
import Xdai from '../assets/networks/xdai-network.jpg'
import Mainnet from '../assets/networks/mainnet-network.jpg'

export const NETWORK_URLS: { [key: number]: string } = {
  [ChainId.MAINNET]: 'https://mainnet.infura.io/v3/692b3d855eca48a8b60d608a6a0c34b0',
  [ChainId.KOVAN]: 'https://kovan.infura.io/v3/692b3d855eca48a8b60d608a6a0c34b0',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
  [ChainId.LOCAL]: 'http://localhost:8545',
  [ChainId.MATIC]: 'https://rpc-mainnet.maticvigil.com/v1/b0858bc7aa27b1333df19546c12718235bd11785',
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org/'
}

export const NETWORK_ICON = {
  [ChainId.MAINNET]: Mainnet,
  [ChainId.ROPSTEN]: Ropsten,
  [ChainId.RINKEBY]: Rinkeby,
  [ChainId.GÖRLI]: Goerli,
  [ChainId.KOVAN]: Kovan,
  [ChainId.FANTOM]: Fantom,
  [ChainId.AVALANCHE]: Avalanche,
  [ChainId.BSC]: Bsc,
  [ChainId.MATIC]: Polygon,
  [ChainId.XDAI]: Xdai,
  [ChainId.HECO]: Heco,
  [ChainId.HARMONY]: Harmony,
  [ChainId.LOCAL]: Harmony,
  [ChainId.FUJI]: Avalanche
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.MATIC]: 'Polygon (Matic)',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.HECO]: 'HECO',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.LOCAL]: 'Local Testnet'
}
