// import { Text, View } from 'native-base';
// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Calendar, LocaleConfig } from 'react-native-calendars';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// LocaleConfig.locales['en'] = {
//   monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
//   monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
//   dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sartuday', 'Sunday'],
//   dayNamesShort: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun'],
//   today: 'Aujourd\'hui'
// };
// LocaleConfig.defaultLocale = 'en';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 170,
//     backgroundColor: '#E1F4F3',
    
//     shadowColor: "#000",
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     shadowOffset: {
//       width: 0,
//       height: 4
//     },
//     shadowOpacity: 1,
//     shadowRadius: 4,
//     elevation: 10
//   },
//   title: {
//     top: 70,
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     fontSize: 36
//   },
//   box: {
//     marginTop: 10,
//     marginLeft: 40,
//     marginRight: 40,
//     marginBottom: 20,
//     padding: 40,
//     alignSelf: 'center',
//     width: "80%",
//     backgroundColor: 'white',
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 0,
//         height: 4
//     },
//     shadowOpacity: 1,
//     shadowRadius: 4,
//     elevation: 10
//   },
//   button: {
//     backgroundColor: "black",
//     marginBottom: 30,
//     width: 211,
//     alignSelf: 'center',
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 0,
//         height: 4
//     },
//     shadowOpacity: 1,
//     shadowRadius: 4,
//     top: 20
//   },
//   butonText: {
//     textAlign: 'center',
//     margin: 8,
//     color: 'white'
//   }

// })

// export const Calender = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           Calender
//             </Text>
//       </View>
//       <ScrollView>

//       <View>
//         <Calendar style={{ marginTop: "10%" , margin: 40, flex: 1}}
        
//           // Collection of dates that have to be marked. Default = {}
//           markedDates={{
//             '2021-06-2': { selected: true, marked: true, selectedColor: 'blue' },
//             '2021-10-2': { marked: true },
//             '2021-06-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
//             '2021-06-19': { disabled: true, disableTouchEvent: true }
//           }}

//           // Initially visible month. Default = Date()
//           current={'2021-06-01'}
//           // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//           minDate={'2021-01-01'}
//           // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//           maxDate={'2021-31-12'}
//           // Handler which gets executed on day press. Default = undefined
//           onDayPress={(day) => { console.log('selected day', day) }}
//           // Handler which gets executed on day long press. Default = undefined
//           onDayLongPress={(day) => { console.log('selected day', day) }}
//           // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
//           monthFormat={'yyyy MM'}
//           // Handler which gets executed when visible month changes in calendar. Default = undefined
//           onMonthChange={(month) => { console.log('month changed', month) }}
//           // Hide month navigation arrows. Default = false
//           hideArrows={false}
//           // Replace default arrows with custom ones (direction can be 'left' or 'right')
//           //   renderArrow={(direction) => (<Arrow/>)}
//           // Do not show days of other months in month page. Default = false
//           hideExtraDays={true}
//           // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
//           // day from another month that is visible in calendar page. Default = false
//           disableMonthChange={false}
//           // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
//           firstDay={1}
//           // Hide day names. Default = false
//           hideDayNames={false}
//           // Show week numbers to the left. Default = false
//           showWeekNumbers={true}
//           // Handler which gets executed when press arrow icon left. It receive a callback can go back month
//           onPressArrowLeft={subtractMonth => subtractMonth()}
//           // Handler which gets executed when press arrow icon right. It receive a callback can go next month
//           onPressArrowRight={addMonth => addMonth()}
//           // Disable left arrow. Default = false
//           disableArrowLeft={false}
//           // Disable right arrow. Default = false
//           disableArrowRight={false}
//           // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
//           //   disableAllTouchEventsForDisabledDays={true}
//           // Replace default month and year title with custom one. the function receive a date as parameter.
//           //   renderHeader={(date) => {  /*Return JSX*/}}
//           // Enable the option to swipe between months. Default = false
//           enableSwipeMonths={true}
//         />
//       </View>
//       <View>
//         <View style={styles.box}> 
//             <Text>Task</Text>
//         </View>
//         <View style={styles.box}> 
//             <Text>Task</Text>
//         </View>
//         <View style={styles.box}> 
//             <Text>Task</Text>
//         </View>
//         <TouchableOpacity style={styles.button} >
//           <Text style={styles.butonText} >Add Calender</Text>
//         </TouchableOpacity>

//       </View>
//       </ScrollView>

//     </SafeAreaView>
//   )
// }

import {addDays, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';

type Item = {
  name: string;
  cookies: boolean;
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const Calender: React.FC = () => {
  const [items, setItems] = useState<{[key: string]: Post[]}>({});

  useEffect(() => {
    // run once

    const getData = async () => {
      const response = await fetch(
        'https://internshipapp-e9ba1-default-rtdb.firebaseio.com/calendar.json',
      );
      const data: Post[] = await response.json();

      const mappedData = data.map((post, index) => {
        const date = addDays(new Date(), index);

        return {
          ...post,
          date: format(date, 'yyyy-MM-dd'),
        };
      }); 

      const reduced = mappedData.reduce(
        (acc: {[key: string]: Post[]}, currentItem) => {
          const {date, ...coolItem} = currentItem;

          acc[date] = [coolItem];

          return acc;
        },
        {},
      );

      setItems(reduced);
    };

    getData();
  }, []);

  const renderItem = (item: Post) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.task}</Text>
        
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      
       <View style={styles.header}>
         <Text style={styles.title}>
               Calender
             </Text>
       </View>
      <Agenda items={items} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
    header: {
    height: 170,
    backgroundColor: '#E1F4F3',
    
    shadowColor: "#000",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10
  },
  title: {
    top: 70,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 36
  },
});


