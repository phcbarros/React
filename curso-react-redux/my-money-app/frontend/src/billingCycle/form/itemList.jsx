import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import Grid from '../../common/layout/grid';
import Input from '../../common/form/input';
import IconButton from '../../common/form/iconButton';
import If from '../../common/operator/if';
import { BILLING_CYCLE_FORM } from './billingCycleForm';

class ItemList extends Component {

    add(index, item = {}) {
        this.props.arrayInsert(BILLING_CYCLE_FORM, this.props.field, index, item);
    }

    remove(index) {
        if (this.props.list.length > 1)
            this.props.arrayRemove(BILLING_CYCLE_FORM, this.props.field, index);
    }

    renderRows() {
        const field = this.props.field;
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${field}[${index}].name`} component={Input}
                        placeholder="Informe o nome" readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field name={`${field}[${index}].value`} component={Input}
                        placeholder="Informe o valor" readOnly={this.props.readOnly} />
                </td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${field}[${index}].status`} component={Input}
                        placeholder="Informe o status" readOnly={this.props.readOnly} />
                    </td>
                </If>
                <If test={!this.props.readOnly}>
                    <td>
                        <IconButton style="success" icon="plus" onClick={() => this.add(index + 1)} type="button" />
                        <IconButton style="warning" icon="clone" onClick={() => this.add(index + 1, item)} type="button" />
                        <IconButton style="danger" icon="trash-o" onClick={() => this.remove(index)} type="button" />
                    </td>
                </If>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
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

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(ItemList);