import { createAction, props } from '@ngrx/store';
import { IMedia } from 'src/app/lib/media/interfaces/media.interface';

const PRELOAD_MEDIA = '[Home] Preload media';

export const preloadMedia = createAction(
  PRELOAD_MEDIA,
  props<{ media: IMedia }>()
);
