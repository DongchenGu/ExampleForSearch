import React from "react";
import axios from 'axios';

export default class Search extends React.Component{

    search = ()=>{
        //获取用户的输入
        const {keywordElement:{value: keyword}}=  this;
        console.log(keyword);
        //发送请求前通知APP更新状态
        this.props.updateAppState({isFirst:false,isLoading: true});
        //发送网路请求
        axios.get(`http://api.github.com/search/users?q=${keyword}`).then(
            response => {
                //请求成功后通知app更新状态
                this.props.updateAppState({users:response.data.items,isLoading:false});
            },
            error => {
                //请求失败后通知APP更新状态
                this.props.updateAppState({err:error.message,isLoading:false}); }
        )

    }

    render(){
        return(
               <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c=> this.keywordElement = c } type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
        );
    }
}