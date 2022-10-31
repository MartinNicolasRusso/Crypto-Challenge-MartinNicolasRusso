import {BASE_URL} from '@env';
import {Alert} from 'react-native';
import CryptoTypes from '../../types';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';
export const UPDATE_CRYPTOS = 'UPDATE_CRYPTOS';

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
        throw new Error(
          `${Alert.alert(
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

export const updateCryptos = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const cryptos = state.cryptos.cryptos;
    try {
      const res = await fetch(
        `${BASE_URL}?Assets=id,name,symbol,metrics/market_data`,
      );
      const data = await res.json();
      const newList: CryptoTypes[] = data.data.map(item => {
        const coins: CryptoTypes = {
          id: item.id,
          name: item.name,
          symbol: item.symbol,
          market_data: {
            price_usd: item.metrics.market_data.price_usd,
            percent_change_usd_last_24_hours:
              item.metrics.market_data.percent_change_usd_last_24_hours,
          },
        };
        return coins;
      });
      const updatedCurrenciesList: CryptoTypes[] = cryptos.map(cryp => {
        const result = newList.filter(item => item.id === cryp.id)[0];
        return result;
      });
      dispatch({
        type: UPDATE_CRYPTOS,
        payload: updatedCurrenciesList,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
