import styled from 'styled-components'




export const FooterTodo = styled.footer`
   box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px, rgb(246, 246, 246) 0px 8px 0px -3px,
   rgba(0, 0, 0, 0.2) 0px 9px 1px -3px, rgb(246, 246, 246) 0px 16px 0px -6px, 
   rgba(0, 0, 0, 0.2) 0px 17px 2px -6px;
  
   .footer_itemLeft{
    color: rgba(65, 62, 62, 0.726);
    display: flex;
    justify-content: start;
    margin: 0 0 -43px 10px;
   }
   .footer_collectionBtn{
    text-align: center;
  margin: 20px 0 0 0;
  padding: 0 0 10px;
  @media(max-width: 430px){
    margin: 50px 0 0 0;
     }
   }
   .footer_btn{
    color: rgba(65, 62, 62, 0.726);
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
      border: rgba(175, 47, 47, 0.1) ridge 1px;
    }
   }
   .footer_clearCompleted{
    color: rgba(65, 62, 62, 0.726);
    display: flex;
    justify-content: end;
    padding: 0 10px 20px 0;
    margin: -32px 0 0 0;
  @media(max-width: 430px){
    margin: -58px 0 0 0;
    padding: 0 10px 50px 0;
  }
   }`