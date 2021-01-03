import React, { Component } from 'react';
import WalletService from '../../services/WalletService';


class CreateWallet extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        name:"",
        accountNumber:"",
        description:"",
        priority:""
        
      };

      // This binding is necessary to make `this` work in the callback
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler=(event)=>{
        var pname = event.target.name;
        var pvalue = event.target.value;
        this.setState({[pname]:pvalue});
    }

    onSubmitHandler=(event)=>{
 
        const wallet = {
            name:this.state.name,
            accountNumber:this.state.accountNumber,
            description:this.state.description,
            priority:this.state.priority
        }

        WalletService.createWallet(wallet).then(res=>{
            console.log("aaaaaa")
            alert("Successfully created")
        }).catch((err)=>{
            alert("Error")
        })
        // a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh
        event.preventDefault();
    }
    
    
    render() {
        return (
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Wallet</h5>
                    <hr />
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <input name="name" type="text" onChange={this.onChangeHandler} className="form-control form-control-lg " placeholder="Account Name" />
                        </div>
                        <div className="form-group">
                            <input name="accountNumber" type="text" onChange={this.onChangeHandler} className="form-control form-control-lg" placeholder="Account No" />
                        </div>
                        <div className="form-group">
                            <textarea name="description" onChange={this.onChangeHandler} className="form-control form-control-lg" placeholder="Description"></textarea>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg" onChange={this.onChangeHandler} name="priority">
                                <option value={3}>Display Priority</option>
                                <option value={1}>High</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Low</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default CreateWallet;