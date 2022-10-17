import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Crypto from '../../components/Crypto';
import ApiCryptos from '../../store/Api';
import {Button} from './styles';

const CryptoList = () => {
  const renderItem = ({item}) => <Crypto item={item} />;
  return (
    <SafeAreaView>
      <FlatList
        data={ApiCryptos}
        keyExtractor={({id}) => id}
        renderItem={renderItem}
      />
      <Button>+ Add Cryptocurrency</Button>
    </SafeAreaView>
  );
};
export default CryptoList;
