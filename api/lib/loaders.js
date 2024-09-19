import apiRequest from "../../client/src/lib/apiRecquest";

export const singlePageLoader = async ({ request, params }) => {
    const res = await apiRequest("/posts/" + params.id);
    return res.data;
};