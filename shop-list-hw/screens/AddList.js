import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Keyboard,
  Image,
  TouchableOpacity,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cancel from '../assets/cancel.png'
import Add from'../assets/add.png'
import Back from '../assets/back.png'
import Save from '../assets/save.png'
export const AddList= ({navigation}) =>{
  const [newListText, setNewListText] = useState("");
  const [goals, setGoals] = useState([]);

  const inputChangeHandler = (text) => setNewListText(text);

  const addGoalBtnHandler = () => {
    if (newListText.trim().length) {
      setGoals((goals) => [
        { uid: Math.random().toString(), text: newListText.trim() },
        ...goals,
      ]);
      setNewListText("");
      Keyboard.dismiss();
    }
  };

  const deleteGoal = (uid) => {
    setGoals((goals) => goals.filter((goal) => goal.uid !== uid));
  };

  return (
    <View style={styles.container}>
<View style={{display:'flex',flexDirection:"row", justifyContent:"space-between",paddingHorizontal:20}}>
   <TouchableOpacity onPress={navigation.goBack}>
      <Image source={Back} style={styles.backbtn}/></TouchableOpacity>
    <TouchableOpacity>
    <Image source={Save} style={styles.savebtn}/></TouchableOpacity>
    </View>
      <View style={styles.form}> 
      <View style={{flexDirection:'row'}}>
      <Text style={{}}>position name</Text>
      <Text style={{left:50,right:0}}>count</Text></View>
      <View style={{flexDirection:'row'}}>
       
               

        <TextInput
          style={styles.input}
          value={newListText}
          onChangeText={inputChangeHandler}
        />
         <TextInput style={styles.input2}  />
       
      
        </View>

        <TouchableOpacity
        activeOpacity={0.7}
        onPress={addGoalBtnHandler} >
          <Text style={styles.btn}> ADD TO LIST</Text>
        </TouchableOpacity>
      
    
      <View style={styles.list}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => (
            <TouchableOpacity style={{marginBottom:14}}>
           
              <View style={styles.goal}>     
             
<TouchableOpacity style={[styles.img,{backgroundColor:'#FFD976'}]}>
  <Image style={styles.addimg} source={Add}/>
</TouchableOpacity>
<Text>{item.text}</Text>
              <TouchableOpacity style={styles.img}
              onPress={()=> deleteGoal(item.uid)}>
                <Image style={styles.cancelimg} source={Cancel}/>
                </TouchableOpacity>
 </View>
            </TouchableOpacity>
            
          )}
        />
      </View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 40,
    backgroundColor: "#FF7676",
  },
  form: {
    backgroundColor:"white",
borderTopRightRadius:22,
borderTopLeftRadius:22,
paddingTop:16,
alignItems:'center',
marginTop:16

  },
  input: {
    backgroundColor: "#EEEEEE",
    width: "55%",
    height:42,
    color:'black',
    borderRadius: 45,
    textAlign:'center',
    marginRight:30,
    marginBottom:20,
    fontWeight:'bold',
   left:0
  },
  input2:{
    backgroundColor: "#EEEEEE",
    width: "20%",
    height:42,
    color:'black',
    borderRadius: 45,
    textAlign:'center',
    // marginLeft:-108,
    marginBottom:20,
    fontWeight:'bold',
   right:0
  },
  list: {
    marginTop: 30,
  
    // flexDirection:'row',
    display:'flex',
   paddingHorizontal:20

  },
  goal: {
    //  position:'absolute',
    display:'flex',
    flexDirection:'row',
    padding: 15,
    backgroundColor: "white",
    borderColor:'#FFD976',
    borderWidth:1.5,
    borderRadius: 27,
    marginBottom: 14,
    height:42,
    justifyContent:"space-between",
    alignItems:'center',
    width:350,
    

  },
  btn:{
borderRadius:45,
height:42,
width:350,
textAlign:'center',
justifyContent:'center',
alignItems:'center',
backgroundColor:'#FF7676',
color:'white',
paddingTop:10,

  },

  img:{
    position:'relative',
    borderRadius:50,
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
      backgroundColor:'#FF7676',
    marginLeft:-15,
    marginRight:-15,
    
  },
  cancelimg:{
    width:20,
    height:20
  },
  addimg:{
     width:20,
    height:20
  },
  backbtn:{
    width:20,
    height:20,
    // marginBottom:16
  },
  savebtn:{
    width:25,
    height:25,
  }
});
