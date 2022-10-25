import React from 'react';
import Crypto from '../../components/Crypto';
import {FlatList, Text, SafeAreaView} from 'react-native';
import {Button} from '../HomeScreen/styles';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const cryptos = useSelector(state => state.cryptos);
  const renderItem = ({item}) => <Crypto item={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={cryptos.cryptos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Button onPress={() => navigation.navigate('AddCrypto')}>
        <Text>+ Add New Crypto Currency</Text>
      </Button>
    </SafeAreaView>
  );
};
export default Home;
