import { useRef,useEffect } from 'react';
import { Animated,Button,View} from 'react-native';

export default function App() {
  const fadeAnim=useRef(new Animated.Value(0)).current
  const moveX =useRef(new Animated.Value(0)).current
  
  useEffect(()=>{
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:6000,
      useNativeDriver:true
    }).start()
  },[])

  function SpringAnimation(){
    Animated.spring(moveX,{
      toValue:200,
      friction:3,
      tension:10,
      useNativeDriver:true
    }).start()
  }
  function SpringAnimationBack(){
    Animated.spring(moveX,{
      toValue:0,
      friction:3,
      tension:10,
      useNativeDriver:true
    }).start()
  }
 

  return (
    <View style={{ flex:1,justifyContent:'center',alignItems:"center"}}>
     <Animated.View style={{ width:200,height:200,backgroundColor:'hotpink',opacity:fadeAnim}}>
      </Animated.View>
      <Animated.View style={{ width:200,height:200,
        backgroundColor:'blue',margin:10,
        transform:[{translateX:moveX}]
        }}>
      </Animated.View>
      
     
    <Button title="Animate" onPress={()=>{
      console.log._value
      moveX._value ==200 ? SpringAnimationBack():SpringAnimation()
    }}/>
    

    </View>
  );
}

