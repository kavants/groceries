import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView ,CheckBox, Alert, Button} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import Task from './Task';

function Grocery() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if(task){
    setTaskItems([...taskItems, task])
    } else{
      Alert.alert(
      "Invalid Item", 
      "Please enter text",
      [
        {
          text:"Okay",
        },
      ]);
    }
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }



  const maybe = () =>
  Alert.alert(
    "Remove Task",
    "Are you sure?",
    [
      {
        text: "Yes",
        onPress: () => completeTask(),
        
      },
      {
        text: "Cancel",
        style:"cancel",
      },
    ],
    {
      cancelable: true,
    }
  );

  const test = () =>
  Alert.alert(
    "Remove Task",
    "Are you sure?",
    [
      {
        text: "Yes",
        onPress: () => completeTask(),
        
      },
      {
        text: "Cancel",
        style:"cancel",
      },
    ],

  );
  
  const clearAll = () =>
  Alert.alert(
    "Clear All Tasks",
    "Are you sure?",
    [
      {
        text: "Yes",
        onPress: () => setTaskItems([]),
        
      },
      {
        text: "Cancel",
        style:"cancel",
      },
    ],
    {
      cancelable: true,
    }
  );


  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo List!</Text>
        <Button title="Clear All" onPress={clearAll} />
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={maybe}>
                  <Task text={item}>tsdfsdf</Task> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>
      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    // position: 'absolute',
    paddingTop:50,
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'orange',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 1,
  },
  addText: {},
});


export default Grocery;