export const actions = ({
    DESCRIPTION_CHANGED: 'DESCRIPTION_CHANGED'
})

export const changeDescription = event => ({
    type: actions.DESCRIPTION_CHANGED,
    payload: event.target.value
});