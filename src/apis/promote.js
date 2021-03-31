import axios from "axios";

const promoteRequest = axios.create({
    baseURL: "/api/web/promote",
    withCredentials: true,
})

promoteRequest.interceptors.request.use(
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
export const apiGetCarousel = () => promoteRequest.get("/getCarousel");
export const apiGetSuggestion = () => promoteRequest.get("/getSuggestion");
export const apiGetHotRank = () => promoteRequest.get("/getHotRank");
export const apiGetOfficialSuggestion = () => promoteRequest.get("/getOfficialSuggestion");
export const apiGetShopbackSuggestion = () => promoteRequest.get("/getShopbackSuggestion");