import { CancelTokenSource } from "axios";
import api from "./api";

export const getAllCategories = async (cancelToken: CancelTokenSource) => {
    try{
        const res = await api.get("categories",{cancelToken: cancelToken.token});
        return Promise.resolve(res);
    } catch (e) {
        return Promise.reject(e);
    }
}