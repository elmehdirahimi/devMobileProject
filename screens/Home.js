import React, { Component } from 'react'
import { StyleSheet, ScrollView, Image, ImageBackground } from 'react-native'

import SlideShow from '../components/SlideShow';
import Button from '../components/Button';
import Block from '../components/Block';
import Text from '../components/Text';
import { theme } from '../constants';
import { Morocco } from '../constants/morocco';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block >
          <SlideShow />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: 10, }}
        >
          <Text h3 style={{}}>{Morocco}</Text>
        </ScrollView>
        <Block flex={false} row space="around" style={styles.bottom}>
          <Button column style={styles.bottomButton} onPress={() => navigation.navigate("TourGuide")}>
            <Image source={require('../assets/icons/tour.png')} style={{ width: 30, height: 40, tintColor: theme.colors.primary }} />
            <Text primary h3 caption>
              Tour Guide
              </Text>
          </Button>
          <Button column style={styles.bottomButton} onPress={() => navigation.navigate('Destination')}>
            <Image source={require('../assets/icons/maps.png')} style={{ width: 40, height: 40, tintColor: theme.colors.primary }} />
            <Text primary h3 caption>
              Morocco Map
              </Text>
          </Button>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 0,
    left: 0,
    right: 0,
    height: 90,
    bottom: -10,
    position: 'absolute',
    backgroundColor: 'white',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },

  bottomButton: {
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  }
})
