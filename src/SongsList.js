import React from 'react';
import SongsRow from './SongsRow'

export default class SongsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: "all"
          };
          this.props.songs.shift()
    }
    handleFilterClick=(filter)=>{
        console.log("Setting filter to "+filter);
        
        this.setState({
          filter: filter
        })
      }
    //   onSongBoxchange=(e)=>{
    //     console.log("On Text Change",e.target.value);
    
    //     this.setState({
    //         newSong:e.target.value
    
    //     });
    //   }
    //   onArtistBoxchange=(e)=>{
    //     console.log("On Text Change",e.target.value);
    
    //     this.setState({
    //         artistName:e.target.value
    
    //     });
    //   }
    //   addFaveItem =(e)=>{
    //     e.preventDefault();
    //     console.log('Add Item!');
    
    //     this.setState({
    //       songArtist:{
    //           title:newSong,
    //           artist: {
    //           name: artistName
    //             },
    //         album:{
    //             cover: "https://www.google.com.sa/url?sa=i&url=https%3A%2F%2Fwww.moonlighting.com%2Fu%2Fsishaar_rao945483&psig=AOvVaw21Z6A_GOPluRcmOY2iO_Js&ust=1582615453226000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCmp5nU6ecCFQAAAAAdAAAAABAE"
    //       },
    //       todoItems:[...this.state.todoItems, this.state.newItem],
    //       newItem:''
    //     })
    //   }
     

    render(){
        if( this.props.songs.length >= 49){
            this.props.songs.shift()
            this.props.songs.shift()
        }
            const allSongs=this.props.songs.map((element,index)=>{
            return <SongsRow  songs={element} key={index} onfave={() => this.props.onfave(element)}
            isFave={this.props.faves.includes(element) } 
            isSelectD={this.props.deletelist.includes(element)}
            onselectdelete={ () => this.props.onselectdelete(element)}
            />
        })
        const allfave=this.props.faves.map((element,index)=>{
            return <SongsRow  songs={element} key={index} onfave={() => this.props.onfave(element)}
            isFave={this.props.faves.includes(element)} isSelectD={this.props.deletelist.includes(element)}
            onselectdelete={ () => this.props.onselectdelete(element)}
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
               <span className="section-count">{this.props.songs.length}</span>
           </div>
           <div
            className={`song-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} 
            onClick={() => this.handleFilterClick('faves')}>
               YOUR FAVORITE  
               <span className="section-count">{this.props.faves.length}</span>
           </div>
       </div>
       {/* <div>
           <input type="text" placeholder="Enter Song Title" value={this.state.newvalue} onChange={this.onSongBoxchange} />
           <input type="text" placeholder="Enter artist Name" value={this.state.artistName} onChange={this.onArtistBoxchange} />
           <button onClick={this.addFaveItem}>Add To Favorite</button>
       </div> */}
       <button onClick={this.props.ondelete}>DELETE ALL</button>
       {isSongs}
       
         </div>
        );

    }
}