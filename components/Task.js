import React, { useState } from 'react';
import { View, Text, StyleSheet, CheckBox, TouchableOpacity } from 'react-native';
import Grocery from './Grocery';


const Task = (props) => {
  const [isSelected, setSelection] = useState(false);

  return (

    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox, styles.itemRight}
        />
    </View>
  
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth:2,
    borderColor:'#DDDDDD'

  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'orange',
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
});

export default Task;