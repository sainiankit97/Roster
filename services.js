export const fetchDuties = async () => {
    const url = "https://rosterbuster.aero/wp-content/uploads/dummy-response.json";
    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .catch(error => console.log("errors", error));
}