import axios from 'axios';
import React,{useState} from 'react'
import {View, StyleSheet,TouchableOpacity, Text, Button, Modal, Image, Alert, TextInput} from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [value,setValue] = useState('')
    const [valueTwo,setValueTwo] = useState('')
    const [valueThree,setValueThree] = useState('')
    const [modalWindow, setModalWindow] = useState(false)
    function sendTodoToMockAPI() {
      
        axios({
          method: 'post',
          url: 'https://639ee0017aaf11ceb88ce182.mockapi.io/items',
          data: {"name": value,
          "discription": valueTwo,
          "time": valueThree}
        });
      
    }
    const pressHandler = () => {
        // onSubmit(value,valueTwo,valueThree)
        onSubmit(value,valueTwo,valueThree,sendTodoToMockAPI(value,valueTwo,valueThree))
        setValue('')
        setValueTwo('')
        setValueThree('')
        
    }

    return (
        <View style={styles.block}>
            <TouchableOpacity onPress={() => {setModalWindow(true)}}>
                <Image source={require('../../assets/addPost.png')} ></Image>
            </TouchableOpacity>
            <Modal visible={modalWindow}>
              <View>
                  <TouchableOpacity onPress={() => setModalWindow(false)}>
                      <Image source={require('../../assets/addPost.png')}></Image>
                  </TouchableOpacity>
                  <Text>Описание мероприятия</Text>
                  <TextInput style={styles.modalInput} onChangeText={setValue} value={value}></TextInput>
                  <Text>Время проведения</Text>
                  <TextInput style={styles.modalInput} onChangeText={setValueTwo} value={valueTwo}></TextInput>
                  <Text>Ссылки</Text>
                  <TextInput style={styles.modalInput} onChangeText={setValueThree} value={valueThree}></TextInput>
                  <Button title='save' onPress={() => {setModalWindow(false);pressHandler()}}>Сохранить</Button>
              </View>
          </Modal>
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
    },
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
})