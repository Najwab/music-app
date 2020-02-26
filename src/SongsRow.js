import React from 'react';
import Fave from './Fave';
import Delete from './delete';
import Edit from './Edit';

export default class SongsRow extends React.Component{


    render(){
        let selectbutton;
        let editbutton ;
        if(this.props.isFave){
        selectbutton= <Delete onselectdelete={(element)=>this.props.onselectdelete(element)} isSelectD={this.props.isSelectD}/>
        editbutton=<Edit 
        songs={this.props.songs} 
        url={this.props.url}
        title={this.props.title}
        artist={this.props.artist}

        oneditItemSelect={ (element) => this.props.oneditItemSelect(element)}
        editItemClicked={(element) => this.props.editItemClicked(element)}
        onUrlBoxchange={this.props.onUrlBoxchange}
        index={this.props.index}
        onSongBoxchange={this.props.onSongBoxchange}
        onArtistBoxchange={this.props.onArtistBoxchange}
        />
       }else{
            selectbutton='';
            editbutton='';
        }
            
        return (
            <div className="row">
                <img src={this.props.songs.album.cover_medium} alt="songCover" className="col-log-3 col-md-4 col-sm-6 col-xs-12" />
              <div className="col-log-8 col-md-4 col-sm-6 col-xs-12">
                <h3 className="">{this.props.songs.title}</h3>
                <h6 className="">{this.props.songs.artist.name}</h6>
                <audio controls>
                <source src={this.props.songs.preview} type="audio/mpeg"/>
                </audio>
                </div>
        
                {selectbutton}
                {editbutton}
                {/* <Delete onselectdelete={(element)=>this.props.onselectdelete(element)} isSelectD={this.props.isSelectD}/> */}
                <Fave onfave={(element) => this.props.onfave(element)} isFave={this.props.isFave}/>

                
            </div>

        );
    }
}

  