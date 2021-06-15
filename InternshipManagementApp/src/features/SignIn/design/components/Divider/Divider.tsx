import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    divider: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        margin: 10
       
    }
})

export const Divider = () => {
    return(
        <View style={styles.divider} > 
            
        </View>
    )
}
