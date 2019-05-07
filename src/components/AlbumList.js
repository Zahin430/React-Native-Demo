import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Render method to return some amout of jsx
// Used inside a class based component
// Unique advantage for lifecycle components to use lifecycle methods
class AlbumList extends Component {
    componentWillMount() {
        console.log('componentWillMount in AlbumList');
    }
    
    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        ); 
    }
}

export default AlbumList;
