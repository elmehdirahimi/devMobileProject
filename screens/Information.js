import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, Image, View,  Modal, TouchableHighlight } from 'react-native';


import  Block from '../components/Block';
import  Text from '../components/Text';
import Divider from '../components/Divider';
import {colors, sizes,fonts} from '../constants/theme'

const { width, height } = Dimensions.get('window');


export default class Information extends Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    modalVisible: false,
    imageSrc: []
  };


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

    render() {
      const { category } = this.props;
      return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
        >
          <Block style={styles.product}>

            <Text h2 bold style={{marginBottom: 15}}>{category.Name}</Text>
  
            <Text gray light height={22}>{category.description}</Text>
            {(category.Adresse || category.Tel) && <Divider margin={[sizes.padding * 0.9, 0]} /> }
            {category.Adresse &&
              <Block middel flex = {false} row style = {{marginBottom: 10}}>
                <Image center middel source={require('../assets/icons/localization.png')} style={{width: 18, height:18, marginRight: 10, tintColor: colors.primary}} />
                <Text gray caption >{category.Adresse}</Text>
              </Block>
            }
            {category.Tel && 
              <Block middel flex = {false} row style = {{marginBottom: 10}}>
                <Image center middel source={require('../assets/icons/phone-receiver.png')} style={{width: 15, height:15, marginRight: 12, tintColor: colors.primary}} />
                <Text gray caption >{category.Tel} </Text>
              </Block>
            }


            <Divider margin={[sizes.padding * 0.9, 0]} />
            
            <Block>
              <Text semibold>Gallery</Text>
              <Block row margin={[sizes.padding * 0.9, 0]}>
              <ScrollView
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               >
               {category.images.map((image,key) => (
                 <View key={`cate_${key}`}>
                   <TouchableHighlight
                    key={key}
                     onPress={() => {
                       this.setModalVisible(true);
                       this.setState({
                         imageSrc:image
                       })
                     }}>
                       <Image
                         source={image}
                         resizeMode="contain"
                         style={styles.image}
                       />
                     </TouchableHighlight>
                   <Modal

                     animationType="slide"
                     transparent={false}
                     visible={this.state.modalVisible}
                     onRequestClose={() => {
                       Alert.alert('Modal has been closed.');
                     }}
                   >
                     <View style={styles.modal}>
                       <TouchableHighlight
                         onPress={() => {
                           this.setModalVisible(!this.state.modalVisible);
                         }}>
                           <Text style={{color: '#fff'}}>close</Text>
                       </TouchableHighlight>
                       <Image
                         source={this.state.imageSrc}
                         style={styles.imageModal}
                         resizeMode = 'contain'
                       />
                     </View>
                   </Modal>
                 </View>
                ))}
             </ScrollView>
              </Block>
            </Block>
            <Divider margin={[sizes.padding * 0.9, 0]} />
          </Block>
        </ScrollView>
      )
    }
};

const styles = StyleSheet.create({
    product: {
        paddingHorizontal: sizes.base * 2,
        paddingVertical: sizes.padding,
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: sizes.base,
    },
    modal:{
     flex: 1,
     padding: 20,
     backgroundColor: 'rgba(0,0,0,0.9)'
   },
   imageModal:
   {
     flex: 1,
     margin: 2,
     padding: 2,
     width: width - 40,
     paddingBottom: 5
   }
});