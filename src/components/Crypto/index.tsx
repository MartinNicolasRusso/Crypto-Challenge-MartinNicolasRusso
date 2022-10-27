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
  ArrowPercentage,
  PricesContainer,
  LogoNameContainer,
  PercentageChangeLast24hrs,
} from '../Crypto/styles';
import {deleteCrypto} from '../../store/actions';
import {useDispatch} from 'react-redux';

const Crypto = ({item}: {item: CryptoTypes}): JSX.Element => {
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
      <LogoNameContainer>
        <Logo
          source={{
            uri: `https://messari.io/asset-images/${item.id}/128.png`,
          }}
        />
        <NameContainer>
          <Name>{item.name}</Name>
          <Slug>{item.symbol}</Slug>
        </NameContainer>
      </LogoNameContainer>
      <PricesContainer>
        <Price>${item.market_data.price_usd.toFixed(2)}</Price>
        <PercentageChangeLast24hrs
          PositiveChange={
            item.market_data.percent_change_usd_last_24_hours > 0
          }>
          <ArrowPercentage
            source={
              item.market_data.percent_change_usd_last_24_hours < 0
                ? ArrowDown
                : ArrowUp
            }
          />
          {item.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
        </PercentageChangeLast24hrs>
      </PricesContainer>
    </CryptoContainer>
  );
};
export default Crypto;
