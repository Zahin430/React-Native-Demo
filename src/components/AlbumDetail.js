import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    // PASSING PROPS
    // TO COMMUNICATE WITH THE PARENT AlbumList
    // TAKING THE PROP PASSED OVER THERE AKA ALBUM
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text> 
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
