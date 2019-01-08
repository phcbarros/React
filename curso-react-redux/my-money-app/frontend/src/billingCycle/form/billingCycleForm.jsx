import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelAndInput from './../../common/form/labelAndInput';
import Button from '../../common/form/button';
import Summary from './summary';
import ItemList from './itemList';
import { init } from './../billingCycleActions';

export const BILLING_CYCLE_FORM = 'billingCycleForm';
const DEBTS = 'debts';
const CREDITS = 'credits'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v;
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }
    
    render() {
        const { handleSubmit, readOnly, submitLabel, submitClass, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts} = this.calculateSummary();
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} cols="12 4"
                        label="Nome" placeholder="Informe o nome" readOnly={readOnly} />
                    <Field name="month" component={LabelAndInput} cols="12 4"
                        label="Mês" placeholder="Informe o mês" type="number" readOnly={readOnly} />
                    <Field name="year" component={LabelAndInput} cols="12 4"
                        label="Ano" placeholder="Informe o ano" type="number" readOnly={readOnly} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        legend="Creditos" field={CREDITS} />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        legend="Débitos" field={DEBTS} showStatus={true} />
                </div>
                <div className="box-footer">
                    <Button type="submit" style={submitClass} label={submitLabel} />
                    <Button type="button" style="default" label="Cancelar"
                        onClick={this.props.init} />
                </div>
            </form>
        )
    }
}

// Fazendo a ligação (decorando) dos campos do formulário com o reducer do redux-form
BillingCycleForm = reduxForm({ form: BILLING_CYCLE_FORM, destroyOnUnmount: false, })(BillingCycleForm);

const selector = formValueSelector(BILLING_CYCLE_FORM); //função usada para recuperar os valores do formulário
// mapeando o estado para as props
const mapStateToProps = state => (
    {
        credits: selector(state, CREDITS),
        debts: selector(state, DEBTS)
    });

// Fazendo a ligação (decorando) com as actions
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);