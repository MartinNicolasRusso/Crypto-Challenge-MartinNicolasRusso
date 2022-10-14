import {CryptoTypes} from '../../types/index';

const ApiCryptos: CryptoTypes[] = [
  {
    id: 'BCT',
    slug: 'BCT',
    name: 'Bitcoin',
    price: '1.234',
    market_porcentage: '2.0',
    image: require('../../assets/Bitcoin.png'),
  },
  {
    id: 'ETH',
    slug: 'ETH',
    name: 'Ethereum',
    price: '1.485',
    market_porcentage: '4.5',
    image: require('../../assets/Ethereum.png'),
  },
  {
    id: 'USDT',
    slug: 'USDT',
    name: 'Tether',
    price: '1.902',
    market_porcentage: '3.4',
    image: require('../../assets/USDT.png'),
  },
];

export default ApiCryptos;