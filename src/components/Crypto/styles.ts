import styled from 'styled-components';
import theme from '../../utils/themes';

export const CryptoContainer = styled.View`
  height: 100px;
  width: 85%;
  left: 7%;
  margin-bottom: 10px;
  border-bottom-color: ${theme.colors.lightgrey};
  border-bottom-width: 1px;
`;

export const NameContainer = styled.View`
  width: 25%;
  position: relative;
  left: 22%;
  top: 20%;
`;

export const Name = styled.Text`
  color: ${theme.colors.black};
  font-size: 16px;
  position: relative;
  bottom: 35px;
  font-weight: bold;
`;

export const Slug = styled.Text`
  color: ${theme.colors.grey};
  font-size: 13px;
  position: relative;
  bottom: 35px;
  left: 1%;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  position: relative;
  left: 5%;
  right: 5%;
  top: 33%;
`;

export const Price = styled.Text`
  position: relative;
  font-size: 16px;
  color: ${theme.colors.black};
  left: 80%;
  bottom: 55%;
  font-weight: bold;
`;

export const PercentageChangeLast24hrs = styled.Text`
  position: absolute;
  left: 85%;
  top: 55%;
  color: ${props => (props.Boolean ? theme.colors.green : theme.colors.red)};
  font-size: 12px;
`;

export const ArrowPercentage = styled.Image`
  width: 12px;
  height: 12px;
  margin-top: 3px;
`;

export const Arrow = styled.View`
  position: absolute;
  left: 81%;
  top: 55%;
`;
