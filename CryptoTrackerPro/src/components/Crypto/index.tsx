import React from "react";
import { CryptoTypes } from "../../types";
import { CryptoContainer, NameContainer, Price, Logo, Increase, Decrease, Name, Slug, Arrow, Arrowdown, Arrowup, Percentage } from "../Crypto/styles";


const Crypto = ({name,slug,price,market_porcentage,image}: CryptoTypes) =>{
    return (
        <CryptoContainer>
        <Logo source={image}/>
        <NameContainer>
        <Name>{name}</Name>
        <Slug>{slug}</Slug>
        </NameContainer>
        <Price>${price}</Price>
        {parseInt(market_porcentage) > 2.0 ? (
            <Percentage>
            <Increase>{market_porcentage}%</Increase>
            </Percentage>
        ):(
            <Percentage>
            <Decrease>{market_porcentage}%</Decrease>
            </Percentage>
        )}
        {parseInt(market_porcentage) > 2.0 ? (
            <Arrow>
            <Arrowup source={require('../../assets/Arrowup.png')}/>
            </Arrow>
        ) : (
            <Arrow>
            <Arrowdown source={require('../../assets/Arrowdown.png')}/>
            </Arrow>
            )}
        </CryptoContainer>
    )
}

export default Crypto;