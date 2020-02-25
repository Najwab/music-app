import React from 'react';

export default class Edit extends React.Component{
     handleClick =(e)=>{
        e.stopPropagation();  
        console.log("handling Edit click!");
        
        this.props.onselectdelete();

       }
       
    render(){
    //  const isSelectD = (this.props.isSelectD) ? 'https://image.flaticon.com/icons/svg/1672/1672373.svg' : 'https://image.flaticon.com/icons/svg/1672/1672370.svg';
        return (
            <div className='heart-icon' onClick={this.handleClick}>
            <p className="editMessage">Edit</p>
          </div>

        );
    }

}