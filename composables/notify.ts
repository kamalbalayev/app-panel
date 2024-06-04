export function useAlert() {

    const $alert = (options: any) => {
        return new Promise(resolve => {
            openDialog({
                element: 'Alert',
                data: {
                    ...options,
                    resolve,
                },
                options: {
                    width: 400,
                    persistent: true,
                }
            })
        })
    }

    return {
        $alert
    }
}
