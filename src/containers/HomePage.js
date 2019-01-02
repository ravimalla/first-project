import React, {Component} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Banner from '../components/Banner'
import Search from '../components/Search'
import RoommateRequests from '../components/RoommateRequests'

class HomePage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Slider/>
                <Banner/>
                <RoommateRequests/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;