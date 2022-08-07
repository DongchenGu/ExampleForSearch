import React from "react";
import "./index.css"
import PubSub from "pubsub-js";

export default class List extends React.Component{

    //初始化状态，
    state={
        users:[],//users初始值为数组
        isFirst: true, //是否为第一次打开页面
        isLoading:false, //标识是否处于加载中
        err: '',  //存储请求相关的错误信息
    }

    componentDidMount(){
        PubSub.subscribe('message',(message,data)=>{
           this.setState(data);
        });
    }

    render(){
        const{users,isFirst,isLoading,err} = this.state
        return(                   
                <div className="row">
                {
                    isFirst? <h2>input the keyword，then search the results </h2>: 
                    isLoading? <h2>Loading~~~~~ </h2>: 
                    err? <h2 style={{color: "red"}}>{err}</h2>: 
                    
                    users.map(
                        (userObj)=>{
                            return (
                                <div key={userObj.id} className="card">
                                    <a href={userObj.html_url} target="_blank">
                                    <img alt="photo not shown properly" src={userObj.avatar_url} style={{width: "100px"}}/>
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        }
                    )
                }
                    
                </div>       
        );
    }
}