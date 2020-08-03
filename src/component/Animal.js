import React, { Component } from 'react'
import {animals} from '../data/animalData'



class Animal extends Component{
    constructor(){
        super()
        this.state = {
            animals : [...animals],
            like: [],
            dislike: []
        }
    }
    onDelete = (id) => {
        const animals = this.state.animals.filter((animal)=> animal.objectId !==id)
        const dislike = this.state.dislike.filter((animal)=> animal.objectId !==id)
        const like = this.state.like.filter((animal)=> animal.objectId !==id)
        this.setState({
            animals,
            like,
            dislike
        },()=>{console.log(this.state)})
    }

    onLike = (id) => {
        if (this.state.like.filter((animal)=> animal.objectId === id).length){
            return
        }
        const like = [...this.state.like]
        const dislike = this.state.dislike.filter((animal)=> animal.objectId !==id)
        like.push(this.state.animals.filter((animal)=> animal.objectId ===id)[0])
        this.setState({
            like,
            dislike
        },()=>{console.log(this.state)})
    }

    onDislike = (id) => {
        if (this.state.dislike.filter((animal)=> animal.objectId ===id).length){
            return
        }
        const like = this.state.like.filter((animal)=> animal.objectId !==id)
        const dislike = [...this.state.dislike]
        dislike.push(this.state.animals.filter((animal)=> animal.objectId ===id)[0])
        this.setState({
            like,
            dislike
        },()=>{console.log(this.state)})
    }
   
    render(){
        
        return (
            <div>
                <h1>Animal Lovers</h1>
                    <div className='ui cards' style={{marginLeft:'100px'}}>
             {this.state.animals.map((animal,idx) => {
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
                            this.onLike(objectId)
                        }} >Like</button>
                      <button className='ui button red' onClick={() => {
                            this.onDislike(objectId)
                        }}>Dislike</button>
                      <button className='ui button grey' onClick={() => {
                            this.onDelete(objectId)
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