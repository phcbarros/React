export const TAB_SELECTED = 'TAB_SELECTED';
export const TAB_SHOWED = 'TAB_SHOWED';

export function selectTab(tabId) {
    return {
        type: TAB_SELECTED,
        payload: tabId
    };
}


export function showTabs(...tabs) {
    const tabsToShow = {};
    tabs.forEach(e => tabsToShow[e] = true);
    return {
        type: TAB_SHOWED,
        payload: tabsToShow
    };
}