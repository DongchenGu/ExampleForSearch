import React from "react";
import axios from 'axios';

export default class Search extends React.Component{

    search = ()=>{
        //获取用户的输入
        const {keywordElement:{value: keyword}}=  this;
        console.log(keyword);
        //发送网路请求
        axios.get(`http://api.github.com/search/users?q=${keyword}`).then(
            response => {
                this.props.saveUsers(response.data.items);
            },
            error => {console.log("失败了",error);}
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