import styled from 'styled-components';

export const CryptoContainer = styled.View`
    width: 85%;
    height: 100px;
    marginBottom: 10px;
    borderBottomColor: #C6C8D9;
    borderBottomWidth:1px
    alignSelf:center;
`

export const NameContainer = styled.View`
    width: 25%;
    position: relative;
    left: 22%;
    top: 20%;
`
export const Name = styled.Text`
  color: black;
  fontSize: 20px;
  position:relative;
  bottom:35px;
`;
export const Slug = styled.Text`
  color: gray;
  fontSize: 16px;
  position:relative;
  bottom:35px;
  rigth:15%
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  position:relative;
  left: 5%;
  right:5%
  top: 37%;
`;

export const Price = styled.Text`
  position: relative;
  fontSize: 20px;
  color: black;
  left: 75%;
  bottom: 65%;
`
export const Percentage = styled.View`
position:absolute;
left:84%;
top:60%;
`

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
`

export const Arrowdown = styled.Image`
width: 16px;
  height: 16px;
  margin-top: 2px;
`
export const Arrow = styled.View`
position: absolute;
  left: 79%;
  top:60%;
`;
