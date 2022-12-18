import React,{useState} from 'react'
import {View, StyleSheet,TouchableOpacity, Button, Image, Alert, TextInput} from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [value,setValue] = useState('')

    const pressHandler = () => {
        onSubmit(value)
        setValue('')
    }

    return (
        <View style={styles.block}>
            <TouchableOpacity onPress={pressHandler}>
                <Image source={require('../../assets/addPost.png')} ></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})