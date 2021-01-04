import React, { Component } from 'react';
import {createWallet} from '../../actions/projectActions';
import {connect} from 'react-redux';
import classnames from 'classnames';


class CreateWallet extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        name:"",
        accountNumber:"",
        description:"",
        priority:"",
        errors:""
        
      };

      // This binding is necessary to make `this` work in the callback
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
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

        this.props.createWallet(wallet, this.props.history);
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
                            <input name="name" type="text" onChange={this.onChangeHandler} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Account Name" />
                            <p className="text-danger">{this.state.errors.name}</p>
                        </div>
                        <div className="form-group">
                            <input name="accountNumber" type="text" onChange={this.onChangeHandler} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.accountNumber})} placeholder="Account No" />
                            <p className="text-danger">{this.state.errors.accountNumber}</p>
                        </div>
                        <div className="form-group">
                            <textarea name="description" onChange={this.onChangeHandler} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.description})} placeholder="Description"></textarea>
                            <p className="text-danger">{this.state.errors.description}</p>
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

const mapStateToProps = (state) =>({
    errors:state.errors
});

/*Connect method to the redux store*/
export default connect(mapStateToProps, {createWallet})(CreateWallet);