import React, { Component } from "react";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  View,
} from "react-native";
import Block from "../components/Block";
import Text from "../components/Text";
import { theme } from "../constants";
const { width, height } = Dimensions.get("window");
import Information from "./Information";
import Destination from "./Destination";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);
const initialLayout = { width: Dimensions.get("window").width };

class Explore extends Component {
  state = {
    index: 0,
    routes: [
      { key: "info", title: "Information" },
      { key: "dest", title: "Destination" },
    ],
  };
  renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        style={[styles.tabbar]}
        activeColor={theme.colors.primary}
        inactiveColor={theme.colors.gray}
        tabStyle={styles.tabStyle}
        indicatorStyle={styles.indicator}
      />
    );
  };
  render() {
    return (
      /// <Text>{ this.props.route.params.nm}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={this.state.content}
      >
        <Block>
          <ImageBackground
            source={this.props.route.params.category.image}
            style={{ width: width - 20, height: height / 3, margin: 10 }}
          >
            <Block
              flex={false}
              row
              center
              space="between"
              style={styles.header}
            >
              <Text
                h1
                bold
                style={{
                  color: "white",
                  shadowColor: theme.colors.primary,
                  shadowOffset: { width: 0, height: 12 },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,
                  elevation: 24,
                }}
              >
                {this.props.route.params.category.Name}
              </Text>
            </Block>
          </ImageBackground>
          <TabView style={styles.tabViewStyle}
            navigationState={this.state}
            renderScene={SceneMap({
              info: () => (
                <Information category={this.props.route.params.category} />
              ),
              dest: () => (
                <Destination category={this.props.route.params.category} all={false} />
              ),
            })}
            renderTabBar={this.renderTabBar}
            onIndexChange={(index) => this.setState({ index })}
            initialLayout={{ width: width, height: height }}
          />

        </Block>
      </ScrollView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,


  },
  mainImage: {
    minWidth: width - theme.sizes.padding * 2.5,
    minHeight: width - theme.sizes.padding * 2.5,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  tabbar: {

    backgroundColor: "white",
    justifyContent: "space-around",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  indicator: {
    backgroundColor: theme.colors.secondary,
    width: width / 2,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    color: theme.colors.grey,
  },
  activeLabel: {
    fontSize: 16,
    color: theme.colors.secondary,


  },
  tabStyle: {
    color: "black",
    paddingBottom: theme.sizes.base,
    width: width / 2,
  },
  tabViewStyle: {

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',


  },
});

