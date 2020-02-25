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
        editbutton=<Edit/>
       }else{
            selectbutton='';
            editbutton='';
        }
            
        return (
            <div className="row">
                <img src={this.props.songs.album.cover_medium} alt="songCover" className="col-log-4 col-md-4 col-sm-6 col-xs-12" />
              <div className="col-log-8 col-md-4 col-sm-6 col-xs-12">
                <h3 className="">{this.props.songs.title}</h3>
                <h6 className="">{this.props.songs.artist.name}</h6>
                </div>
        
                {selectbutton}
                {editbutton}
                {/* <Delete onselectdelete={(element)=>this.props.onselectdelete(element)} isSelectD={this.props.isSelectD}/> */}
                <Fave onfave={(element) => this.props.onfave(element)} isFave={this.props.isFave}/>
            </div>

        );
    }
}

  