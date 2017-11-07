import axios from 'axios';
import BillingCycle from './billingCycle';

const BASE_URL = 'http://localhost:3003/api'

export const BILLING_CYCLE_FETCHED = 'BILLING_CYCLE_FETCHED';
export const BILLING_CYCLE_CREATED = 'BILLING_CYCLE_CREATED';

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: BILLING_CYCLE_FETCHED,
        payload: request
    };
}

export function create(values) {
    axios.post(`${BASE_URL}/billingCycles`);
    return {
        type: BILLING_CYCLE_CREATED,
        payload: request
    };
}