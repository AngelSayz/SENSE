# Mapbox Map Viewer for Sense

This application integrates Mapbox functionality into your Sense app, allowing you to display interactive maps and work with geolocation.

## Setup Instructions

### 1. Install Dependencies

```bash
# Install the necessary packages
npm install
# or
yarn
```

### 2. Add Your Mapbox Access Token

To use Mapbox, you'll need to sign up for a Mapbox account and obtain an access token.

1. Sign up at [mapbox.com](https://www.mapbox.com/) and create a token
2. Open `components/MapView.tsx`
3. Replace `YOUR_MAPBOX_ACCESS_TOKEN` with your actual token

```typescript
// In MapView.tsx
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
```

### 3. Configure Location Permissions

The app uses Expo's location services. Ensure your app has the proper permissions set up:

#### For iOS (app.json)
```json
"ios": {
  "infoPlist": {
    "NSLocationWhenInUseUsageDescription": "This app needs access to your location to show it on the map."
  }
}
```

#### For Android (app.json)
```json
"android": {
  "permissions": ["ACCESS_COARSE_LOCATION", "ACCESS_FINE_LOCATION"]
}
```

## Features

- Interactive Mapbox map using WebView integration
- Dark/Light mode support that changes map style automatically
- Current location tracking
- Map navigation controls (zoom, rotate)
- Display of current coordinates

## How It Works

The map implementation uses a WebView to embed a Mapbox GL JS map. This approach allows:

1. Full Mapbox GL JS functionality in React Native
2. Bidirectional communication between the map and your React Native app
3. Customization of map styles, controls, and behaviors

The app includes:

- `MapView.tsx`: The component that renders the Mapbox map
- `useLocation.ts`: A hook for working with device location
- `map.tsx`: The map screen that integrates these components

## Extending the App

You can extend this map viewer by:

1. Adding markers for points of interest
2. Implementing search functionality for locations
3. Adding routing capabilities 
4. Creating custom map styles
5. Integrating with other data sources

## Troubleshooting

- If the map isn't displaying, ensure your Mapbox token is valid and has the necessary permissions
- For location issues, check that you've granted the app location permissions on your device
- For WebView errors, verify that react-native-webview is properly installed and linked 