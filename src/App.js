import './App.css';
import React from 'react';
import { Header } from './Header/Header';
import { Todolist } from './Todolist/TodoList'


class App extends React.Component{

  render() {
    return(     
      <><Header />       
      <Todolist />         
        </>    
    );
  }
}

  
export default App;