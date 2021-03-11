import { useContext } from 'react';

import { StateContext } from '../context';

import { SET_TEXT, CLEAR_TEXT } from '../store/actions';

import { StoreKey } from '../../shared/enums/StoreKey';

export const useText = () => {
  const [{ [StoreKey.SelectedText]: text }, dispatch] = useContext(
    StateContext
  );

  const setText = (value: string) => {
    dispatch({ type: SET_TEXT, payload: value });
  };

  const clearText = () => dispatch({ type: CLEAR_TEXT });

  return { text, setText, clearText };
};
