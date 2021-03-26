import { IMedia } from 'src/app/lib/media/interfaces/media.interface';

export * from './home.reducer';

export const featureKey = 'home';

export interface IAppState {
  home: IHomeState;
}

export interface IHomeState {
  currentMedia: IMedia | null;
}

export const selectHome = (state: IAppState) => state.home;
