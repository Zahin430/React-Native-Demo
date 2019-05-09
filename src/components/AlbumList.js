import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


// Render method to return some amout of jsx
// Used inside a class based component
// Unique advantage for lifecycle components to use lifecycle methods
class AlbumList extends Component {
    // AlbumList GETS INITIAL STATE OF { albums: [] }
    state = { albums: [] };

    // HTTP REQUEST RETURNS JSON DATA
    // REQUEST HANDLER CALLS 'setstate'
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        // PASSING PROPS TO COMMUNICATE WITH CHILD
        return this.state.albums.map(
            album => <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        ); 
    }
}

export default AlbumList;
