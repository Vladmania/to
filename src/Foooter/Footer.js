import React from "react";
import { FooterTodo } from './StyledFooter'


export class Footer extends React.Component{
    render(){
        return(
           <> {this.props.checkItem() > 0 ? <FooterTodo className = "footer">
            <p className= "footer_itemLeft" >{this.props.itemLeft() + " item left"}</p>
            <div className ='footer_collectionBtn'>
            <button className ="footer_btn" onClick={() =>this.props.filter('all')}>All</button>
            <button className ="footer_btn"  onClick ={()=>this.props.filter('active')}>Active</button>
            <button className ="footer_btn"  onClick={()=> this.props.filter('completed')}>Completed</button>
            </div>
           
             {this.props.checkСompleted > 0 ? 
             <p className ="footer_clearCompleted" onClick ={() => this.props.clearCompleted()}>{'Clear completed'+ "[" + this.props.checkСompleted + "]"}</p>: ""}
            
          </FooterTodo>: ""}</>
        )
    }
    
}