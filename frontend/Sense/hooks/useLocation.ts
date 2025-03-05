import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export type LocationData = {
  latitude: number;
  longitude: number;
  accuracy?: number;
  altitude?: number;
  heading?: number;
  speed?: number;
  timestamp?: number;
};

export type LocationState = {
  location: LocationData | null;
  error: string | null;
  isLoading: boolean;
  getCurrentLocation: () => Promise<void>;
};

export const useLocation = (shouldTrack = false): LocationState => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const getCurrentLocation = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Request location permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        setIsLoading(false);
        return;
      }
      
      // Get current position
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        accuracy: location.coords.accuracy || undefined,
        altitude: location.coords.altitude || undefined,
        heading: location.coords.heading || undefined,
        speed: location.coords.speed || undefined,
        timestamp: location.timestamp,
      });
    } catch (err) {
      setError('Failed to get location: ' + (err instanceof Error ? err.message : String(err)));
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if (shouldTrack) {
      getCurrentLocation();
      
      let subscription: Location.LocationSubscription;
      
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          return;
        }
        
        // Subscribe to location updates
        subscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 5000,
            distanceInterval: 10,
          },
          (location) => {
            setLocation({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              accuracy: location.coords.accuracy || undefined,
              altitude: location.coords.altitude || undefined,
              heading: location.coords.heading || undefined,
              speed: location.coords.speed || undefined,
              timestamp: location.timestamp,
            });
          }
        );
      })();
      
      // Cleanup function
      return () => {
        if (subscription) {
          subscription.remove();
        }
      };
    }
  }, [shouldTrack]);
  
  return { location, error, isLoading, getCurrentLocation };
}; 