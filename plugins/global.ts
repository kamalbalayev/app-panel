import {useStore} from "@/composables/global";

export default defineNuxtPlugin(nuxtApp => {

    const route: any = useRoute()
    const runtimeConfig = useRuntimeConfig()
    const baseURL = runtimeConfig.public.apiURL
    const {SET_STATE} = useStore()
    const {$i18n}: any = nuxtApp
    const {$alert}: any = useAlert()

    const authorization = useCookie('auth:token')

    const routeName = computed((): string => route.name.split('___')[0])

    const routeIs = (name: string) => computed((): boolean => routeName.value === name)

    const fetchData = async ({
                                 api,
                                 key,
                                 method,
                                 body,
                                 query = {},
                                 headers = {},
                                 callback,
                                 offline = false,
                                 alert = false
                             }: any) => {

        if (Array.isArray(body) && body?.some((item: any) => isFile(item) || isBlob(item))) {
            const formData = new FormData();
            body.forEach((file: any) => formData.append('files', file, file.name));
            body = formData;
        }

        const params: any = {

            key,
            baseURL,
            query,
            method,
            body,
            watch: false,

            headers: {
                authorization: authorization ? `Bearer ${authorization.value}` : undefined,
                'Content-Language': $i18n.locale.value,
                'Accept-Language': $i18n.locale.value,
                ...headers,
            },

            onResponse({request, response, options}: any) {
                if (key && (method === 'get' || !method)) {
                    const {_data} = response
                    SET_STATE({key, value: _data})
                }
            },
        }

        if (body) {

            params.method = method || (body._id ? 'patch' : 'post')

            if (['patch', 'put'].includes(params.method)) {
                api = `${api}/${body._id}`
            }

        }

        if(offline){
            params.getCachedData = (key: string) => {

                const data = nuxtApp.payload.data[params.key] || nuxtApp.static.data[params.key]
                if(!data) return

                const expirationDate = new Date(data.fetchData)
                expirationDate.setTime(expirationDate.getTime() + 259200000)
                const isExpired = expirationDate.getTime() < Date.now()
                if(isExpired) return;

                return data
            }
            params.transform = (input: any) => {
                return {
                    ...input,
                    fetchedAt: new Date()
                }
            }
        }

        const response = await useFetch(api, params);

        if (response.status.value === 'error') {

            const {errors, message: errorMessage} = response?.error?.value?.data

            const message = Object.entries(errors).map((error: any[], index: number) => {
                const value = error[1]
                return value.message ? `${index + 1}) ${value.message}` : errorMessage //$i18n.t(value.kind, {n: value.path})
            })?.join(',\n\n')

            process.client && await $alert({
                type: 'error',
                title: $i18n.t('Error'),
                message,
                existsButton: false,
            })

        } else {

            if (alert && process.client) {

                const {status} = await $alert({
                    type: 'success',
                    title: $i18n.t('Success'),
                    message: $i18n.t('Data saved successfully'),
                })

                status && callback && callback(response)

            } else {
                callback && callback(response)
            }

        }

        return response

    }

    const themeColorMode = useCookie('theme', {
        default: (): string => 'light',
        watch: true
    })

    return {
        provide: {
            routeIs,
            routeName,
            fetchData,
            themeColorMode,
        },
    };
});
