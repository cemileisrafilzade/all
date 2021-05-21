import React, { useContext, useState } from "react";
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
    CheckBox
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
import { not, Transition } from "react-native-reanimated";
import {LinearGradient} from 'expo-linear-gradient';
import Drawer from '../assets/Group.png'

export const AddNewList = ({navigation}) => {
const [regular,setRegular] = useState(true);

     return (
 
    <View style={styles.container}>
  

  <View style={styles.upper} >
      <Text style={styles.text}>New List</Text>
  </View>
  <View style={styles.belowpart}>
<Text style={styles.text2} >list name</Text>
<TextInput style={styles.input}></TextInput>
 <View style={{flexDirection:'row'}}>
<TouchableOpacity 
onPress={() => setRegular((v) => !v)}
style={[styles.onetime,{opacity:regular?0.5:1}]}><Text>One time</Text></TouchableOpacity>
<TouchableOpacity style={[styles.regular,{opacity:regular?1:0.5}]}><Text>Regular</Text></TouchableOpacity>
</View>
<TouchableOpacity style={styles.savebtn}>
    <Text style={{color:'white',fontSize:14,}}>CREATE LIST</Text>
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
   paddingTop:22,
   paddingBottom:25,
  justifyContent:'center',
   width:'100%',

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
paddingHorizontal:20


},
input:{
    borderRadius:45,
backgroundColor:"#EEEEEE",
    width:360,
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
    width:360,
   alignItems:'center',
   marginTop:15
},
onetime:{
  width:170,
  height:42,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:"#EEEEEE",
  borderRadius:45,
  marginTop:14,
  marginRight:20,

},
regular:{
  width:170,
  height:42,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:"#EEEEEE",
  borderRadius:45,
  marginTop:14,
  
}

})