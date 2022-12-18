import React from 'react'
import {Text, View, StyleSheet,TouchableOpacity, ViewBase} from 'react-native'

export const Todo = ({ todo }) => {
    return (
        <TouchableOpacity style={styles.button} >
            <Text style={styles.textButton}>Открытие хакатона</Text>
            <Text style={styles.textDescriptiomButton}>В 12:00 Открытие хакатона! Вас ждёт ############### . . .</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'left',
      },
       img:{
        marginLeft: 'auto',
        marginRight: 30,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
       },
    
      text: {
        fontWeight: 'normal',
        fontSize: 30,
        color: '#4B4B4B',
        textAlign:'left',
      },
      button: {
        padding: 10,
        width: 300,
        height: 80,
        borderColor:'#989898',
        borderWidth:1.5,
        borderRadius: 17,
        boxShadow:40,
        marginTop: 25,
        color:'#999898',
      },
      textButton: {
        color: '#000000',
        fontSize: 15,
      },
    
       textDescriptiomButton: {
        fontSize: 12,
        color: '#999898',
        },
    
      linearGradient: {
        width: 400,
        height: 60,
        paddingTop:20,
      }
})