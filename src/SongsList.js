import React from 'react';
import SongsRow from './SongsRow'

export default class SongsList extends React.Component{

    render(){
            const allSongs=this.props.songs.map((element,index)=>{
            return <SongsRow  songs={element} key={index}
            />
        })
        return (
            <div className="side-two"> 
                {allSongs}

            </div>

        );

    }
}