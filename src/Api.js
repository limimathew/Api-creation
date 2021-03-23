import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
class Api extends Component{
    constructor(Props){
        super(Props);
        this.state={
            posts:[],
        }
    }
    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json").then(response=>{this.setState({
            posts:response.data
        })})
    }
    render(){
       
        return(
            <div>
                <table>
                    <th>ID</th>
                    <th>EMAIL</th>
                     <th>FIRST NAME</th>
                     <th>LAST NAME</th>
                     <th>COMPANY</th>
                     <th>DATE/TIME</th>
                     <th>COUNTRY</th>
                    <tbody>
                        {
                            this.state.posts.map((item,k)=>
                            {
                                return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.first}</td>
                                        <td>{item.last}</td>
                                        <td>{item.company}</td>
                                        <td>{item.created_at}</td>
                                        <td>{item.country}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            
                </table>
            </div>
        );
        
    }
}
export default Api;