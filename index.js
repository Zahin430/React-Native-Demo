// Import a libray to help create components
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
// ReactNative renders the project named albums
// The arrow function returns the first component aka App 
AppRegistry.registerComponent('albums', () => App);
