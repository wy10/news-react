import React from 'react';
import {Row,Col} from 'antd';
import { MyFetch } from './../utils';

class NewsDetails extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem:""
        };
    };
    componentDidMount(){
      
        MyFetch("/Handler.ashx?action=getnewsitem&uniquekey="+window.location.href.split("/")[5]).then(res=>{
            this.setState({newsItem:res.pagecontent});
        })
          
    };
    createMark(){
        return {__html:this.state.newsItem};
    };
    render(){
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMark()}></div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default NewsDetails