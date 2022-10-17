import React, {FC} from 'react';
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

const Crypto: FC = ({item}: {item: CryptoTypes}) => (
  <CryptoContainer>
    <Logo source={item.image} />
    <NameContainer>
      <Name>{item.name}</Name>
      <Slug>{item.slug}</Slug>
    </NameContainer>
    <Price>${item.price}</Price>
    <PercentageChangeLast24hrs
      PercentageChange={parseInt(item.market_porcentage, 10) > 0}>
      {item.market_porcentage}%
    </PercentageChangeLast24hrs>
    <Arrow>
      <ArrowPercentage
        source={parseInt(item.market_porcentage, 10) < 0 ? ArrowDown : ArrowUp}
      />
    </Arrow>
  </CryptoContainer>
);

export default Crypto;
