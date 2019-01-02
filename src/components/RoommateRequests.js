import React, {Component} from 'react'
import RoommateRequest from '../components/RoommateRequest'
class RoommateRequests extends Component{
    constructor(props){
        super(props);
        console.log("props in roomate request" + props.keyword)
        this.state={
            roommateRequests:[],
            loading: false,
            keyword:props.keyword
        }

        this.getRoommateRequests=this.getRoommateRequests.bind(this)
    }

    componentWillReceiveProps(newProps){
        console.log("componentwillreceieprops:" + newProps.keyword)
        this.setState({
            keyword:newProps.keyword
        })
    }

    getRoommateRequests(){
        var apiUrl="/api/roommaterequests";
        if(this.state.keyword != null){
            apiUrl="/api/roommaterequests/search/" + this.state.keyword;
        }
        console.log(apiUrl);
        
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((roommateRequests)=>{
            //console.log(JSON.stringify(roommaterequests))
            this.setState({
                roommateRequests,
                loading:true
            })
        })
    }

    componentDidMount(){
        this.getRoommateRequests();
    }

    render(){
        if(!this.state.loading){
            return(<div className="row mb-2">
                        <p>Loading..</p>
                    </div>)
        }
        else 
        {
            return(
                <div className="container mb-2"> 
                    {
                        this.state.roommateRequests.map((roommateRequest)=>{
                            console.log(JSON.stringify(roommateRequest))
                            return <RoommateRequest key={roommateRequest._id} roommateRequest={roommateRequest}/>
                        })
                    }
                </div>
            )
        }
    }
}
export default RoommateRequests;