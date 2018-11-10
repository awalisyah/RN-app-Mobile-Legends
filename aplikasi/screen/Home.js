import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Home extends React.Component{
  render(){
    return(
      <View style= {nbStyles.container}>
          <Text style={{fontSize: 20, marginTop:50, textAlign: 'center', color: 'white'}}>
            Selamat Datang Di Mobile Legends
          </Text>

          <Image
           style={{alignItems: 'center', width: 350, height:200, marginBottom: 30, marginTop:30, }}
            source={{uri: 'http://cdn-www.bluestacks.com/bs-images/mobile-legends_logo.png'}}
          />

          
          <Text style={nbStyles.subtitle}>
            Yuh kepoin bareng
          </Text>
          <Text style={nbStyles.subtitle}>
            Yuh Yuh
          </Text>

          <Button block style={nbStyles.btn}  onPress={() => this.props.navigation.navigate('Heroes')}
          >
            <Text style={{color: '#123456'}}>Start</Text>
          </Button>
        </View>
    );
  }
}

const nbStyles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123456',
    },
    subtitle: {
        textAlign: 'center',
        color: 'white'
    },
    btn: {
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 10,
        paddingVertical: 13,
    },
}