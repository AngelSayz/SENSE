import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import WebView from 'react-native-webview';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import Constants from 'expo-constants';

// Get Mapbox token from environment variables - make sure to replace this in .env file
// The token is loaded from frontend/.env
const MAPBOX_TOKEN = process.env.EXPO_PUBLIC_MAPBOX_TOKEN || 'your_mapbox_token_here';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type MapViewProps = {
  style?: any;
  initialLocation: Location;
  onLocationChange?: (location: Location) => void;
};

export default function MapView({ style, initialLocation, onLocationChange }: MapViewProps) {
  const webViewRef = useRef<WebView>(null);
  const colorScheme = useColorScheme();
  const mapStyle = colorScheme === 'dark' ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/streets-v12';
  
  // Handle map events (like when user moves the map)
  const onMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === 'location' && onLocationChange) {
        onLocationChange({
          latitude: data.latitude,
          longitude: data.longitude,
          zoom: data.zoom
        });
      }
    } catch (error) {
      console.error('Error parsing WebView message:', error);
    }
  };

  // Create the HTML content for the WebView
  const mapboxHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet">
      <script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
      <style>
        body { margin: 0; padding: 0; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        // Replace with your actual Mapbox access token
        mapboxgl.accessToken = '${MAPBOX_TOKEN}';
        
        const map = new mapboxgl.Map({
          container: 'map',
          style: '${mapStyle}',
          center: [${initialLocation.longitude}, ${initialLocation.latitude}],
          zoom: ${initialLocation.zoom}
        });
        
        // Add navigation controls (zoom buttons)
        map.addControl(new mapboxgl.NavigationControl());
        
        // Add geolocate control to the map (locate user)
        map.addControl(new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        }));
        
        // Send the current map position to React Native when moved
        map.on('moveend', () => {
          const center = map.getCenter();
          const zoom = map.getZoom();
          
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'location',
            latitude: center.lat,
            longitude: center.lng,
            zoom: zoom
          }));
        });
      </script>
    </body>
    </html>
  `;

  return (
    <View style={[styles.container, style]}>
      {Platform.OS === 'web' ? (
        <ThemedView style={styles.webNotSupported}>
          <ThemedText>Mapbox is not supported in web preview.</ThemedText>
          <ThemedText>Please run on iOS or Android device/simulator.</ThemedText>
        </ThemedView>
      ) : (
        <WebView
          ref={webViewRef}
          originWhitelist={['*']}
          source={{ html: mapboxHtml }}
          style={styles.webview}
          onMessage={onMessage}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          geolocationEnabled={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
  webNotSupported: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
}); 