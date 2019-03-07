import React, { Component } from 'react';
import Header from './header';
import NewsContainer from './newsContainer';
import Footer from './footer';
export default class Home extends Component{

    render(){
        return(
            <div>
                <Header></Header>
                <NewsContainer></NewsContainer>
                <Footer></Footer>
            </div>
        )
    }
}