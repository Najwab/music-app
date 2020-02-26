import React from 'react';

export default class Edit extends React.Component{
  constructor(props){
    super(props);
 

}

handleClick =(e)=>{
    e.stopPropagation();  
    console.log("handling Edit click!");
    this.props.oneditItemSelect()
 }

//  handleClickone =(e)=>{
//   e.stopPropagation();  
//   this.props.onUrlBoxchange()

// }

// handleClicktwo =(e)=>{
//   e.stopPropagation(); 
//   this.props.onSongBoxchange()
  
// }

// handleClickthree =(e)=>{
//   e.stopPropagation(); 
//   this.props.onArtistBoxchange()
  
// }

// editFaveItem =(e)=>{
//     e.preventDefault();
//     this.props.editItemClicked()
// }
       
    render(){
        return (
            <div className='heart-icon' onClick={this.handleClick}>
   <button onClick={this.changedata} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit!</button>
   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Item</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
            <label for="exampleInputEmail1">Image URL</label>
            <input type="text"  class="form-control" id="exampleInputEmail1" 
             value={this.props.url} 
             onChange={this.props.onUrlBoxchange}
             />
            <label for="exampleInputEmail1">Song Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" 
             value={this.props.title} 
             onChange={this.props.onSongBoxchange} 
            />
            <label for="exampleInputPassword1">Artist Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1"
            value={this.props.artist}
              onChange={ this.props.editItemClicked}
             />
       
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={()=>this.props.editItemClicked(this.props.index)} type="button" class="btn btn-primary">
          Save changes
          </button>
        </div>
        </div>
        </div>
        </div>
          </div>

        );
    }

}