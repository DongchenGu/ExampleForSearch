import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './components/Search';
import List from './components/List';

export default class App extends React.Component{
    //初始化状态，users初始值为数组
    state={
      users:[]
    }
    saveUsers = (users)=>{
        this.setState({users: users});
    }
  
    render(){
      const {users} = this.state;
      return(
        <div>
            <div className="container">
                <Search saveUsers = {this.saveUsers}/>
                <List users= {users}/>
            </div>
        </div>
        
      );
    }
  
}

