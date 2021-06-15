import { StyleSheet } from "react-native";


const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "#FFFFFF",
            flex: 1,
        },
        title: {
            alignItems: 'center',
            top: 24
        },
        textTitle: {
            fontWeight: "bold",
            fontSize: 30,
        },
        text: {
            marginLeft: 16,
            marginTop: 31,
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 20
        },
        input: {
            width: "70%",
            marginTop: 30,
            fontSize: 20,
        },
        devider: {
            borderBottomWidth: StyleSheet.hairlineWidth
        },
        row: {
            flexDirection: 'row',
            flex: 1
        },
        space: {
            marginTop: 50,

        },
        logo: {
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20
        },
        button: {
            backgroundColor: "black",
            marginBottom: 30,
            width: 211,
            alignSelf: 'center',
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowOpacity: 1,
            shadowRadius: 4,

            elevation: 10
        },
        buttontext: {
            textAlign: 'center',
            margin: 8,
            justifyContent: 'center',
            color: 'white'
        },
        mailInput: {
            width: "80%",
            fontSize: 20,
            marginLeft: 20,
            backgroundColor: 'white',
            
            

        },
        image: {
           

            
        },
        loginButtonLabel: {
            fontSize: 20,
          },
          buttonContainer: {
            width: 211,
          }
         

    }
)

export default styles;