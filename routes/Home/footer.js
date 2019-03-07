import React from 'react';
import { Row, Col } from 'antd';
import Comments from './comments.js'
export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <p class="footer">&copy;&nbsp;2018 ReactNews.all Right reserved.</p>

                    </Col>
                    <div><Comments uniquekey="1222"/></div>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    };
}
