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

  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
   axios
    .get('https://639e500f3542a261305a1a2b.mockapi.io/items')
    .then(({ data }) => {
      setItems(data);
    }).catch((err) => {
      console.log(err);
      alert('Ошибка доступа файлов');
    });
  },[]);

  const createTodo = () => {
    

    return(
      <View >
        <Text>
        {
          items.map((obj) => (
            <Post name={obj.name}
                  discription={obj.discription}/>
            ))
          };
          </Text>

        </View>
    )
  }

  const [todos, setTodos] = useState([])
  const [modalWindow, setModalWindow] = useState(false)

  const addTodo = (title,titleTwo,titleThree) => {

    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title,
        titleTwo,
        titleThree
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
        {/* <View >
        <Text>
        {
          items.map((obj) => (
            <Post name={obj.name}
                  discription={obj.discription}/>
            ))
          };
          </Text>

        </View> */}
        {/* Modal win btn */}
        {/* <Button title='a' onPress={() => setModalWindow(true)}>
        </Button> */}
        {/* MODWIN */}
        {/* <Modal visible={modalWindow}>
              <View>
                  <TouchableOpacity onPress={() => setModalWindow(false)}>
                      <Image source={require('../../../assets/addPost.png')}></Image>
                  </TouchableOpacity>
                  <Text>Описание мероприятия</Text>
                  <TextInput style={styles.modalInput}></TextInput>
                  <Text>Время проведения</Text>
                  <TextInput style={styles.modalInput}></TextInput>
                  <Text>Ссылки</Text>
                  <TextInput style={styles.modalInput}></TextInput>
                  <Button title='save' onPress={() => {setModalWindow(false);createTodo()}}>Сохранить</Button>
              </View>
          </Modal> */}
        {/* Todos */}
        <ScrollView style={{height: 600}}>
            { todos.map(todo => (
              <Todo todo={todo} key={todo.id} />
            )) }
        </ScrollView>
        
      </View>
    </View>
  );
  // return (
  //   <View>

  //     <View >
  //     <LinearGradient
  //       start={{x: 0, y: 0}} 
  //       end={{x: 1, y: 0}} 
  //       colors={['#512db6', '#33b5bd']} 
  //       style={styles.linearGradient}>
  //       <View style={styles.img}>
  //         <Image source={require('../../../assets/logo.png')}/>
  //       </View>
  //     </LinearGradient>

  //     </View>

  //     <View style={styles.img}>
  //      <Image source={require('../../../assets/addPost.png')}/>
  //     </View>

  //     <View style={styles.container}>
  //     <View>
  //       <Text style={styles.text}>Расписание</Text>
  //     </View> 
  //     <View >
  //       <Text>
  //       {
  //         items.map((obj) => (
  //           <Post name={obj.name}
  //                 discriprion={obj.discriprion}/>
  //           ))
  //         };
  //         </Text>

  //       </View>
  //     </View>
  //   </View>
  // );
  
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