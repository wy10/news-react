import React, { Component } from 'react';
import Header from './header';
import NewsContainer from './newsContainer';

export default class Home extends Component{

    render(){
        return(
            <div>
                <Header></Header>
                <NewsContainer></NewsContainer>
            </div>
        )
    }
}