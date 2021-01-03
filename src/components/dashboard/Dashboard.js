import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DashboardItem from './DashboardItem';


class Dashboard extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">My Wallets</h1>
                            <br />
                            <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create new
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/createwallet">Wallet</Link>
                                    <button disabled className="dropdown-item">Transaction</button>
                                </div>
                            </div>
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-primary text-white">
                                    <h4>Balance (Total)</h4>
                                    <h1>Tk. 27000</h1>
                                </div>
                            </div>
                            <hr />
                            <DashboardItem></DashboardItem>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;