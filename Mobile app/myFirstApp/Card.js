import {View,Text,Image} from 'react-native'

export default function Card(){

    return <View>
     
        <Image 
        source= {require("./image.png")}
        style={{ width: 500, hieght: 500 }}/>
           <Text> Buy Now </Text>
    </View>
}