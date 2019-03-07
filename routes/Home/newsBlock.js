import React from 'react';
import { Card} from 'antd';

class NewsBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            news:""
        };
    };

    componentWillMount(){
        var myFetchOptions = {
            method:'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,myFetchOptions).then(response=>response.json()).then(json=>{this.setState({news:json})})


    };
    render(){

        const {news} = this.state;
        const newsList = news.length?
                         news.map((newsItem,index)=>(
                         <li style={{listStyle:'none'}} key={index}>{newsItem.title}
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
