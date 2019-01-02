import React, {Component} from 'react'

class RoommateRequest extends Component{
    constructor(props){
        super(props);
        this.state={
            roommateRequest:this.props.roommateRequest
        }
    }
    render(){
        return(
            <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-primary">{this.state.roommateRequest.city}</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href="/">{this.state.roommateRequest.location}</a>
                            </h3>
                            <div className="mb-1 text-muted">{this.state.roommateRequest.dateOfRequest}</div>
                            <p className="card-text mb-auto">{this.state.roommateRequest.description}</p>
                            <a class="btn btn-outline-primary" href={"tel:+" + this.state.roommateRequest.phone}>Call Now</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-lg-block" src="./thumbnail.jpg"/>
                    </div>
            </div>
        )
    }
}

export default RoommateRequest;
