import{useState} from 'react'
import{View,Text,TouchableOpacity,StyleSheet} from 'react-native' 

export default function Gender(){
    const[gender,setGender] = useState('female')


    return <View>
         
         <TouchableOpacity 
         style={styles.radioContainer}
         onPress={()=>
          setGender('male')}>
         <View style={styles.outerCircle}>
        {gender==='male' && <View 
        style={styles.innerCircle}/>}
         </View>
        <Text> Male </Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.radioContainer} 
          onPress={()=>
          setGender('female')}>
           <View style={styles.outerCircle}>
            {gender==='female' && <View 
        style={styles.innerCircle}/>}
           </View>
           <Text>Female</Text>
         </TouchableOpacity>
    </View>
}
const styles=StyleSheet.create({
    radioContainer: {
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5,
    },
    outerCircle:{
        height:20,
        width:20,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        marginRight:8,
    },
    innerCircle:{
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:'#000',
    }
})