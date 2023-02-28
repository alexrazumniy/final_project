export const TOKEN_KEY = 'token';

class API {
    constructor() {
        this.baseUrl = 'https://byte-tasks.herokuapp.com/api';
        this.headers = {
            Authorization: null,
            'Content-Type': 'application/json',
        }
    }

    handleErrors({ ok, url, status }) {
        if (!ok) {
            throw new Error(`Response on ${url} failed with status ${status}`)
        }
    }

    async register(data) {
        const response = await fetch(`${this.baseUrl}/auth/register`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
        });

        this.handleErrors(response);

        const registeredUser = await response.json();

        return registeredUser
    }

    async login(data) {
        const response = await fetch(`${this.baseUrl}/auth/login`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
        });

        this.handleErrors(response);

        const { token } = await response.json();

        this.headers.Authorization = `Bearer ${token}`;
        localStorage.setItem(TOKEN_KEY, token);
    }

    async getSelf() {
        const response = await fetch(`${this.baseUrl}/auth/user/self`, {
            method: 'GET',
            headers: this.headers,
        });

        this.handleErrors(response);

        const user = await response.json();

        return user
    }

    isLoggedIn() {
        return Boolean(localStorage.getItem(TOKEN_KEY));
    }

    autoLogin() {
        const localToken = localStorage.getItem(TOKEN_KEY);
        this.headers.Authorization = `Bearer ${localToken}`;

        return this.getSelf()
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
    }
}

export const api = new API();
