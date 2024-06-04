import {defineStore} from 'pinia'

interface Param {
    key: string,
    value: any
}

export const useStore = defineStore('app', () => {

    const state: any = reactive({
        settingsMenu: [
            {
                name: 'Account',
                icon: 'mdi-account-circle-outline',
                path: {
                    name: 'settings-account'
                }
            },
            {
                name: 'Users',
                icon: 'mdi-account-group-outline',
                path: {
                    name: 'settings-users'
                }
            },
            {
                name: 'Roles',
                icon: 'mdi-shield-account-outline',
                path: {
                    name: 'settings-roles'
                }
            },
        ]
    })

    const GET_STATE = (key: string) => state[key]

    const SET_STATE = (param: Param) => state[param.key] = param.value

    return {
        state,
        GET_STATE,
        SET_STATE,
    }

})
