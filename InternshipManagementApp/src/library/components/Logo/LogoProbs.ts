import {LogoTypes} from '../../../asset/logo';

export interface LogoProps {
  color?: string;

  size?: number;

  source: LogoTypes;

  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center' | undefined;
}
