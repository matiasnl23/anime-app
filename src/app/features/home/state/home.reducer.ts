import { Action, createReducer, on } from '@ngrx/store';
import { IHomeState } from '.';
import * as fromActions from './home.actions';

const initialState: IHomeState = {
  currentMedia: null,
};

const homeReducer = createReducer(
  initialState,
  on(fromActions.preloadMedia, (state, { media }) => ({
    ...state,
    currentMedia: media,
  }))
);

export function reducer(
  state: IHomeState | undefined,
  action: Action
): IHomeState {
  return homeReducer(state, action);
}
