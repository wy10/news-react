import React, { Component } from 'react';
import { Row, Col, Carousel,Tabs } from 'antd';
import NewsImg from'./newsImg';
import NewsBlock from './newsBlock';
import news from "./assets/news.jpg";
import news1 from "./assets/news1.jpg";
import news2 from "./assets/news2.jpg";

const TabPane = Tabs.TabPane;
export default class NewsContainer extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col xs={8} style={{marginRight:10}}>
                        <Carousel autoplay>
                            <div><img src={news} style={{height:300,width:500}}/></div>
                            <div><img src={news1} style={{height:300,width:500}}/></div>
                            <div><img src={news2} style={{height:300,width:500}}/></div>
                        </Carousel>
                        <NewsImg count={6} type="guoji"  title="国际头条" imgWidth={100} imgHeight={90}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={11}>
                        <Tabs class="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <NewsBlock type='top' count='22' width='100%' bordered='false'/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <NewsBlock type='guoji' count='22' width='100%' bordered='false'/>
                            </TabPane>
                        </Tabs>
\
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} style={{display:'flex',justifyContent:'center'}}>
                    <NewsImg count={16} type="guonei"  title="国内新闻" imgWidth={150} imgHeight={100}/>

                    </Col>
                    <Col xs={24} style={{display:'flex',justifyContent:'center'}}>
                        <NewsImg count={16} type="yule"  title="娱乐新闻" imgWidth={150} imgHeight={100}/>
                    </Col>
                </Row>
            </div>
        )
    }
}