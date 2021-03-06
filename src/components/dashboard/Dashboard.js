import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DashboardItem from './DashboardItem';
import {connect} from 'react-redux';
import {getWallets} from '../../actions/projectActions';

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            totalBalance:0.0
        }
    }
    
    componentDidMount(){
        this.props.getWallets();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.wallets){
            let totalBal = 0;
            for(let i=0;i<nextProps.wallets.length;i++){
                totalBal+=nextProps.wallets[i].currentBalance
            }
            this.setState({totalBalance:totalBal})
        }
        
    }
    
    render() {
        const wallets = this.props.wallets;
        const walletComponent = wallets.map(wallet=>(<DashboardItem key={wallet.id} wallet={wallet}/>))
        
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">My Wallets</h1>
                            <br />
                            <div className="btn-group">
                                <Link className="btn btn-info btn-lg" to="/createwallet">Create Wallet</Link>
                            </div>
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-primary text-white">
                                    <h4>Balance (Total)</h4>
                                    <h1>Tk. {this.state.totalBalance}</h1>
                                </div>
                            </div>
                            <hr />
                            {walletComponent}

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

/*get data from action*/
const mapStateToProps = (state) => ({
    wallets:state.wallet.wallets  
})


export default connect(mapStateToProps, {getWallets})(Dashboard);