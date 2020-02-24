import React from 'react';
import axios from "axios";
// import songsDB from './SongsDB';
import SongsList from './SongsList';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            songs:[],
            faves:[]
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
  const filmIndex=faves.indexOf(e);
  console.log(filmIndex);
  
    
 if(filmIndex===-1){
     faves.push(e);
     console.log(faves);
    
     
 }else{
     faves.splice(filmIndex,1);
     console.log(faves);
     
 }

 this.setState({
          faves:faves
        })

 }
   render(){
       
        return(
         <div className="app-container">

         <div className="side-one"> 
            <h1>Music App</h1> 
            <h4>Welcom</h4>
         </div>

        <div>
         <SongsList songs={this.state.songs} faves={this.state.faves} onfave={this.handleFaveToggle} />
         </div>

        </div>

        )
    }
}
