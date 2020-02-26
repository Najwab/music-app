import React from 'react';
import SongsRow from './SongsRow'

export default class SongsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: "all"
          };
    }
    handleFilterClick=(filter)=>{
        console.log("Setting filter to "+filter);
        
        this.setState({
          filter: filter
        })
      }

     

    render(){
        if( this.props.songs.length >= 49){
            this.props.songs.shift()
            this.props.songs.shift()
            this.props.songs.shift()
        }
            const allSongs=this.props.songs.map((element,index)=>{
            return <SongsRow  songs={element}  key={index} index={index} onfave={() => this.props.onfave(element)}
            isFave={this.props.faves.includes(element) } 
            isSelectD={this.props.deletelist.includes(element)}
            onselectdelete={ () => this.props.onselectdelete(element)}

            
            oneditItemSelect={ () => this.props.oneditItemSelect(element)}
            url={this.props.url}
            title={this.props.title}
            artist={this.props.artist}
            
            editItemClicked={(element) =>this.props.editItemClicked(element)}
            onUrlBoxchange={this.props.onUrlBoxchange}
            onSongBoxchange={this.props.onSongBoxchange}
            onArtistBoxchange={this.props.onArtistBoxchange}
         
            />
        })
        const allfave=this.props.faves.map((element,index)=>{
            return <SongsRow  songs={element} key={index} index={index} onfave={() => this.props.onfave(element)}
            isFave={this.props.faves.includes(element)} isSelectD={this.props.deletelist.includes(element)}
            onselectdelete={ () => this.props.onselectdelete(element)}
            
            oneditItemSelect={ () => this.props.oneditItemSelect(element)}
            url={this.props.url}
            title={this.props.title}
            artist={this.props.artist}
            editItemClicked={() =>this.props.editItemClicked(element)}
          

            editItemClicked={(element) =>this.props.editItemClicked(element)}
            onUrlBoxchange={this.props.onUrlBoxchange}
            onSongBoxchange={this.props.onSongBoxchange}
            onArtistBoxchange={this.props.onArtistBoxchange}

            />
        })
        
        let isSongs;
        if(this.state.filter==='faves'){
            isSongs=allfave;

        }else {
            isSongs=allSongs;
        }

        return (
            <div>
            {/* <h1 className="section-title">{this.props.filmName}</h1> */}
       <div className="song-list-filters">
           <div
            className={`song-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} 
             onClick={() => this.handleFilterClick('All')}>
               ALL SONGS
           </div>
           <div
            className={`song-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} 
            onClick={() => this.handleFilterClick('faves')}>
               YOUR FAVORITE  
           </div>
       </div>
       {/* <div>
           <input type="text" placeholder="Enter Song Title" value={this.state.newvalue} onChange={this.onSongBoxchange} />
           <input type="text" placeholder="Enter artist Name" value={this.state.artistName} onChange={this.onArtistBoxchange} />
           <button onClick={this.addFaveItem}>Add To Favorite</button>
       </div> */}
        <div class="text-right"> 
       <button class="btn btn-danger" onClick={this.props.ondelete}>DELETE ALL</button>
       </div>
       {isSongs}
       
         </div>
        );

    }
}