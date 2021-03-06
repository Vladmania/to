import React from "react";
import {DivApp } from './Style'
import {v4} from "uuid"
import{ Footer} from "../Foooter/Footer"



export class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          newItem: '',
          list:[],
          filter: 'all',
        }
      }
      updateInput(key, value){
        this.setState({
          [key]: value
        })
    }
  
    
    addItem(){
      const newItem = {
        id: v4(),
        value: this.state.newItem,
        status: false,  
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: "",
      })
    }
     
    doneTodo(id){
      const todoIndex = this.state.list.findIndex(item => item.id === id);
      const todo = this.state.list;
      todo[todoIndex].status = !todo[todoIndex].status;
      this.setState({
        todos: [...this.state.list]
      });
    }
    
    deleteItem = (id) => {
      const list = [...this.state.list]
      const updatedList = list.filter(item => item.id !== id);
  
      this.setState({list: updatedList});
    }
  
    itemLeft = () => {
      const item = this.state.list.filter(item => item.status === false);
      return item.length
    }
    checkItem = () => {
      const item = this.state.list.filter(item => item.value === item.value);
      return item.length
    }
    checkСompleted = () => {
      const item = this.state.list.filter(item => item.status === true);
      return item.length
    }
    clearCompleted = () =>{
         const list = [...this.state.list];
         const filtersActive = list.filter(item => item.status === false); 
         this.setState({list: filtersActive}) 
    }
    activeItem = () =>{
      const list = [...this.state.list];
      const filtersActive = list.every(item => item.status === true); 
      return filtersActive
    }
  
    filter = (filter) => {
    this.setState({filter})
  }
  
    filterItem(item){
      switch(this.state.filter){
        case 'completed':
         return item.status
        case 'all':
          return true;
        case 'active':
          return !item.status;  
      }    
    }
    
      
    render(){
        return(
            <><DivApp className="App">
            <input
                  className ="App_inputTodo"
                  placeholder="What needs to be done?"
                  value= {this.state.newItem}
                  onChange={(e) => this.updateInput("newItem" ,e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" ? this.addItem(): ''} 
                  />
                           
                <ul className = 'App_ullist'>
                {this.state.list.map(item => {
                  
                   return (
                      
                      <> {this.filterItem(item) ? <li className = "App_lists" key={item.id}>
                        <div><input onChange={() => this.doneTodo(item.id)} className="App_checkboxTodo" type="checkbox"></input>
                        <label className={item.status ? "App_done" : ""}>{item.value}</label></div>
                        <button className = "App_todobutton" onClick={() => this.deleteItem(item.id)}>X</button>
                      </li>: ''}</>
                    );
                  })}
                  </ul>
                  
                  <Footer 
                  checkItem = {this.checkItem}
                  itemLeft = {this.itemLeft}
                  filter = {this.filter}
                  checkСompleted = {this.checkСompleted()}
                  clearCompleted = {this.clearCompleted}
                   />
                   </DivApp></>
        )
    }
}