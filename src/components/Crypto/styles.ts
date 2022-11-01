import styled from 'styled-components';
import theme from '../../utils/themes';

export const CryptoContainer = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0px 28px;
  padding: 18px 0px;
  border-bottom-color: ${theme.colors.lightgrey};
  border-bottom-width: 0.5px;
`;

export const NameContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

export const Name = styled.Text`
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: bold;
  text-align: right;
`;

export const Slug = styled.Text`
  color: ${theme.colors.grey};
  font-size: 13px;
`;

export const PricesContainer = styled.View`
  flex-direction: column;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 7px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${theme.colors.black};
  bottom: 55%;
  font-weight: bold;
  text-lign: left;
  top: 5%;
`;

export const PercentageChangeLast24hrs = styled.Text`
  color: ${props =>
    props.PositiveChange ? theme.colors.green : theme.colors.red};
  font-size: 12px;
  text-align: right;
`;

export const ArrowPercentage = styled.Image`
  width: 12px;
  height: 12px;
  margin-top: 3px;
`;

export const Arrow = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const LogoNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
