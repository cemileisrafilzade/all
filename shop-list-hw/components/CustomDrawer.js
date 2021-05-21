import React from 'react';
import {StyleSheet,Text,TouchableOpacity,Image,View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import UserImg from'../assets/userimg.png'



export const CustomDrawer = ({navigation,LogOut,username,userImg})=>{
    return (
        <View style={styles.container}> 


         <View style={styles.user}>
         <Image style={styles.userimg} source={UserImg}/>
         <Text style={styles.username}>UserName</Text>
         </View>

         <View style={styles.lists}>

         <TouchableOpacity  
           onPress={() => navigation.navigate('ADD NEW LIST')}
         style={[styles.drawerlist,styles.addlistbtn] }>
         <Text style={styles.listtext}>ADD NEW LIST</Text>
         </TouchableOpacity >

         <TouchableOpacity 
           onPress={() => navigation.navigate('ONE TIME LIST')}
           style={styles.drawerlist}>
         <Text style={styles.listtext}>ONE TIME LIST</Text>
         </TouchableOpacity>

         <TouchableOpacity 
           onPress={() => navigation.navigate('REGULAR LISTS')} 
          style={styles.drawerlist}>
         <Text style={styles.listtext}>REGULAR LIST</Text>
         </TouchableOpacity>

         <TouchableOpacity 
           onPress={() => navigation.navigate('USER SETTINGS')}
         style={styles.drawerlist}>
         <Text style={styles.listtext}>USER SETTINGS</Text>
         </TouchableOpacity>

         </View>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
},
user:{
  flexDirection:'row',
    backgroundColor:'white',
    paddingTop:25,
  justifyContent:'center',
    paddingBottom:10,

 

},
userimg:{
    width:50,
    height:50
},
username:{
    alignItems:'center',
    color:'#A9A9A9',
    fontSize:24,
    paddingTop:8,
    paddingLeft:22
},
lists:{
    alignItems:'center',
    backgroundColor:'#FF7676',
    flex:1,
    borderTopLeftRadius:23,
borderTopRightRadius:23 
},
drawerlist:{
    backgroundColor:'white',
    marginTop:10,
    height:34,
   width:250,
    borderRadius:38,
    alignItems:'center',
    marginBottom:8,
    justifyContent:'center',

},
addlistbtn:{
    marginBottom:22,
    marginTop:16

},
listtext:{
    color:'#FF7676'
}



})