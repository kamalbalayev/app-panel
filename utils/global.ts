export const openDialog = (dialog: any): void => {

    const {state, SET_STATE} = useStore()

    if (typeof state.dialogs === 'undefined') {
        SET_STATE({key: 'dialogs', value: []})
    }

    SET_STATE({key: 'dialogs', value: [...state.dialogs, dialog]})

}

export function errorMessages(params: any, name: string) {
    const { $i18n }: any = useNuxtApp()

    const errors = computed(() =>
        (params?.$errors || params).map((error: any) => {
            const { min, max } = error.$params
            return $i18n.t(`${error.$validator}Field`, { n: min ?? max ?? name })
        }),
    )

    return errors.value
}

export const isDark = () => {
    const theme = useTheme()
    const dark = computed(() => theme.global.current.value.dark)
    return dark.value
}

export const isFile = (input: any) => 'File' in window && input instanceof File

export const isBlob = (input: any) => 'Blob' in window && input instanceof Blob