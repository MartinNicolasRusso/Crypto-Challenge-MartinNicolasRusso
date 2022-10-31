import {ADD_CRYPTO} from '../actions';
import {DELETE_CRYPTO} from '../actions';
import {UPDATE_CRYPTOS} from '../actions';

const initialState = {
  cryptos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CRYPTO:
      return {
        ...state,
        cryptos: [...state.cryptos, action.payload],
      };
    case DELETE_CRYPTO:
      return {
        ...state,
        cryptos: state.cryptos.filter(item => item.id !== action.payload),
      };
    case UPDATE_CRYPTOS:
      return {
        ...state,
        cryptos: action.payload,
      };
    default: {
      return state;
    }
  }
};
