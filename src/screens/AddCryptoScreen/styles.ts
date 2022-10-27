import styled from 'styled-components';
import theme from '../../utils/themes';

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  left: 6%;
  top: 13%;
  color: ${theme.colors.black};
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: ${theme.colors.yellow};
  border-radius: 3px;
  width: 120px;
  left: 56%;
  margin-vertical: 3px;
  margin-horizontal: 8%;
  padding-horizontal: 46px;
  padding-vertical: 10px;
  top: 25%;
`;

export const BackText = styled.Text`
color: ${theme.colors.blue};
font-size: 15px;
`;

export const AddText = styled.Text`
  font-weight: bold;
  color: ${props =>
    props.ColorAddText ? theme.colors.black : theme.colors.lightgrey};
`;

export const Button = styled.TouchableOpacity`
  left: 10%;
  color: ${theme.colors.blue}
  bottom: 25%;
`;
export const Input = styled.TextInput`
  height: 60px;
  border-width: 1px;
  border-radius: 3px;
  padding: 10px;
  width: 88%;
  left: 20px;
  top: 20%;
`;

export const ContainerScreen = styled.View`
  display: flex;
  justify-content: center;
  justify-self: center;
  height: 60%;
`;
