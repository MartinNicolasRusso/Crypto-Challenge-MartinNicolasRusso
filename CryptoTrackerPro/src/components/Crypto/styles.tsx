import styled from 'styled-components';

export const CryptoContainer = styled.View`
    width: 90%;
    left:5%;
    height: 100px;
    marginBottom: 10px;
    borderBottomColor: #C6C8D9;
    borderBottomWidth:1px
`

export const NameContainer = styled.View`
    width: 25%;
    position: relative;
    left: 22%;
    top: 30%;
    
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
  width: 45px;
  height: 45px;
  position:relative;
  left: 30px;
  top: 40px;
`;

export const Price = styled.Text`
  position: relative;
  fontSize: 20px;
  color: black;
  left: 75%;
  bottom: 65%;
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
  left: 80%;
  top:55%;
`;

export const Percentage = styled.View`
position:absolute;
left:85%;
top:55%;
`