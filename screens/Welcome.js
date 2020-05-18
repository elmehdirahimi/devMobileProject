import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image,ImageBackground, Platform, StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Block from '../components/Block';
import { MonoText } from '../components/StyledText';
import size from '../constants/theme';
import { Container, Header, Content, Button, Icon } from 'native-base';
const { width, height } = Dimensions.get("window");


export default function Welcom({ navigation }) {

  return (

    <View style={{
      flex: 1.0, justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <View style={{flex:0.6, justifyContent: 'center', alignItems: 'center',}} >
        <ImageBackground source={require('../assets/images/background.png')} style={{
            width: width - 20, height: height/2.0, 
               
        }} />
      </View>
        <View style={{
          flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          
        }} >
          <Button primary transparent iconRight light

            onPress={() => navigation.navigate('Home', { name: 'Home' })}
            style={{
              justifyContent: 'center', color: "#0AC4BA",
            }}
          >
            <Text style={{ color: "#0AC4BA", fontSize: 30, }}>Get Started</Text>
            <Icon name='arrow-forward' style={{ color: "#0AC4BA", fontSize: 30 }} />
          </Button>
        </View>
    </View>
  );
}