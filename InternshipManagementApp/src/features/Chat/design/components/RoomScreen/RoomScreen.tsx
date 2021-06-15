
import auth from '@react-native-firebase/auth';
import { Alert, Button, View } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles';


export const Room = ({ route } : any) => {
    const { thread } = route.params;
    const user = firebase.auth().currentUser;
  
    
   
    
    const [messages, setMessages] = useState([]);

    // helper method that is sends a message

    const handleSend = async (messages : any) => {
        const text = messages[0].text;
        
        firestore()
            .collection('THREADS')
            .doc(thread._id)
            .collection('MESSAGES')
            .add({
                text,
                createdAt: new Date().getTime(),
                
            });
        await firestore()
            .collection('THREADS')
            .doc(thread._id)
            .set(
                {
                    latestMessage: {
                        text,
                        createdAt: new Date().getTime()
                    }

                },
                { merge: true }

            );
    }

    //effect
    useEffect(() => {
        console.log(user)
        const messagesListener = firestore()
          .collection('THREADS')
          .doc(thread._id)
          .collection('MESSAGES')
          .orderBy('createdAt', 'desc')
          .onSnapshot(querySnapshot => {
            const messages = querySnapshot.docs.map(doc => {
              const firebaseData = doc.data();
    
              const data = {
                _id: doc.id,
                text: '',
                createdAt: new Date().getTime(),
                ...firebaseData
              };
    
             
              return data;
            });
    
            setMessages(messages);
          });
    
        // Stop listening for updates whenever the component unmounts
        return () => messagesListener();
      }, []);



    const renderBubble = (props:any) => {
        return (
            // Step 3: return the component
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        // Here is the color change
                        backgroundColor: '#6646ee'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    }
                }}
            />
        );
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View style={styles.sendingContainer}>
                    <IconButton icon='send-circle' size={32} color='#6646ee' />
                </View>
            </Send>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <GiftedChat
               
                messages={messages}
                onSend={handleSend}
                renderBubble={renderBubble}
                placeholder='Type your message here...'
                showUserAvatar
                alwaysShowSend
                renderSend={renderSend}
                scrollToBottom
            />
            
        </SafeAreaView>


    );
}