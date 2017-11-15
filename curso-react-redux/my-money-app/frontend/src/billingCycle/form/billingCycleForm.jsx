import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelAndInput from './../../common/form/labelAndInput';
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-default"
                        onClick={this.props.init}>Cancelar</button>
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