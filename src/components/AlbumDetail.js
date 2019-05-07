import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    // PASSING PROPS
    // TO COMMUNICATE WITH THE PARENT AlbumList
    // TAKING THE PROP PASSED OVER THERE AKA ALBUM
    return (
        <View>
            <Text>{props.album.title}</Text> 
        </View>
    );
};

export default AlbumDetail;
