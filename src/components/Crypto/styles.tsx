import styled from 'styled-components';

export const CryptoContainer = styled.View`
  alignself: center;
  height: 100px;
  width: 85%;
  marginbottom: 10px;
  borderbottomcolor: #c6c8d9;
  borderbottomwidth: 1px;
`;

export const NameContainer = styled.View`
  width: 25%;
  position: relative;
  left: 22%;
  top: 20%;
`;

export const Name = styled.Text`
  color: black;
  fontsize: 20px;
  position: relative;
  bottom: 35px;
`;

export const Slug = styled.Text`
  color: gray;
  fontsize: 16px;
  position: relative;
  bottom: 35px;
  rigth: 15%;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  position:relative;
  left: 5%;
  right:5%;
  top: 37%;
`;

export const Price = styled.Text`
  position: relative;
  fontsize: 20px;
  color: black;
  left: 75%;
  bottom: 65%;
`;

export const Increase = styled.Text`
  color: green;
`;

export const Decrease = styled.Text`
  color: red;
`;

export const Arrowup = styled.Image`
  width: 16px;
  height: 16px;
  margin-top: 2px;
`;

export const Arrowdown = styled.Image`
  width: 16px;
  height: 16px;
  margin-top: 2px;
`;

export const Arrow = styled.View`
  position: absolute;
  left: 80%;
  top: 55%;
`;

export const Percentage = styled.View`
  position: absolute;
  left: 85%;
  top: 55%;
`;