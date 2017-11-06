import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api'

export const BILLING_CYCLE_FETCHED = 'BILLING_CYCLE_FETCHED';

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: BILLING_CYCLE_FETCHED,
        payload: request
    };
}