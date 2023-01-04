import React from 'react'
import {Text, Alert, Image, View, StyleSheet,TouchableOpacity, ViewBase} from 'react-native'
import axios from 'axios';


export const Todo = ({ todo }) => {
  let deleteBtn = () => {
    // axios({
    //   method: 'delete',
    //   url: `https://639ee0017aaf11ceb88ce182.mockapi.io/items/${todo.id}`
    // });

  //  axios
  //   .get('https://639ee0017aaf11ceb88ce182.mockapi.io/items')
  //   .then(({ data }) => {
  //     Alert.alert(JSON.stringify(data[data.length - 1]));
  //   }).catch((err) => {
  //     console.log(err);
  //     alert('Ошибка доступа файлов');
  //   })

    
  }
    return (
      <View style={styles.todo}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>{todo.name}</Text>
            <Text style={styles.textDescriptiomButton}>{todo.discription}</Text>
            <Text style={styles.textButton}>{todo.time}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.deleteButton} onPress={deleteBtn}>
          <Image source={require('../../assets/delete.png')} ></Image>
        </TouchableOpacity>
      </View>
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
        width: 250,
        height: 80,
        borderColor:'#989898',
        borderWidth:1.5,
        borderRadius: 17,
        boxShadow:40,
        marginTop: 25,
        color:'#999898',
      },
      deleteButton: {
        padding: 1.5,
        width: 50,
        height: 80,
        borderColor:'#989898',
        borderWidth:1.5,
        borderRadius: 17,
        boxShadow:40,
        marginTop: 25,
        color:'#999898',
        justifyContent: 'center',
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