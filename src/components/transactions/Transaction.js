import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {getTransactions} from '../../actions/projectActions';
import {connect} from 'react-redux';

class Transaction extends Component {

    constructor(props){
        super(props)
        this.state = {
            totalBalance:0.0,
            transactions:[]
        }
    }

    componentDidMount(){
        this.props.getTransactions(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.transactions){
            let totalBal = 0;
            for(let i=0;i<nextProps.transactions.length;i++){
                if(nextProps.transactions[i].type===1)
                    totalBal+=nextProps.transactions[i].amount
                else if(nextProps.transactions[i].type===2)
                    totalBal-=nextProps.transactions[i].amount
            }
            this.setState({totalBalance:totalBal})
        }
        
    }

    render() {
        let id = this.props.match.params.id;
        console.log('aaaa',this.props.transactions);
        
        
        return (
            <div className="container">
                <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
                    Back
                </Link>
                <Link to={`/transaction/add/${id}`} className="btn btn-info btn-lg mb-3">
                    <i className="fas fa-plus-circle"> Record new Transaction</i>
                </Link>
                <br />
                <div className="card text-center">
                    <div className="card-header bg-primary text-white">
                        <h4>Transaction Balance (Total)</h4>
                        <h1>Tk. {this.state.totalBalance}</h1>
                    </div>
                </div>
                <hr />
                
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.transactions.map(
                            trans=>
                        <tr key = {trans.id} className="table-danger">
                            <td>{trans.transactionDate}</td>
                            <td>{trans.description}</td>
                            <td className="text-danger">{trans.amount}</td>
                            <td>
                                <Link className="text-info" to="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></Link>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>

                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    transactions:state.transaction.transactions  
})

export default connect(mapStateToProps, {getTransactions})(Transaction);
