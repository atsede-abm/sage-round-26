import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import { useState } from 'react'

export default function App() {
   const[password,setPassword]=useState('')
  return (
    <View style={styles.container}>

      <View style={styles.box1}>

     <Text style={styles.registration}
     
     > Registration Form </Text>

      <Text style={styles.box2} > Put your Information at the registration Form </Text>
    </View>

    <View style={styles.name}>

      <TextInput  style={styles.inputname}
      placeholder='Enter First Name' 
      />
      
      <TextInput style={styles.inputname}
      placeholder='Enter Sur Name' 
      />

    </View>

    <View style={styles.name}>
      <TextInput  style={styles.inputname}
      placeholder='Full Address'
      />

      <TextInput   style={styles.inputname}
      placeholder='Enter Subcity'
      />
    </View>
    <View style={styles.name}>

    <TextInput style={styles.inputname}

    placeholder='Enter Email'
    />
     
      <TextInput 
      placeholder='Enter Password'
      style={styles.inputpass}
      secureTextEntry value={password}
      onChangeText={setPassword}
      
      />
    
    </View>
    
    <View style={styles.btn}>
    <Button  title='Submit'/>
    </View>
    </View>
    
    
  );
}
const styles =StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'rgb(172, 233, 231)',
  gap:20, 
},
container2:{
gap:20,
},
box1:{
flex:1,

},

box2:{
flex:1,
},

registration:{
  flex:1,
  fontSize:30,
  fontWeight:700,

},
name:{
  flex:1,
  flexDirection:'row',
 
},
inputname:{
  borderColor:'black',
  borderRadius:10,
  padding:10,
  backgroundColor:'white',
  margin:20,
  height:40,
},
inputpass:{

borderColor:'black',
  borderRadius:10,
  padding:10,
  backgroundColor:'white',
  margin:20,
  height:40,
  
},
btn:{
  borderRadius:40,
  width:300,

}


})

