import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { onPress } from '../../Projects/design/components/SignOut/SignOut';
import styles from '../../Projects/design/styles'
import { VictoryPie } from 'victory-native'
import { ScrollView } from 'react-native';


export const Statistics = () => {
  const graphicData = [
    { y: 10, x: '5%' },
    { y: 90, x: '90%' },
    { y: 50, x: '50%' },

  ]
  const graphicColor = [
    '#7A9EBB', '#DF4666', '#E5A45E'
  ]
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { onPress() }} >
          <View>
            <Image
              source={require('../../../asset/icon/source/logout.png')}
              resizeMode='contain'
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.title} >Statistics</Text>
      </View>
      <View style={styles.row} >
        <VictoryPie
          data={graphicData}
          width={250}
          height={250}
          style={{
            labels: {
              fill: 'red', fontSize: 15, padding: 7,
            },
          }}
          colorScale={graphicColor}

        />
        <View>
          <View style={styles.dot1} >
            <Text></Text>
          </View>
          <View style={styles.dot2}>
            <Text></Text>
          </View>
          <View style={styles.dot3}>
            <Text></Text>
          </View>
        </View>
      </View>
      <ScrollView >
        <View style={styles.body}>

        <View style={styles.works}>
          <Text >Works</Text>
        </View>
        <View style={styles.works}>
          <Text >Completed</Text>
        </View>
        <View style={styles.works}>
          <Text >Inprogress</Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}