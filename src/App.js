import React from 'react';
import axios from "axios";
// import songsDB from './SongsDB';
import SongsList from './SongsList';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            songs:[]
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
   render(){
       
        return(
         <div className="app-container">

         <div className="side-one"> 
            <h1>Music App</h1> 
            <h4>Welcom</h4>
         </div>

        <div>
         <SongsList songs={this.state.songs}/>
         </div>

        </div>

        )
    }
}
