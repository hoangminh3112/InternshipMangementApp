import {IconTypes} from '../../../asset/icon';

export interface IconProps {
  color?: string;

  size?: number;

  source: IconTypes;

  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center' | undefined;
}
