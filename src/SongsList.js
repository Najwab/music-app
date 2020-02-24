import React from 'react';
import SongsRow from './SongsRow'

export default class SongsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: "all",
            newvalue: "Song Title",
            artistName:"Artist Name"
          };
    }
    handleFilterClick=(filter)=>{
        console.log("Setting filter to "+filter);
        
        this.setState({
          filter: filter
        })
      }

    render(){
            const allSongs=this.props.songs.map((element,index)=>{
            return <SongsRow  songs={element} key={index} onfave={() => this.props.onfave(element)}
            isFave={this.props.faves.includes(element)}
            />
        })
        const allfave=this.props.faves.map((element,index)=>{
            return <SongsRow  songs={element} key={index} onfave={() => this.props.onfave(element)}
            isFave={this.props.faves.includes(element)}
            />
        })
        let isSongs;
        if(this.state.filter==='faves'){
            isSongs=allfave;

        }else {
            isSongs=allSongs;
        }

        return (
            <div className="side-two">
            {/* <h1 className="section-title">{this.props.filmName}</h1> */}
       <div className="song-list-filters">
           <div
            className={`song-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} 
             onClick={() => this.handleFilterClick('All')}>
               ALL SONGS
               <span className="section-count">{this.props.songs.length}</span>
           </div>
           <div
            className={`song-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} 
            onClick={() => this.handleFilterClick('faves')}>
               YOUR FAVORITE  
               <span className="section-count">{this.props.faves.length}</span>
           </div>
       </div>
       <div>
           <input type="text" value={this.state.newvalue} />
           <input type="text" value={this.state.artistName} />
           <button>Add To Favorite</button>
       </div>
       {isSongs}
       
         </div>
        );

    }
}