import React, { Component } from 'react'
import { View, Dimensions, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import Card from '../components/Card';
import Divider from '../components/Divider';
import Block from '../components/Block';
import Text from '../components/Text';
import { theme } from '../constants';
import mocks from '../constants/mocks';

import {categories} from '../constants/mocks'

import {colors, sizes,fonts} from '../constants/theme'
const { width } = Dimensions.get('window');

class Categories extends Component {
  

  render() {
    const { navigation } = this.props;
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold primary>Choose Destination</Text>
          <Image
            source={require('../assets/icons/destination.png')}
            style={styles.avatar}
          />
        </Block>

      
        <FlatList  data={categories}
          renderItem={({ item }) => (


            <Block flex={false} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Explore',{category: item })}
              >
                <Card shadow style={styles.item}>
                  <Block middel flex={false} row style={{ marginBottom: 10 }}>
                    <Image center middel source={item.image} style={styles.image} />
                    <Text medium style={{ margin: sizes.padding, paddingRight: sizes.padding * 2.4 }}>
                      {item.Name}
                      </Text>
                  </Block>
                  <Block middel flex={false}>
                    {item.Adresse &&
                      <Block middel flex={false} row style={{ marginBottom: 10 }}>
                        <Image center middel source={require('../assets/icons/localization.png')} style={{ width: 18, height: 18, marginRight: 10, tintColor: theme.colors.primary }} />
                        <Text gray caption >{item.Adresse}</Text>
                      </Block>
                    }
                    {item.Tel &&
                      <Block middel flex={false} row style={{ marginBottom: 10 }}>
                        <Image center middel source={require('../assets/icons/phone-receiver.png')} style={{ width: 15, height: 15, marginRight: 10, tintColor: colors.primary }} />
                        <Text gray caption >{item.Tel} </Text>
                      </Block>
                    }
                  </Block>
                </Card>
              </TouchableOpacity>
            </Block>


          )} />
      </Block>
    )
  }
}
Categories.defaultProps = {
  categories: mocks,
}

export default Categories;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.base * 2,
  },
  avatar: {
    tintColor: colors.primary,
    height: sizes.base * 2.2,
    width: sizes.base * 3,
  },
  image: {
    width: sizes.base * 6,
    height: sizes.base * 6,
    borderRadius: sizes.base * 3
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: sizes.base * 2,
  },
  category: {
    minWidth: (width - (sizes.padding * 2) - sizes.base),
    maxWidth: (width - (sizes.padding * 2) - sizes.base),
    maxHeight: (width - (sizes.padding * 2.4) - sizes.base),
  }
})






