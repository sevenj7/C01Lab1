import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({tasks}) => {
    const [toDos, setToDos] = useState(tasks.map((task) => ({
        id: uuidv4(),
        title: task
    })));

    const addToDo = (newTitle) => {
        setToDos((prevToDos) => [...prevToDos, {id: uuidv4(), title: newTitle}]);
    };

    const removeToDo = (id) => {
        setToDos((prevToDos) => prevToDos.filter((task) => task.id != id));
    };

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((task) => {
                <View style={styles.todoItem} key={task.id}>
                    <Text>{task.title}</Text>
                    <Button onPress={removeToDo}>Remove</Button>
                </View>
            })}
            <AddTask onAddTask={addToDo}></AddTask>
        </View>
    );
};

ToDoList.defaultProps = {
    toDos: []
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;