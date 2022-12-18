import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react'
import {StyleSheet, Text, ScrollView, Image, Button, TouchableOpacity, View} from 'react-native';
import { Navbar } from '../../nav/Navbar'
//Добавляет окошко мероприятия
import { AddTodo } from '../../nav/AddTodo'
//Внутренность мероприятия
import { Todo } from '../../nav/Todo'


export default function Home({navigation}) {
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  const [todos, setTodos] = useState([])

  const addTodo = title => {

    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title
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
          <Text style={styles.text}>Расписание</Text><AddTodo onSubmit={addTodo} />
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