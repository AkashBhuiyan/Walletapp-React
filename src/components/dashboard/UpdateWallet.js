import React, { Component } from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {getWalletById,updateWallet} from '../../actions/projectActions'
import {Link} from 'react-router-dom';

class UpdateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:'',
            name: '',
            accountNumber: '',
            description: '',
            priority: '',
            currentBalance:'',
            errors:''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
        if(nextProps.wallet){
            this.setState({
                id:nextProps.wallet.id,
                name: nextProps.wallet.name,
                accountNumber: nextProps.wallet.accountNumber,
                description: nextProps.wallet.description,
                currentBalance:nextProps.wallet.currentBalance,
                priority: nextProps.wallet.priority,
            })
        }
    }

    componentDidMount(){
        this.props.getWalletById(this.props.match.params.id)
    }

    onChangeHandler = (event) => {
        var pname = event.target.name;
        var pvalue = event.target.value;
        this.setState({ [pname]: pvalue });
    }

    onSubmitHandler = (event) => {
        const updateWallet = {
            id:this.state.id,
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            currentBalance:this.state.currentBalance,
            priority: this.state.priority
        }
        this.props.updateWallet(updateWallet,this.props.history,this.state.id)
        event.preventDefault()
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Wallet</h5>
                            <Link to="/dashboard" className="btn btn-default btn-lg mb-3">Back</Link>
                            <hr />
                            <form onSubmit={(event)=>this.onSubmitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" name="name" value={this.state.name} onChange={this.onChangeHandler} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.name})} placeholder="Account Name" />
                                    <p className="text-danger">{this.state.errors.name}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="accountNumber" value={this.state.accountNumber} onChange={this.onChangeHandler} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.accountNumber})} placeholder="Account No" />
                                    <p className="text-danger">{this.state.errors.accountNumber}</p>
                                </div>
                                <div className="form-group">
                                    <textarea name="description" value={this.state.description} onChange={this.onChangeHandler} className={classnames("form-control form-control-lg",{"is-invalid":this.state.errors.description})} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>
                                <div className="form-group">
                                    <select name="priority" className="form-control form-control-lg" value={this.state.priority} onChange={this.onChangeHandler}>
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    errors:state.errors,
    wallet:state.wallet.wallet
})

export default connect(mapStateToProps,{getWalletById,updateWallet})(UpdateWallet)