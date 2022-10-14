import React from 'react';
import {SafeAreaView} from 'react-native';
import Crypto from '../../components/Crypto';
import ApiCryptos from '../../store/Api';
import {Button} from './styles';

const CryptoList = () => (
  <SafeAreaView>
    {ApiCryptos &&
      ApiCryptos.map(c => {
        return <Crypto key={c.id} {...c} />;
      })}
    <Button>+ Add Cryptocurrency</Button>
  </SafeAreaView>
);

export default CryptoList;