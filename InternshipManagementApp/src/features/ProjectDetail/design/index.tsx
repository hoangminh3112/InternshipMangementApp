import { StackScreenProps } from '@react-navigation/stack';
import React, { memo, useEffect, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { APP_SCREEN, RootStackParamList } from '../../../navigation/screenType';
import { StudentsList } from '../../../model/studentsList';
import styles from '../../Projects/design/styles';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import Todos from '../components/Todo/Todo'
import { Divider } from '../../SignIn/design/components/Divider/Divider';
import { navigate } from '../../../navigation/navigationService';
import { add } from 'react-native-reanimated';
import FormButton from '../../Chat/design/components/FormButton/FormButton';




type ProjectDetailProbs = StackScreenProps<
  RootStackParamList,
  APP_SCREEN.PROJECT_DETAIL
>;

const ProjectDetail = ({ route, navigation }: ProjectDetailProbs) => {
  //state
  const project = useMemo<StudentsList>(() => route.params?.studentsList ?? {}, [route]);
  const ref = firestore().collection('todos');
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  //function
  async function addTodo() {
    await ref.add({
      title: todo,
      complete: false,
    });
    setTodo('');
  }

  const onPressComeBack = () => {
    navigation.goBack()
  }

  // effect
  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list: ((prevState: never[]) => never[]) | { id: string; title: any; complete: any; }[] = [];
      querySnapshot.forEach(doc => {
        const { title, complete } = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
        });
      });

      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });

  }, []);
  //render
  return (
    <SafeAreaView style={styles.container}>
      {/* <BackIcon  /> */}
      <View style={styles.header} >

        <TouchableOpacity onPress={onPressComeBack} >
          <View>
            <Image
              source={require('../../../asset/icon/source/arrow-left.png')}
              resizeMode='contain'
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.title} > Project Name</Text>
      </View>
      <ScrollView horizontal={false} nestedScrollEnabled={true} >
        <ScrollView horizontal={true} nestedScrollEnabled={true}>
          <TouchableOpacity style={styles.detail}>
            <Text style={{ fontWeight: 'bold' }}>Student Name: </Text>
            <Text style={styles.text}>{project?.fullname ?? ''}</Text>
            <Text style={{ fontWeight: 'bold' }}>Project: </Text>
            <Text style={styles.text}>{project?.topic ?? ''} </Text>
            <Text style={{ fontWeight: 'bold' }}>DOB: </Text>
            <Text style={styles.text}>{project?.DOB ?? ''} </Text>
            <Text style={{ fontWeight: 'bold' }}>Internship Place: </Text>
            <Text style={styles.text}>{project?.place ?? ''} </Text>
            <Text style={{ fontWeight: 'bold' }}>Host organization: </Text>
            <Text style={styles.text}>{project?.host ?? ''} </Text>
            <Text style={{ fontWeight: 'bold' }}>Tentative Time: </Text>
            <Text style={styles.text}>{project?.tentative ?? ''} </Text>
            <Text style={{ fontWeight: 'bold' }}>Supervisor: </Text>
            <Text style={styles.text}>{project?.Supervisor ?? ''} </Text>
            <Text style={{ fontWeight: 'bold' }}>Students' email: </Text>
            <Text style={styles.text}>{project?.mail ?? ''} </Text>
          </TouchableOpacity>
          <View style={styles.tasks}>
            <View style={{ flex: 1 }}>
              <View style={styles.taskHeader}>
                <Text style={styles.textTaskHeader}>TASKS LIST</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.lowerHeader}>Add task for students</Text>
                <Divider />
                <TextInput placeholder={'New Todo'} onChangeText={setTodo} value={todo} style={styles.textInput} />
                <FormButton
                  title='ADD TASKS'
                  modeValue='contained'
                  onPress={() => {
                    if (todo === '') Alert.alert("Warning", "Empty string")
                    else addTodo()
                  }}
                  style={styles.addButton}>
                </FormButton>

              <Divider />
              </View>
            </View > 
            <View style={{flex:1}}>

              <FlatList
                style={{ flex: 1 }}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Todos {...item} />}
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export const Projects_Detail = memo(ProjectDetail, isEqual);
