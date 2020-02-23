import React from 'react';

export default class SongsRow extends React.Component{


    render(){
            
        return (
            <div className="song-row">
                <img src={this.props.songs.album.cover} alt="songCover" />
                <h3>{this.props.songs.title}</h3>
                <h6>{this.props.songs.artist.name}</h6>
            </div>

        );
    }
}

  