import React, {useState} from 'react';
import {
  Button,
  Input,
  ContainerScreen,
  ButtonAdd,
  AddText,
  BackText,
  Title,
} from './styles';
import theme from '../../utils/themes';
import {useDispatch, useSelector} from 'react-redux';
import {addNewCrypto} from '../../store/actions';
import { StatusBar } from 'react-native';

const AddNewCrypto = ({navigation}) => {
  const cryptos = useSelector(state => state.cryptos);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const HandleSearch = () => {
    dispatch(addNewCrypto(input, cryptos));
    setInput('');
    navigation.navigate('Home');
  };
  return (
    <ContainerScreen>
      <StatusBar backgroundColor={theme.colors.whiteInput}/>
      <Button onPress={navigation.goBack}>
        <BackText>&lt; Back to list</BackText>
      </Button>
      <Title>Add a Cryptocurrency</Title>
      <Input
        placeholder="Use a name or ticker symbol"
        placeholderTextColor={theme.colors.lightgrey}
        onChangeText={setInput}
        borderColor={input ? theme.colors.yellow : theme.colors.lightgrey}
        value={input}
      />
      <ButtonAdd onPress={HandleSearch} disabled={input.length === 0}>
        <AddText ColorAddText={input.length > 0}>Add</AddText>
      </ButtonAdd>
    </ContainerScreen>
  );
};

export default AddNewCrypto;
