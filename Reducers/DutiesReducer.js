import { Actions } from "../Actions"
const initialState = { dutyList: {} };

const Duties = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_DUTIES:
            return {
                dutyList: action.payload
            }
        default:
            return state;
    }
}

export default Duties;