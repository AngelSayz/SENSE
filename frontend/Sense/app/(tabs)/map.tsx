import { StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import MapView from '../../components/MapView';
import { StatusBar } from 'expo-status-bar';
import { useLocation } from '@/hooks/useLocation';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';

type MapLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export default function MapScreen() {
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  
  // Default to San Francisco if no location is available
  const [mapLocation, setMapLocation] = useState<MapLocation>({
    latitude: 37.78825,
    longitude: -122.4324,
    zoom: 11
  });
  
  const { location, error, isLoading, getCurrentLocation } = useLocation();
  
  // When we get the user's location, update the map center
  useEffect(() => {
    if (location) {
      setMapLocation(prevLocation => ({
        ...prevLocation,
        latitude: location.latitude,
        longitude: location.longitude,
      }));
    }
  }, [location]);
  
  const handleLocationChange = (newLocation: MapLocation) => {
    setMapLocation(newLocation);
  };
  
  const handleLocateMe = () => {
    getCurrentLocation();
  };
  
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Map Viewer</ThemedText>
        {isLoading && <ThemedText>Getting location...</ThemedText>}
        {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
      </ThemedView>
      
      <MapView 
        style={styles.map}
        initialLocation={mapLocation}
        onLocationChange={handleLocationChange}
      />
      
      <ThemedView style={styles.controls}>
        <TouchableOpacity
          style={styles.locateButton}
          onPress={handleLocateMe}
          disabled={isLoading}
        >
          <IconSymbol name="location.fill" size={24} color={iconColor} />
        </TouchableOpacity>
      </ThemedView>
      
      <ThemedView style={styles.coordinatesContainer}>
        <ThemedText>
          Lat: {mapLocation.latitude.toFixed(4)}, Long: {mapLocation.longitude.toFixed(4)}, Zoom: {mapLocation.zoom.toFixed(1)}
        </ThemedText>
      </ThemedView>
      <StatusBar style="auto" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 8,
  },
  map: {
    flex: 1,
  },
  coordinatesContainer: {
    padding: 16,
    alignItems: 'center',
  },
  controls: {
    position: 'absolute',
    right: 16,
    bottom: 100,
    zIndex: 1,
  },
  locateButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
}); 