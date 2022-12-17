import axios from "axios";
import api from "./api";

export const setAuthHeader = (token) => {
    api.defaults.headers.common["authorization"] = token;
};

export const clearAuthHeader = () => {
    delete api.defaults.headers.common["authorization"];
};