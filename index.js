// Import a libray to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
    <Header headerText={'Photos'} />
);


// Render it to the device
// ReactNative renders the project named albums
// The arrow function returns the first component aka App 
AppRegistry.registerComponent('albums', () => App);
