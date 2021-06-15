import { View, Image, StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../../../../navigation/navigationService';
import { APP_SCREEN } from '../../../../navigation/screenType';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 36
  }
})

export const BackIcon = () => {
  const navigation = useNavigation();
  const onItemPress = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <TouchableOpacity onPress={onItemPress}  >
      <View>
        <Image
          source={require('../../../../asset/icon/source/back.png')}
          resizeMode='contain'
        style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  )
}