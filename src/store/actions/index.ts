import {Alert} from 'react-native';
import CryptoTypes from '../../types';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';

export const addNewCrypto = (symbol: string, cryptos: CryptoTypes[]) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `https://data.messari.io/api/v1/assets/${symbol}/metrics`,
      );
      const data = await res.json();
      const alreadyExist = cryptos.cryptos.filter(
        currency => currency.id === data.data.id,
      );
      if (alreadyExist.length > 0) {
        throw new Error(`${
          Alert.alert(
            'This Crypto Currency is already in your list! Try another one.',
          )}`,
        );
      }
      dispatch({
        type: ADD_CRYPTO,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCrypto = id => {
  return dispatch => {
    dispatch({
      type: DELETE_CRYPTO,
      payload: id,
    });
  };
};
