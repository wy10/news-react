import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { hashHistory } from 'react-router';
import { Card} from 'antd';
import { MyFetch } from './../utils';
import NewsDetails from './newsDetail';
import Item from 'antd/lib/list/Item';

class NewsBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            news:""
        };
    };

    componentWillMount(){

        MyFetch("/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count).then(res=>{
            this.setState({
                news:res
            })
        })


    };
    render(){

        const {news} = this.state;
        const newsList = news.length?news.map((newsItem,index)=>(<li key={index}>
            <Router>
            
                <div>
                    <Link to={"#/details/"+newsItem.uniquekey} onClick={()=>{hashHistory.push("/details/"+newsItem.uniquekey)}}>{newsItem.title}</Link>

                </div>
            </Router>

            </li>)):"没有加载到任何新闻";
        return(
            <div>
                <Card>
                    <ul>{newsList}</ul>
                </Card>
            </div>

        );
    };
}

export default NewsBlock
