import React, { Component } from 'react'

const SearchIt = (word) => {
    return function(item){
      return item.type.toLowerCase().includes(word.toLowerCase())
    }
  }

class Animal extends Component{
    
    render(){
     
        return (
            <div>
                <h1>Animal Lovers</h1>
                    <div className='ui cards main' style={{marginLeft:'100px'}}>
             {this.props.data.animals.filter(SearchIt(this.props.data.searchWord)).map((animal,idx) => {
                 const {objectId,img,name,type,description} = animal
                  return (
                <div className="ui card" key={objectId}>
                        <div className="image">
                             <img alt='...' src={img} />
                        </div>
                    <div className="content">
                            <h1 className="header">{name}</h1>
                        <div className="meta">
                  <span className="animal-type">{type}</span>
                        </div>
                         <div className="description">
                            {description}
                         </div>
                    </div>
                    <div className="extra content">
                      <button className='ui primary button' onClick={() => {
                            this.props.data.like(objectId)
                        }} >Like</button>
                      <button className='ui button red' onClick={() => {
                            this.props.data.dislike(objectId)
                        }}>Dislike</button>
                      <button className='ui button grey' onClick={() => {
                            this.props.data.delete(objectId)
                        }} >Discard</button>
                    </div>
                </div>
                )                     
             })}
            </div>

            </div>
            

        )
    }
}




export default Animal