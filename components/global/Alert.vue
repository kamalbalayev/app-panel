<script setup lang="ts">

const props = defineProps<{
    data?: any,
    callback?: any
}>()

const icon = computed(()=> {
    switch (props.data.type) {
        case 'error':
            return 'mdi-alert-circle-outline';

        case 'warning':
            return 'mdi-alert-outline';

        case 'success':
            return 'mdi-check-all';
    }
})

const color = computed(()=> {
    switch (props.data.type) {
        case 'error':
            return 'red';

        case 'warning':
            return 'deep-orange';

        case 'success':
            return 'green';
    }
})

const onSubmit = async ()=> {

    if(props.data.onSubmit){
        await props.data.onSubmit()
    }

    await props.data.resolve({status: true})

    close()
}

const onCancel = async ()=> {

    if(props.data.onCancel){
        await props.data.onCancel()
    }

    await props.data.resolve({status: false})

    close()
}

const emits = defineEmits(['close'])
const close = ()=> emits('close')

</script>

<template>
    <v-card>

        <v-card-text class="text-center py-6">

            <v-icon :icon="icon" :size="80" :color="color"/>

            <h2 v-text="data.title" class="my-2"/>

            <p v-text="data.message" class="text-body-2 grey--text text-pre-line"/>

        </v-card-text>

        <v-card-title class="d-flex justify-center elevation-0">

            <v-btn variant="text" color="grey" v-text="data.cancelBtnText ?? $t('Cancel')"
                   @click="onCancel()" v-if="data.existsButton"/>

            <v-btn variant="flat" color="primary" v-text="data.submitBtnText ?? $t('Ok')"
                   @click="onSubmit()"/>

        </v-card-title>

    </v-card>
</template>
