import React, { useState } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../styles';

export const PasswordToggleInput = () => {
    //state
    const [isSecure, setIsSeucure] = useState('')
    
       
    } 
    return (
        <TouchableOpacity>
            <Image 
                source={require('../../../../../asset/icon/source/eye-off.png')}
                resizeMode='contain'
                style={styles.image}
                onPress={onPress}
            />
        </TouchableOpacity>
    )
}