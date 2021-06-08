/**
 * @Type: Service
 * Get info for user and token session from storage
 */
import axios from "@/core/plugins/http";

export const authService = {
    // api user
    register(data) {
        return axios.post(`user/`, data);
    },

    login(username, password) {
        return axios.post(`login/`, {username, password});
    },

    // token management
    getToken() { // get token for authenticated user
        const token = localStorage.getItem("token");
        if (token) return token;
        return null;
    },

    setToken(token) {
        return localStorage.setItem("token", token);
    },

    setUser(user) {
        if (!user) return;
        localStorage.setItem("user", JSON.stringify(user));
    },

    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    },

    clearSession() {
        localStorage.clear();
    },
    isAuthenticated() {
        return (this.getUser() && this.getToken());
    }
};
