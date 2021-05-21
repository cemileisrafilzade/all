import React, { useContext } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Alert,
    KeyboardAvoidingView,
    TouchableOpacity,
    Button,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
import { not, Transition } from "react-native-reanimated";
import {LinearGradient} from 'expo-linear-gradient';
import Drawer from '../assets/Group.png'

export const UserSettings = ({navigation}) => {
     return (
 
    <View style={styles.container}>
  

  <View style={styles.upper} >
      <Text style={styles.text}>User Settings</Text>
  </View>
  <View style={styles.belowpart}>
<Text style={styles.text2} >username</Text>
<TextInput style={styles.input}></TextInput>
<Text style={styles.text2} >avatar url</Text>
<TextInput style={styles.input}></TextInput>
 
<TouchableOpacity style={styles.savebtn}>
    <Text style={{color:'white',fontSize:14,}}>SAVE CHANGES</Text>
</TouchableOpacity>
 </View>
    </View>
     )
            }
const styles = StyleSheet.create({

    container: {  
      flex:1,
     backgroundColor:'#FF7676', 
},
upper:{
 flexDirection:"row",
   paddingTop:25,
   paddingBottom:25,
   justifyContent:'center',
},
text:{
fontSize:16,
color:'white',
},

belowpart:{
backgroundColor:"white",
flex:1,
alignItems:'center',
borderTopRightRadius:22,
borderTopLeftRadius:22,
paddingTop:16,
paddingHorizontal:20

},
input:{
    borderRadius:45,
backgroundColor:"#EEEEEE",
    width:370,
    height:42,
    fontSize: 18,
    textAlign:'center'
},
text2:{
    paddingTop:8,
    paddingBottom:3,
    fontSize:13,
},
savebtn:{
    height:42,
    backgroundColor:'#FF7676',
    justifyContent:'center',
    borderRadius:45,
    width:370,
   alignItems:'center',
   marginTop:15

}

})