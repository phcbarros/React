import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, arrayInsert } from 'redux-form';
import Grid from '../../common/layout/grid';
import Input from '../../common/form/input';
import IconButton from '../../common/form/iconButton';
import If from '../../common/operator/if';
import { BILLING_CYCLE_FORM } from '../form/billingCycleForm';

class CreditList extends Component {

    add(index, item = {}) {
        this.props.arrayInsert(BILLING_CYCLE_FORM, 'credits', index, item);
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input}
                    placeholder="Informe o nome" readOnly={this.props.readOnly}></Field></td>
                <td><Field name={`credits[${index}].value`} component={Input}
                    placeholder="Informe o valor" readOnly={this.props.readOnly}></Field></td>
                <If test={!this.props.readOnly}>
                    <td>
                        <IconButton style="success" icon="plus" onClick={() => this.add(index + 1)} type="button" />
                        <IconButton style="warning" icon="clone" onClick={() => this.add(index + 1, item)} type="button" />
                    </td>
                </If>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={!this.props.readOnly}>
                                    <th className="table-actions">Ações</th>
                                </If>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert }, dispatch);

export default connect(null, mapDispatchToProps)(CreditList);