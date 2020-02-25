import React from 'react';
import axios from "axios";
// import songsDB from './SongsDB';
import SongsList from './SongsList';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            songs:[],
            faves:[],
            newSong: "",
            artistName:"",
            deletelist:[]
            //songs:songsDB.tracks.data
        };  

    }

    componentDidMount(){
        const url = 'https://api.deezer.com/playlist/908622995';
        axios({
        method: 'get',
        url
        }).then(response => {
        console.log(response) ;

        this.setState({
            songs:response.data.tracks.data
            })

            console.log(this.state.songs);

        // this.setState({
        //     songs:this.state.songs.shift()
        //     })

        //     console.log(this.state.songs);


            
        })
        
        .catch(err => {
            console.log('ERROR: ', err);
        });
    
    }
// getTest=()=>{

//     const url = 'https://api.deezer.com/playlist/908622995';
//     axios({
//     method: 'get',
//     url
//     }).then(response => {
//     console.log(response) ;
//     // this.setState({
//     //     songs:response.data
//     //     })
//     //     console.log(this.songs);
        

//     })
//     .catch(err => {
//         console.log('ERROR: ', err);
//     });
//    {/* <button onClick={this.getTest}>get data</button> */}
// }


handleFaveToggle = (e) => {
    console.log(e);
 const faves=Array.prototype.slice.call(this.state.faves)
 console.log(faves);
  const songIndex=faves.indexOf(e);
  console.log(songIndex);
  
    
 if(songIndex===-1){
     faves.push(e);
     console.log(faves);
    
     
 }else{
     faves.splice(songIndex,1);
     console.log(faves);
     
 }

 this.setState({
          faves:faves
        })

 }

 onSongBoxchange=(e)=>{
    console.log("On Text Change",e.target.value);

    this.setState({
        newSong:e.target.value

    });
    }

onArtistBoxchange=(e)=>{
    console.log("On Text Change",e.target.value);

    this.setState({
        artistName:e.target.value

    });
    }

addFaveItem =(e)=>{
    e.preventDefault();

    const faves=this.state.faves;
    const newSongArtist={
        title:this.state.newSong,
        artist:{name:this.state.artistName},
        album:{cover_medium:"https://www.moonlighting.com/app/assets/images/empty_profile_180.jpg"}
    }
    if(newSongArtist.title==="" || newSongArtist.artist.name ===''){
        console.log("Cann't add empty ");
        
    }else{

    faves.push(newSongArtist);

    this.setState({
        faves:faves,
        newSong:"",
        artistName:""
    })
}

}
selectDeleteItem=(e)=>{
    console.log(e);
    const deletelist=Array.prototype.slice.call(this.state.deletelist)
    console.log(deletelist);
     const songIndex=deletelist.indexOf(e);
     console.log(songIndex);
     
       
    if(songIndex===-1){
        deletelist.push(e);
        console.log(deletelist);
       
        
    }else{
        deletelist.splice(songIndex,1);
        console.log(deletelist);
        
    }
   
    this.setState({
             deletelist:deletelist
           })
}

deleteAllFave=(e)=>{
    e.preventDefault();
    console.log(e);
    const deletelist=this.state.deletelist;
    console.log(deletelist);

    if(deletelist.length === 0){
        this.setState({
            faves:[]
        }) 
    }else {
        const faves=Array.prototype.slice.call(this.state.faves)
        console.log(faves);
        deletelist.forEach(element => {
            const songIndex=faves.indexOf(element);
            console.log(songIndex); 
            return faves.splice(songIndex,1);
        });

    this.setState({
        faves:faves,
        deletelist:[]
    }) 
}
}

// editItem=(e)=>{
//     console.log(e);
//     const faves=Array.prototype.slice.call(this.state.deletelist)
//     console.log(faves);
//      const songIndex=deletelist.indexOf(e);
//      console.log(songIndex);

//     //  start
        
//       //but   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//         Launch demo modal
//         </button>

//         <!-- Modal -->
//         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog" role="document">
//         <div class="modal-content">
//         <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//         </button>
//         </div>
//         <div class="modal-body">
//         ...
//         </div>
//         <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//         </div>
//         </div>
//         </div>
//         </div>







//     //    End
//     if(songIndex===-1){
//         faves.push(e);
//         console.log(faves);
       
        
//     }else{
//         faves.splice(songIndex,1);
//         console.log(faves);
        
//     }
   
//     this.setState({
//         faves:faves
//            })
// }

   render(){
       
        return(
         <div className="container">
             <div className="row">

         <div className="col-log-4 col-md-4 col-sm-6 col-xs-12"> 
            <h1>Music App</h1> 
            <h4>Welcom</h4>
            {/* form start */}
        <div class="form-group">
            <label for="exampleInputEmail1">Song Title</label>
            <input type="text" placeholder="Enter Song Title" class="form-control" id="exampleInputEmail1" placeholder="Enter Song Title" value={this.state.newSong} onChange={this.onSongBoxchange} />
            <label for="exampleInputPassword1">Artist Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter artist Name" value={this.state.artistName} onChange={this.onArtistBoxchange}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={this.addFaveItem}>Add To Favorite</button>

            {/* form END */}

{/* ss */}

            {/* jjj */}

         </div>

        <div className="col-log-8 col-md-8 col-sm-12 col-xs-12" >
         <SongsList songs={this.state.songs} faves={this.state.faves}
          onfave={this.handleFaveToggle} ondelete={this.deleteAllFave} 
          onselectdelete={this.selectDeleteItem}
          deletelist={this.state.deletelist} />
         </div>
         </div>

        </div>

        )
    }
}
