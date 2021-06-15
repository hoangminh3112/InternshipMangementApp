import React, {memo, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {logo} from '../../../asset/logo'
import { navigate } from '../../../navigation/navigationService';
import { APP_SCREEN } from '../../../navigation/screenType';
import {LogoProps} from './LogoProbs'


const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
  },
});
const LogoComponent = ({
  source,
  color,
  resizeMode = 'cover',
}: LogoProps) => {
  // state
  const logoStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      width: 143,
      height: 122,
    }),
    [],
  );
  //function
//   const onPress = () => {
//       navigate(APP_SCREEN.SIGN_IN)
//   }
  // render
  return (
    <TouchableOpacity style={[logoStyle]}  >
      <FastImage
        style={[styles.imageStyle]}
        source={logo[source]}
        resizeMode={resizeMode}
        tintColor={color}
      />
    </TouchableOpacity>
  );
};

export const Logo = memo(LogoComponent, isEqual);