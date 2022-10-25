import React, {FC} from 'react';
import {Alert} from 'react-native';
import {CryptoTypes} from '../../types';
import ArrowDown from '../../assets/ArrowDown.png';
import ArrowUp from '../../assets/ArrowUp.png';
import {
  CryptoContainer,
  NameContainer,
  Price,
  Logo,
  Name,
  Slug,
  Arrow,
  ArrowPercentage,
  PercentageChangeLast24hrs,
} from '../Crypto/styles';
import {deleteCrypto} from '../../store/actions';
import {useDispatch} from 'react-redux';

const Crypto: FC = ({item}: {item: CryptoTypes}) => {
  const dispatch = useDispatch();

  const deleteCurrency = () => {
    Alert.alert('Delete', 'Do you want to delete this crypto?', [
      {text: 'No', style: 'cancel'},
      {
        text: 'Delete',
        onPress: () => {
          dispatch(deleteCrypto(item.id));
        },
      },
    ]);
  };

  return (
    <CryptoContainer onPress={deleteCurrency}>
      <Logo
        source={{
          uri: `https://messari.io/asset-images/${item.id}/128.png`,
        }}
      />
      <NameContainer>
        <Name>{item.name}</Name>
        <Slug>{item.symbol}</Slug>
      </NameContainer>
      <Price>${item.market_data.price_usd.toFixed(2)}</Price>
      <PercentageChangeLast24hrs
        PositiveChange={item.market_data.percent_change_usd_last_24_hours > 0}>
        {item.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
      </PercentageChangeLast24hrs>
      <Arrow>
        <ArrowPercentage
          source={
            item.market_data.percent_change_usd_last_24_hours < 0
              ? ArrowDown
              : ArrowUp
          }
        />
      </Arrow>
    </CryptoContainer>
  );
};
export default Crypto;
