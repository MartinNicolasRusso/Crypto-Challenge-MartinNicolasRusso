import React from 'react';
import {Container, Title, Profile} from './styles';


const Header = () => (
  <Container>
    <Title>CryptoTracker Pro</Title>
    <Profile source={require('../../assets/Profile.jpg')}/>
  </Container>
);

export default Header;