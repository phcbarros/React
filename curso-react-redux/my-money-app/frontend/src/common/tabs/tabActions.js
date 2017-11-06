export const SELECTED_TAB = 'SELECTED_TAB';
export const SHOWED_TAB = 'SHOWED_TAB';

export function selectTab(tabId) {
    return {
        type: SELECTED_TAB,
        payload: tabId
    };
}


export function showTabs(...tabs) {
    const tabsToShow = {};
    tabs.forEach(e => tabsToShow[e] = true);
    return {
        type: SHOWED_TAB,
        payload: tabsToShow
    };
}