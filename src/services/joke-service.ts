import api from "./api";
import {CancelTokenSource} from "axios";

export const getJokesBySearchTerm = async(searchTerm: string, cancelToken: CancelTokenSource) => {
    try{
        const res = await api.get("search",{
            cancelToken: cancelToken.token,
            params: {
                query: searchTerm
            }
        });
        return Promise.resolve(res);
    } catch (e) {
        return Promise.reject(e);
    }
}