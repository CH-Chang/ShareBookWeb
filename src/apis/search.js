import axios from "axios";

const searchRequest = axios.create({
    baseURL: "/api/web/search",
    withCredentials: true,
})

searchRequest.interceptors.request.use(
    (configs) => {
        if (localStorage.getItem("token")) {
            configs.headers["User-Authorization"] = localStorage.getItem("token");
        }
        return configs;
    },
    (err) => {
        return Promise.reject(err);
    }
)

// GET
export const apiGetSuggestion = () => searchRequest.get("/getSuggestion");
export const apiGetCondition = () => searchRequest.get("/getCondition");
export const apiSearch = (config) => searchRequest.get("/search", {params: config});