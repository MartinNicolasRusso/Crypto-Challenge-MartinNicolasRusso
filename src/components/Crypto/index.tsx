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
    <Logo
      source={{
        uri: `https://messari.io/asset-images/${item.id}/128.png`,
      }}
    />
    <NameContainer>
      <Name>{item.name}</Name>
      <Slug>{item.symbol}</Slug>
    </NameContainer>
    <Price>${item.metrics.market_data.price_usd.toFixed(2)}</Price>
    <PercentageChangeLast24hrs
      PositiveChange={
        item.metrics.market_data.percent_change_usd_last_24_hours > 0
      }>
      {item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
    </PercentageChangeLast24hrs>
    <Arrow>
      <ArrowPercentage
        source={
          item.metrics.market_data.percent_change_usd_last_24_hours < 0
            ? ArrowDown
            : ArrowUp
        }
      />
    </Arrow>
  </CryptoContainer>
);

export default Crypto;
