import React, { Component } from 'react';
import { Row, Col,Card } from 'antd';
import { MyFetch } from './../utils';

export default class NewsImg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
        }
    }

    componentDidMount() {
        MyFetch(`/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`).then(res => {
            this.setState({
                newsList: res || []
            })
        })
    }

    render() {
        return (
            <Card title={this.props.title}>
                {
                    this.state.newsList.length > 0 ? this.state.newsList.map((item,index) => {
                        return (
                            <img 
                                src={item.thumbnail_pic_s} 
                                key={index} 
                                style={{
                                    width:this.props.imgWidth,
                                    height:this.props.imgHeight,
                                    marginRight:10,
                                    marginBottom:10,
                                    border:'2px solid #ddd'
                                }}></img>
                        )
                    }) : '暂无'
                }
            </Card>
        )

    }
}