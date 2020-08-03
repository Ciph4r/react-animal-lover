import React, { Component } from 'react'


class Like extends Component{

    render(){
        if(this.props.data.likes.length){
            return (
                <div className='like' style={{textAlign:'center',marginTop:'40px'}}>
                    <h1>Likes</h1>
                {this.props.data.likes.map((like,idx) => {
                    const {objectId,img,name} = like
                    return (
                        
                        
    <div className="like" style={{display:'flex', flexDirection:'row'}} key={objectId}>
      <div className="image">
        <img alt ='...' src={img} style={{height:'100px',width:'200px'}}/>
      </div>
      <div className="content" style = {{backgroundColor:'grey',height:'100px',width:'150px'}}>
        <h3 className="header" style={{color:'white',textAlign:'center',marginTop:'40px'}}>{name}</h3>
      </div>
    </div>

                    )
                })}
    
                </div>
            )

        }else {
            return (
                <div>
                   <h1 style={{textAlign:'center',marginTop:'40px'}}>Likes</h1> 
                </div>
            )
        }
    }
}




export default Like