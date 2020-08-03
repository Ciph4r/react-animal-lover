import React, { Component } from 'react'
import Animal from './Animal'
import Like from './Like'
import Dislike from './Dislike'
import {animals} from '../data/animalData'
import './App.css'

export default class App extends Component{
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
            <div className='body'>
                <Animal data = {{animals:this.state.animals, delete: this.onDelete, like: this.onLike , dislike: this.onDislike }}  />
                <div>
                <Like data = {{likes: this.state.like}} />
                <Dislike data = {{dislikes: this.state.dislike}} />
                </div>
            </div>
        )
    }
}