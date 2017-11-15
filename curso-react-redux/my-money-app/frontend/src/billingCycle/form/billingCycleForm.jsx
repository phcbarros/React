import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelAndInput from './../../common/form/labelAndInput';
import Button from '../../common/form/button';
import { init } from './../billingCycleActions';

export const BILLING_CYCLE_FORM = 'billingCycleForm';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} cols="12 4"
                        label="Nome" placeholder="Informe o nome" readOnly={readOnly}/>
                    <Field name="month" component={LabelAndInput} cols="12 4"
                        label="Mês" placeholder="Informe o mês" type="number" readOnly={readOnly} />
                    <Field name="year" component={LabelAndInput} cols="12 4"
                        label="Ano" placeholder="Informe o ano" type="number" readOnly={readOnly} />
                </div>
                <div className="box-footer">
                    <Button type="submit" style="primary" label="Cadastrar"/>
                    <Button type="button" style="default" label="Cancelar"
                        onClick={this.props.init} />
                </div>
            </form>
        )
    }
}

// Fazendo a ligação (decorando) com o reducer do redux-form
BillingCycleForm = reduxForm({ form: BILLING_CYCLE_FORM, destroyOnUnmount: false, })(BillingCycleForm);

// Fazendo a ligação (decorando) com as actions
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycleForm);