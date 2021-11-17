import { setDuties } from "./Actions";
import { fetchDuties } from "./services";
import { formatDuties } from "./utils";

export const fetchDutiesFromServer = () => async (dispatch) => {
    const data = await fetchDuties();
    const formattedDuties = formatDuties(data);    //function to add unique id to duties and to group them by date
    dispatch(setDuties(formattedDuties));
    if(data){
        return true
    }
    return false
}