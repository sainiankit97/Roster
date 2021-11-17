export const Actions = {
    SET_DUTIES: "set-duties"
}

export const setDuties = (payload) => {
    return {
        type: Actions.SET_DUTIES,
        payload
    }
}