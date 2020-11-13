import { StatusBar } from 'expo-status-bar'
import axios from 'axios';
import React, {Component, useState} from 'react';
import { StyleSheet, TextInput, Button, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

export default class App extends Component {

  state = {

    response: [],
    estado: null,
    //value: ''

  };

  handlerText(texto){
    var campoTexto = texto;
    this.setState({value: campoTexto});
    //console.log("Escribieron " + campoTexto);    
  }


  handlerButton = () => {
    var characters = this.state.value;   
    axios.get( 'https://anapioficeandfire.com/api/characters/' + characters)
        .then( response => {
        console.log(response.data);        
        this.setState({
          response: response.data,
          estado: true
        });
        //console.log(this.state.response);
    });

  }


 

  render(){

    if(this.state.estado !== true){
      return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('./iafgot.png')}
          />        
              <Text style={styles.text}>GAME OF THRONES</Text>
              <Text style={styles.info}>Una API del Juego de Tronos</Text>
              <TextInput style={styles.input} placeholder="Elige numero de 0 a 2000" onChangeText={this.handlerText.bind(this)}></TextInput>
              <TouchableOpacity
              style={styles.button}
              onPress={this.handlerButton.bind(this)}>
              <Text>Buscar personaje</Text> 
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('./iafgot.png')}
          />
          <Text style={styles.text}>GAME OF THRONES</Text>
          <Text style={styles.info}>Una API del Juego de Tronos</Text>
          <TextInput style={styles.input} placeholder="Elige numero de 0 a 2000" onChangeText={this.handlerText.bind(this)}></TextInput>
          <TouchableOpacity
              style={styles.button}
              onPress={this.handlerButton.bind(this)}>
              <Text>Buscar personaje</Text> 
          </TouchableOpacity>
          <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>Nombre: {this.state.response.name}</Text>          
          <Text style={styles.text}>Género: {this.state.response.gender}</Text>
          <Text style={styles.text}>Cultura: {this.state.response.culture}</Text>
          <Text style={styles.text}>Nacimiento: {this.state.response.born}, Fallecimiento: {this.state.response.died}</Text>          
          <Text style={styles.text}>Títulos: {this.state.response.titles}</Text>
          <Text style={styles.text}>Alias: {this.state.response.aliases}</Text>
          <Text style={styles.text}>Padre: {this.state.response.father}, Madre: {this.state.response.mather}</Text>          
          <Text style={styles.text}>Esposo/a: {this.state.response.spouse}</Text>
          <Text style={styles.text}>Actor: {this.state.response.playedBy}</Text>
          <Text style={styles.text}></Text>
          </ScrollView>
          <StatusBar style="auto" />
        </View>             
      );   
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "grey",
    padding: 8,
  },
  info: {
    color: "red",
  },
  logo: {
    height: 350,
    width: 250,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 8,
    borderRadius: 20,
  },
  input: { 
    height: 35,
    width: 200,
    margin: 15,
    padding: 8,
    borderRadius: 20,	
    borderColor: 'red',
    backgroundColor: 'white', 
    borderWidth: 2, 
  }, 
  scrollView: {
    backgroundColor: 'white',
    //marginHorizontal: 20,
    padding: 15,
    marginTop: 20
  },
});
