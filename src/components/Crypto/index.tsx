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
  Percentage,
} from '../Crypto/styles';

interface Props {
  crypto: CryptoTypes;
}

const Crypto: FC = ({item}: {item: CryptoTypes}) => (
  <CryptoContainer>
    <Logo source={item.image} />
    <NameContainer>
      <Name>{item.name}</Name>
      <Slug>{item.slug}</Slug>
    </NameContainer>
    <Price>${item.price}</Price>
    {parseInt(item.market_porcentage) > 0 ? (
      <Percentage Boolean={true}>{item.market_porcentage}%</Percentage>
    ) : (
      <Percentage Boolean={false}>{item.market_porcentage}%</Percentage>
    )}
    <Arrow>
      <ArrowPercentage
        source={parseInt(item.market_porcentage) < 0 ? ArrowDown : ArrowUp}
      />
    </Arrow>
  </CryptoContainer>
);

export default Crypto;