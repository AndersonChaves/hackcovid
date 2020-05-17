import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Maps() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted){
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04, 
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView 
      onRegionChangeComplete={handleRegionChanged} 
      initialRegion={currentRegion} 
      style={styles.map}
    >
      <Marker 
        coordinate={{ 
          longitude: currentRegion.longitude,
          latitude: currentRegion.latitude,         
        }}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Maps;