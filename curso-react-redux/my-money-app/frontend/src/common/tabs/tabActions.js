export const SELECTED_TAB = 'SELECTED_TAB';

export function selectTab(tabId) {
    console.lgo(tabId);
    return {
        type: SELECTED_TAB,
        payload: tabId
    };
}