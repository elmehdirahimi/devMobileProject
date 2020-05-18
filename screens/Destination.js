import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker ,  PROVIDER_GOOGLE }  from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import {categories} from '../constants/mocks'

export default function Destination({category, all}) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    if(all == false)
    {
      return (
        <MapView
        provider={PROVIDER_GOOGLE} 
          showsUserLocation={true}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
        >
          <Marker
            coordinate={{
              latitude: category.coordinate.latitude ,
              longitude: category.coordinate.longitude,
              
            }}
          />
  
        </MapView>
      );
    }
      return (
        <MapView
        provider={PROVIDER_GOOGLE} 
          showsUserLocation={true}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
        >
          {
          categories.map(marker => (
            <Marker
            coordinate={{
              latitude: marker.coordinate.latitude ,
              longitude: marker.coordinate.longitude,
            }}
          />
          ))
      }
  
        </MapView>
      );
  
  }

  return (
    <MapView
    provider={PROVIDER_GOOGLE} 
      showsUserLocation={true}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 32.8810800,
        longitude: -6.9063000,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}
    >

    </MapView>
  );

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
