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

export const RegularList = ({navigation}) => {
     return (
 
    <View style={styles.container}>
  

  <View style={styles.upper} >
      <Text style={styles.text}>Regular List</Text>

      <TouchableOpacity  
      onPress={() => navigation.openDrawer()} >
<Image 
style={styles.drawerbtn} source={Drawer}/>
      </TouchableOpacity>
  </View>
  <View style={styles.belowpart}>
<TouchableOpacity
onPress={() => navigation.navigate('ADD LIST')}
>
<View style={styles.listview}>
  <View style={{flexDirection:'row',justifyContent:"space-between",}}>
  <Text style={[styles.text2]}>Everything for breakfast </Text>
  <Text style={styles.text2}> 6 / 10 </Text></View>
  <View style={styles.greypart}>
    <View style={styles.yellowpart}></View>
  </View>
</View>
</TouchableOpacity>

<TouchableOpacity
onPress={() => navigation.navigate('ADD LIST')}
>
<View style={styles.listview}>
  <View style={{flexDirection:'row',justifyContent:"space-between",}}>
  <Text style={[styles.text2]}>Evening with Pasta </Text>
  <Text style={styles.text2}> 0 / 7 </Text></View>
   <View style={styles.greypart}>
  </View>
</View>
</TouchableOpacity>
<TouchableOpacity
onPress={() => navigation.navigate('ADD LIST')}
>
<View style={styles.listview}>
  <View style={{flexDirection:'row',justifyContent:"space-between",}}>
  <Text style={[styles.text2,]}>Kitchen repair </Text>
  <Text style={styles.text2}> 12 / 12 </Text></View>
  <View style={styles.greypart}>
    <View style={[styles.yellowpart]}></View>
  </View>
</View>
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
drawerbtn:{
  width:30,
  height:20,
  left:110
},
belowpart:{
backgroundColor:"white",
flex:1,
paddingTop:16,
borderTopRightRadius:23,
borderTopLeftRadius:23,
paddingHorizontal:15

},
listview:{
  borderWidth:2,
  borderColor:'#FFD976',
  height:76,
  justifyContent:'center',
  marginTop:16,
  borderRadius:7,
  paddingHorizontal:20

},
greypart:{
  borderRadius:20,
  backgroundColor:"#EEEEEE",
  height:19,
  
},
yellowpart:{
  borderRadius:20,
  backgroundColor:"#FFD976",
  width:200,
  height:19,

},
text2:{
  fontSize:17,
  paddingBottom:11
  
}

})