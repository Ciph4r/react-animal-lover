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
            dislike: [],
            searchWord :''
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
        })
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
        })
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
        })
    }
    unLike = (id) => {
        const unlike = this.state.like.filter((animal)=> animal.objectId !==id)
        this.setState({
            like:unlike
        })
    }
    undislike = (id) => {
        const undislike = this.state.dislike.filter((animal)=> animal.objectId !==id)
        this.setState({
            dislike:undislike
        })
    }

    search = (event) => {
        this.setState({
          searchWord : event.target.value
        }
        )
      }

    render(){
        return (
            <div className='body'>
                <Animal data = {{animals:this.state.animals, searchWord: this.state.searchWord, delete: this.onDelete, like: this.onLike , dislike: this.onDislike }}  />
                <div>

                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" style={{width:'400px'}} type='text' placeholder='Search By Type...' value={this.state.searchWord} onChange={this.search} />
                            <i className="search icon"></i>
                        </div>
                         <div className="results"></div>
                    </div>

      
                <Like data = {{likes: this.state.like, unLike:this.unLike}} />
                <Dislike data = {{dislikes: this.state.dislike , undislike:this.undislike}} />
                </div>
            </div>
        )
    }
}