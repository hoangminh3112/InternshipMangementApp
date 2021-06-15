import { useNavigation, useNavigationBuilder } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Title } from 'react-native-paper';
import { APP_SCREEN } from '../../../navigation/screenType';
import FormButton from './components/FormButton/FormButton';
import { List, Divider } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CreateChatRoom = () => {
  const navigation = useNavigation();
  const [threads, setThreads] = useState([]);

  const onPress = () => {
    navigation.navigate(APP_SCREEN.ROOM_SCREEN, { thread: item })
  }

  useEffect(() => {

    const unsubscribe = firestore()
      .collection('THREADS')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);

        // if (loading) {
        //   setLoading(false);
        // }
      });

    /**
     * unsubscribe listener
     */
    return () => unsubscribe();
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <View style={styles.container}>

      <Title>Chat Rooms</Title>
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate(APP_SCREEN.ROOM_SCREEN, { thread: item })}}>
            <List.Item
              title={item.name}
              description='Item description'
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
            />
          </TouchableOpacity>
        )}
      />
      <FormButton
        modeValue='contained'
        title='Add Room'
        onPress={() => navigation.navigate(APP_SCREEN.CHAT_SCREEN)}
       
        

      />
    </View>
  );
}

