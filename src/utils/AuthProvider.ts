// frontend/src/utils/authProvider.ts

interface AuthParams {
    username: string;
    password: string;
}

interface AuthProviderType {
    login: (params: AuthParams) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
    checkError: (error: { status: number }) => Promise<void>;
    getIdentity: () => Promise<{ id: string; fullName: string }>;
    getPermissions: () => Promise<string>;
}

const authProvider: AuthProviderType = {
    login: ({ username, password }) => {
        if (username !== 'john' || password !== '123') {
            return Promise.reject(new Error('Invalid credentials'));
        }
        localStorage.setItem('username', username);
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(new Error('Not authenticated')),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject(new Error('Unauthorized'));
        }
        // 他のエラーコード（404、500など）は認証エラーとして扱わない
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'John Doe',
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;
