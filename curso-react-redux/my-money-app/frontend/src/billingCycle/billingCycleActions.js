import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';

import { BILLING_CYCLE_FORM } from './form/billingCycleForm';
import { BILLING_CYCLE_TABS } from './billingCycle';
import { selectTab, showTabs } from './../common/tabs/tabActions';

const URL = 'http://localhost:3003/api/billingCycles'

export const BILLING_CYCLE_FETCHED = 'BILLING_CYCLE_FETCHED';

export function getList() {
    const request = axios.get(URL);
    return {
        type: BILLING_CYCLE_FETCHED,
        payload: request
    };
}

export function create(values) {
    const { tabList, tabCreate } = BILLING_CYCLE_TABS;
    return dispatch => {
        axios.post(URL, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação efetuado com sucesso!');
                // dispara uma action devido ao middleware thunk
                // dispara varias actions devido ao middleware multi
                return dispatch([
                    resetForm(BILLING_CYCLE_FORM),
                    getList(),
                    selectTab(tabList),
                    showTabs(tabList, tabCreate)
                ]);
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            });
    };
}