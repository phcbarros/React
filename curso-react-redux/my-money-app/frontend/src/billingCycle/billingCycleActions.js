import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize as initializeForm } from 'redux-form';

import { BILLING_CYCLE_FORM } from './form/billingCycleForm';
import { BILLING_CYCLE_TABS } from './billingCycle';
import { selectTab, showTabs } from './../common/tabs/tabActions';

const URL = 'http://localhost:3003/api/billingCycles'
const INITIAL_VALUE = {};

export const BILLING_CYCLE_FETCHED = 'BILLING_CYCLE_FETCHED';

export function getList() {
    const request = axios.get(URL);
    return {
        type: BILLING_CYCLE_FETCHED,
        payload: request
    };
}

export function create(values) {
    return dispatch => {
        axios.post(URL, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação efetuado com sucesso!');
                // dispara uma action devido ao middleware thunk
                // dispara varias actions devido ao middleware multi
                return dispatch(init());
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            });
    };
}

export function showUpdate(billingCycle) {
    const { tabUpdate } = BILLING_CYCLE_TABS;
    return [
        selectTab(tabUpdate),
        showTabs(tabUpdate),
        initializeForm(BILLING_CYCLE_FORM, billingCycle)
    ];
}

export function init() {
    const { tabList, tabCreate } = BILLING_CYCLE_TABS;
    return [
        showTabs(tabList, tabCreate),
        selectTab(tabList),
        getList(),
        initializeForm(BILLING_CYCLE_FORM, INITIAL_VALUE)
    ];
}