import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Crypto from '../../components/Crypto';
import {CryptoTypes} from '../../types';
import {Button} from './styles';
import {BASE_URL} from '@env';

const CryptoList = () => {
  const [coins, setCoins] = useState<CryptoTypes[]>([]);
  const loadCryptosData = async () => {
    const res = await fetch(
      `${BASE_URL}?fields=id,name,slug,symbol,metrics/market_data`,
    );
    const data = await res.json();
    setCoins(data.data);
  };
  useEffect(() => {
    loadCryptosData();
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
