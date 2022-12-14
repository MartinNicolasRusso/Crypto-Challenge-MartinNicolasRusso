import React, {useEffect} from 'react';
import Crypto from '../../components/Crypto';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';
import {Button, TextAddCrypto} from '../HomeScreen/styles';
import {useDispatch, useSelector} from 'react-redux';
import {updateCryptos} from '../../store/actions';
import theme from '../../utils/themes';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const cryptos = useSelector(state => state.cryptos);
  const renderItem = ({item}) => <Crypto item={item} />;

  const handleUpdate = () => {
    dispatch(updateCryptos());
  };
  
  useEffect(() => {
    const interval = setInterval(() => handleUpdate(), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.blue}/>
      <FlatList
        data={cryptos.cryptos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Button onPress={() => navigation.navigate('AddCrypto')}>
        <TextAddCrypto>+ Add New CryptoCurrency</TextAddCrypto>
      </Button>
    </SafeAreaView>
  );
};
export default Home;
