export default defineNuxtRouteMiddleware(async (to) => {

    const nuxtApp: any = useNuxtApp()
    const {status}: any = useAuth()

    if (status.value !== 'authenticated') {
        return navigateTo(nuxtApp.$localePath({name: 'auth-sign-in'}));
    }
})
