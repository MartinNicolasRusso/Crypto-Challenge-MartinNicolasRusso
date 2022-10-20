import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Crypto from '../../components/Crypto';
import {Button} from './styles';

const CryptoList = () => {
  const [coins, setCoins] = useState([]);
  const cryptos = async () => {
    const res = await fetch(
      'https://data.messari.io/api/v2/assets?fields=id,name,slug,symbol,metrics/market_data',
    );
    const data = await res.json();
    setCoins(data.data);
  };
  useEffect(() => {
    cryptos();
  }, []);

  const renderItem = ({item}) => <Crypto item={item} />;
  return (
    <SafeAreaView>
      <FlatList
        data={coins}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Button>+ Add Cryptocurrency</Button>
    </SafeAreaView>
  );
};
export default CryptoList;
