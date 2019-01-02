import React, {Component} from 'react'
import Header from '../components/Header';
import AddRoommateRequest from '../components/AddRoommateRequest';
import Footer from '../components/Footer';
 
class AddNewRequestPage extends Component{
    render(){
        return (
        <div>
            <Header/>
            <AddRoommateRequest/>
            <Footer/>
            </div>
            )

    }
}
export default AddNewRequestPage;
