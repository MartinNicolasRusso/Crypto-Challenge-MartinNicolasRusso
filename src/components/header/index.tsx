import React from 'react';
import {Container, Title, Photo} from './styles';
import Profile from '../../assets/Profile.jpg';

const Header = () => (
  <Container>
    <Title>CryptoTracker Pro</Title>
    <Photo source={Profile} />
  </Container>
);

export default Header;
