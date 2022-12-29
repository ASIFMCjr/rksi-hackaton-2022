import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react'
import { Post } from './components/Post';
import axios from 'axios';
import styled from 'styled-components';
import {StyleSheet, Text, ScrollView, Image, Modal,TextInput, Button, TouchableOpacity, View} from 'react-native';
//Добавляет окошко мероприятия
import { AddTodo } from '../../nav/AddTodo'
//Внутренность мероприятия
import { Todo } from '../../nav/Todo'


export default function Home({navigation}) {
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  React.useEffect(() => {
   axios
    .get('https://639ee0017aaf11ceb88ce182.mockapi.io/items')
    .then(({ data }) => {
      setTodos(data);
    }).catch((err) => {
      console.log(err);
      alert('Ошибка доступа файлов');
    });
  },[]);











  //  Доделать







  // const DeleteTodo = (todo) => {
  //   const todoID = {todo.id}
  //   axios({
  //     method: 'delete',
  //     url: `https://639ee0017aaf11ceb88ce182.mockapi.io/items/${todoID}`,
      
  //   });
  // }

  const [todos, setTodos] = useState([])
  const [modalWindow, setModalWindow] = useState(false)

  const addTodo = (name,discription,time) => {

    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        name,
        discription,
        time
      }
    ])
  }

  return (
    <View>
    {/* Header with gradient */}
      <View >
        <LinearGradient
          start={{x: 0, y: 0}} 
          end={{x: 1, y: 0}} 
          colors={['#512db6', '#33b5bd']} 
          style={styles.linearGradient}>
          <View style={styles.img}>
            <Image source={require('../../../assets/logo.png')}/>
          </View>
        </LinearGradient>
      </View>
      
    {/* Main div */}
    <View style={styles.container}>
    
      {/* text and btn for todos */}
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <Text style={styles.text}>Расписание</Text>
          <AddTodo onSubmit={addTodo} />
          
        </View> 
      
        {/* Todos */}
        <ScrollView style={{height: 600}}>
            { todos.map(todo => (
              <Todo todo={todo} key={todo.id} />
            )) }
            
        </ScrollView>
        
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
  modalInput: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor:'#989898',
    borderWidth:1.5,
    borderRadius: 17,
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

});