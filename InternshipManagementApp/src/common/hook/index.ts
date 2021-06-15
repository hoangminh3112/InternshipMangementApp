import isEqual from 'react-fast-compare';
import {useSelector as RXUseSelector} from 'react-redux';
import { RootState } from '../../features/redux_saga/store';

export const useSelector = <T>(
  selector: (state: RootState) => T,
  equalityFn = isEqual,
) => RXUseSelector(selector, equalityFn);