import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import 'react-native-get-random-values';

const AddTask = (onAddTask) => {
    const [title, setTitle] = useState("");

    const handleAddTask = () => {
        if (title.trim() !== '') {
            onAddTask(title);
            setTitle("");
        }
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput 
                style={styles.input}
                placeholder='Enter Title for New Task'
                value={title} 
                onChangeText={(newTitle) => setTitle(newTitle)}
                returnKeyType="done"
            />
            <Button onPress={ handleAddTask }>Add Task</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;

