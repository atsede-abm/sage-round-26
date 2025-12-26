
import{View,Button,TextInput,Text}from'react-native'
// import{SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context'
import { useState } from 'react'
import Gender from './Gender'

export default function App (){
  const[firstname,setFirstName]=useState('')
  const[lastname,setLastName] =useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const[password,setPassword]=useState('')
  
  
  

  return(

//    <SafeAreaProvider>
// <SafeAreaView>
//   <ScrollView>
    <View  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'gray'}}>
      <Text> Your First Name :</Text>
      <TextInput placeholder='Enter Your Name'
      value={firstname}
      onChangeText={setFirstName}
      style={{borderWidth:1,margin:5,padding:10,fontSize:16,backgroundColor:'white',width:350}}
      />
      <Text> Your Last Name :</Text>
      <TextInput 
      value={lastname}
      onChangeText={setLastName}
      style={{borderWidth:1,margin:5,padding:10,fontSize:16,backgroundColor:'white',width:350}}
      />
      <Text> Your Email :</Text>
      <TextInput 
      value={email}
      onChangeText={setEmail}
      style={{borderWidth:1,margin:5,padding:10,fontSize:16,backgroundColor:'white',width:350}}
      />
      <Text> Your Password :</Text>
      <TextInput 
      secureTextEntry value={password}
      onChangeText={setPassword}
      style={{borderWidth:1,margin:5,padding:10,fontSize:16,backgroundColor:'white',width:350}}
      />
      <Text> Your Phone Number :</Text>
      <TextInput placeholder='Enter Your Phone Number'
      value={phonenumber}
      onChangeText={setPhoneNumber}
      style={{borderWidth:1,margin:5,padding:10,fontSize:16,backgroundColor:'white',width:350}}
      />
      <View style={{flex:1}}>
        <Text> Gender </Text>
        <Gender/>
      </View>
      <Button title='Register'onPress={()=>{
        alert(firstname + ' ' + lastname + ' Welcome To Zemen Bank')
      }}/>
      <View style={{fontSize:32,fontWeight:'bold',margin:20}}>
      <Text>Your Name is :{firstname+''+lastname}</Text>
      <Text>{}</Text>
      <Text>Your Email is :{email}</Text>
      </View>
    </View>

//    </ScrollView>
// </SafeAreaView>

//    </SafeAreaProvider> 
)}