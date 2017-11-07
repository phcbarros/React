import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import LabelAndInput from './../../common/form/labelAndInput';

export const BILLING_CYCLE_FORM = 'billingCycleForm';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} cols="12 4"
                        label="Nome" placeholder="Informe o nome" />
                    <Field name="month" component={LabelAndInput} cols="12 4" 
                        label="Mês" placeholder="Informe o mês" type="number" />
                    <Field name="year" component={LabelAndInput} cols="12 4"
                        label="Ano" placeholder="Informe o ano" type="number" />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

// Fazendo a ligação com o reducer do redux-form
export default reduxForm({ form: BILLING_CYCLE_FORM, destroyOnUnmount: false })(BillingCycleForm);