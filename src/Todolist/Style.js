import styled from 'styled-components'



export const DivApp = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 25px 50px 0px;
  .App_inputTodo{
    padding: 16px 16px 16px 60px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: rgba(0, 0, 0, 0.004);
    position: relative;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;   
    box-sizing: border-box;    
    margin: 0px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(153, 153, 153);
    border-image: initial;
  }
  .App_ullist{
    padding: 0;
  }
  .App_lists{
    display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 24px;
  padding: 10px 10px 15px 10px;
  border-bottom: rgba(53, 50, 50, 0.39) ridge 1px ;
  }
  .App_todolist{
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 24px;
    padding: 10px 10px 15px 10px;
    border-bottom: rgba(53, 50, 50, 0.39) ridge 1px ;
  }
  .App_todobutton{
    background: none;
    border: none;
    color: red;
    cursor: pointer;
  }
`

