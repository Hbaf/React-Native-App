import React, { useState } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { addTask } from '../store/actions';


function Page(props) {
    const [task, setTask] = useState();

    const goToMain = () => props.changePage(1);
  
    const addTask = () => {
        Keyboard.dismiss();
        props.add(task);
        goToMain();
    }
  
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} autoFocus={true} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={addTask}>
                    <View style={styles.addWrapper}>
                        <Text>Add</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToMain}>
                    <View style={styles.addWrapper}>
                        <Text>Return</Text>
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
    writeTaskWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        marginTop: 60,
        width: '90%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addWrapper: {
        marginTop: 20,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        paddingHorizontal: 40,
    },
});
  
const mapDispatchToProps = dispatch => ({
    add: (name) => dispatch(addTask(name)),
});

export default connect(undefined, mapDispatchToProps)(Page);