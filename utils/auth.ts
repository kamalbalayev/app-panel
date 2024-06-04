export const auth: any = {
    origin: process.env.ORIGIN,
    baseURL: process.env.API_URL,
    provider: {
        type: 'local',
        token: {
            cookieName: 'auth:token',
            signInResponseTokenPointer: '/data/token',
            maxAgeInSeconds: 2592000
        },
        endpoints: {
            signIn: {path: 'User/Login', method: 'post'},
            signUp: {path: 'User/Register', method: 'post'},
            getSession: {path: 'User', method: 'get'},
            signOut: false
        },
        pages: {
            login: '/sign-in',
        }
    },
    globalAppMiddleware: {
        isEnabled: true
    }
}
