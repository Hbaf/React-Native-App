import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Task from '../components/Task';
import { completeTask } from '../store/actions';


function Page(props) {
    const completeTask = (id) => {
        props.complete(id);
    }

    const addTask = () => props.changePage(2);
  
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Active tasks</Text>
                    <View style={styles.items}>
                        {props.taskList.map((task) => <Task key={task.id} task={task} onComplete={completeTask}/>)}
                    </View>
                    <TouchableOpacity onPress={addTask}>
                        <View style={styles.addWrapper}>
                            <Text>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View> 
            </ScrollView>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        width: '100%',
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    addWrapper: {
        marginTop: 60,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        alignSelf: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
});

const mapStateToProps = state => ({
    taskList: state.tasks.taskList,
});
  
const mapDispatchToProps = dispatch => ({
    complete: (id) => dispatch(completeTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);