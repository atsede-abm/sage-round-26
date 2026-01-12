import { useState } from 'react';
import { StyleSheet,Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const initialTodos = [
<<<<<<< HEAD
  { id: '1', value: 'Exercise for 30 minutes' },
  { id: '2', value: 'Go to Church' },
  { id: '3', value: 'Clean the room' },
  { id: '4', value: 'Finish homework' },
  { id: '5', value: 'Read a book' },
  { id: '6', value: 'Practice JavaScript' },
  { id: '7', value: 'Buy groceries' },
=======
  { id: '1', value: 'Go to Church' },
  { id: '2', value: 'Buy groceries' },
  { id: '3', value: 'Finish homework' },
  { id: '4', value: 'Clean the room' },
  { id: '5', value: 'Read a book' },
  { id: '6', value: 'Practice JavaScript' },
  { id: '7', value: 'Exercise for 30 minutes' },
>>>>>>> 1121a0d9456d4bc031ef4670654a9e73f2fd90b1
  { id: '8', value: 'Call a friend' },
  { id: '9', value: 'Prepare dinner' },
  { id: '10', value: 'Plan tomorrow’s tasks' },
];
  const [task, setTask] = useState('')
<<<<<<< HEAD
  const [tasks, setTasks] = useState(initialTodos)
=======
  const [tasks, setTasks] = useState('initialTodos')
>>>>>>> 1121a0d9456d4bc031ef4670654a9e73f2fd90b1

  const addTask = () => {
    if (task.trim()=== '')return;
      setTasks([...tasks, { id: Date.now().toString(),
        value: task,
      }
    ]);
      setTask('');
    };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter Task' value={task} onChangeText={setTask} />

        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks} 
        keyExtractor={(item)=>item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.value}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )} 
       
        />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:30,
    backgroundColor:'#f5f5f5',
    paddingTop:50,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    textAlign:'center',
  },
  inputContainer:{
    flexDirection:'row',
    marginBottom:20,
  },
  input:{
    flex:1,
    borderWidth:1,
    borderColor:'#ccc',
    padding:10,
    borderRadius:5,
    marginRight:10,
  },
  addButton:{
    backgroundColor:'#007bff',
    padding:10,
    borderRadius:5,
    justifyContent:'center',
  },
  addButtonText:{
   color:'#ffff',
   fontWeight:'bold',
  },
  taskItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#ffff',
    padding:15,
    borderRadius:5,
    marginBottom:10,
  },
  taskText:{
    fontSize:16,
  },
  deleteButton:{
    backgroundColor:'#dc3545',
    padding:8,
    borderRadius:5,
  },
  deleteButtonText:{
    color:'white',
    fontWeight:'bold',
  }
})

