import React, {memo, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {icons} from '../../../asset/icon';
import { navigate } from '../../../navigation/navigationService';
import { APP_SCREEN } from '../../../navigation/screenType';

import {IconProps} from './IconProbs';

const DEFAULT_SIZE = 24;
const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
  },
});
const IconComponent = ({
  source,
  color,
  resizeMode = 'cover',
  size = DEFAULT_SIZE,
}: IconProps) => {
  // state
  const iconStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );
  //function
  const onPress = () => {
      navigate(APP_SCREEN.SIGN_IN)
  }
  // render
  return (
    <TouchableOpacity style={[iconStyle]} onPress={onPress} >
      <FastImage
        style={[styles.imageStyle]}
        source={icons[source]}
        resizeMode={resizeMode}
        tintColor={color}
      />
    </TouchableOpacity>
  );
};

export const Icons = memo(IconComponent, isEqual);