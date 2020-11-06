import Axios from 'axios';
import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const axios = require('axios');

export default class App extends Component {

  handlerButton(){
    var nombre = this.state.nombre;
    Axios.get("https://anapioficeandfire.com/api/characters", {params:{name:this.state.nombre}})
    .then(response => {
      console.log(response.data);
      this.setState(() => {return {consuleApi:true, data: response.data}});
    })
    .catch(error => {
      console.log(error);
    });

    console.log("Me clickearon");
  }

  handlerTxt(text){
    console.log("Escribieron " + text);
    this.setState({nombre: text});
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 200}}
          onChangeText={text => this.handlerTxt(text)}          
        />
        <Button
          onPress={this.handlerButton.bind(this)}
          title="Consultar API"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
