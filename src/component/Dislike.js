import React, { Component } from 'react'


export default class Dislike extends Component{

    render(){
        if(this.props.data.dislikes.length){
            return (
                <div className='like' style={{textAlign:'center',marginTop:'40px'}}>
                    <h1>Dislikes</h1>
                {this.props.data.dislikes.map((dislike,idx) => {
                    const {objectId,img,name} = dislike
                    return (
                        
                        
    <div className="like" style={{display:'flex', flexDirection:'row'}} key={objectId} onClick={() => {
        this.props.data.undislike(objectId)
    }}>
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
                   <h1 style={{textAlign:'center',marginTop:'40px'}}>No Dislikes</h1> 
                </div>
            )
        }
    }
}




