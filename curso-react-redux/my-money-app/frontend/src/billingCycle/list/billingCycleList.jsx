import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate } from '../billingCycleActions';

class BilligCycleList extends Component {
    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map(billingCycle => (
            <tr key={billingCycle._id}>
                <td>{billingCycle.name}</td>
                <td>{billingCycle.month}</td>
                <td>{billingCycle.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(billingCycle)}>Alterar</button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispacth => bindActionCreators({ getList, showUpdate }, dispacth);

export default connect(mapStateToProps, mapDispatchToProps)(BilligCycleList);