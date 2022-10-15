import styled from 'styled-components';
import theme from '../../utils/themes/themes';

export const Container = styled.View`
  background-color: ${theme.colors.blue};
  height: 15%;
`;

export const Title = styled.Text`
  left: 5%;
  color: ${theme.colors.white};
  font-size: 20px;
  top: 40%;
  font-weight: bold;
`;

export const Photo = styled.Image`
  top: 7%;
  left: 85%;
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;