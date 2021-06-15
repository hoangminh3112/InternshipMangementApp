import React, { memo, useCallback, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Animated, FlatList, Image, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StudentsList } from '../../../model/studentsList';
import { GET_LIST_STUDENT } from '../../redux_saga/reducer/actionTypes';
import { ListStudents } from './components/StudentsList';
import { useDispatch } from 'react-redux';
import { onPress } from './components/SignOut/SignOut';
import { navigate } from '../../../navigation/navigationService';
import { APP_SCREEN } from '../../../navigation/screenType';
import styles from './styles';

const ProjectsListComponent = () => {
  //state
  const dispatch = useDispatch();
  const [data, setData] = useState<Array<StudentsList>>([]);


  //function
  const onItemPress = useCallback((studentsList: StudentsList) => {
    navigate(APP_SCREEN.PROJECT_DETAIL, { studentsList });
  }, []);


  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<StudentsList>) => {
      return <ListStudents studentsList={item} onItemPress={onItemPress} />;

    },
    [onItemPress],
  );

  const renderItemSeparatorComponent = useCallback(() => {
    return <View style={[styles.spacer]} />;
  }, []);

  const keyExtractor = useCallback((item: StudentsList) => item.id, []);


  // effect
  useEffect(() => {
    dispatch({
      type: GET_LIST_STUDENT,
      payload: {
        url: 'https://internshipapp-e9ba1-default-rtdb.firebaseio.com/Sheet1.json',
        setData: setData,
      },
    });
    console.log('response');
  }, []);


  return (

    <SafeAreaView style={styles.container}>
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
        <Text style={styles.title}>
          Projects
            </Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderItemSeparatorComponent}
          contentContainerStyle={[styles.content]}
        />
      </View>

    </SafeAreaView>
  )
}

export const ProjectsList = memo(ProjectsListComponent, isEqual);

