import React from "react";
import { FooterTodo } from './Style'


export class Footer extends React.Component{
    render(){
        return(
           <> {this.props.checkItem() > 0 ? <FooterTodo className = "footer">
            <p className= "ItemLeft" >{this.props.itemLeft() + " item left"}</p>
            <div className ='collectionBtn'>
            <button className ="btn" onClick={() =>this.props.filter('all')}>All</button>
            <button className ="btn"  onClick ={()=>this.props.filter('active')}>Active</button>
            <button className ="btn"  onClick={()=> this.props.filter('completed')}>Completed</button>
            </div>
           
             {this.props.checkСompleted > 0 ? 
             <p className ="clearCompleted" onClick ={() => this.props.clearCompleted()}>{'Clear completed'+ "[" + this.props.checkСompleted + "]"}</p>: ""}
            
          </FooterTodo>: ""}</>
        )
    }
    
}