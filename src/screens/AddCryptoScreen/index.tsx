import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  Button,
  Input,
  ContainerScreen,
  ButtonAdd,
  AddText,
  Title,
} from './styles';
import theme from '../../utils/themes';
import {useDispatch, useSelector} from 'react-redux';
import {addNewCrypto} from '../../store/actions';

const AddNewCrypto = ({navigation}) => {
  const cryptos = useSelector(state => state.cryptos);
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();

  const HandleSearch = () => {
    dispatch(addNewCrypto(input, cryptos));
    setInput('');
    navigation.navigate('Home');
  };
  return (
    <ContainerScreen>
      <Button onPress={() => navigation.goBack()}>
        <Text>Back to list</Text>
      </Button>
      <Title>Add a Cryptocurrency</Title>
      <Input
        placeholder="Use a name or ticker symbol"
        onChangeText={setInput}
        borderColor={input ? theme.colors.yellow : theme.colors.grey}
        value={input}
      />
      <ButtonAdd onPress={() => HandleSearch()} disabled={input.length === 0}>
        <AddText>Add</AddText>
      </ButtonAdd>
    </ContainerScreen>
  );
};

export default AddNewCrypto;
