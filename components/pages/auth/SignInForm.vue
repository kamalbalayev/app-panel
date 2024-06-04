<script setup lang="ts">

import {useVuelidate} from "@vuelidate/core";
import {email, minLength, required} from "@vuelidate/validators";

const {signIn} = useAuth()
const localePath = useLocalePath()

const form = reactive({
    email: null,
    password: null,
    strategy: "local"
})

const $v = useVuelidate({
    email: {
        required,
        email,
    },
    password: {
        required,
        minLength: minLength(6),
    }
}, form)

const loading = ref(false)

const login = async (): Promise<void> => {

    const valid = await $v.value.$validate()
    if (!valid) return

    loading.value = true

    try {

        await signIn(form, {
            callbackUrl: localePath({name: 'index'})
        })

    } catch (error) {
        console.log(error)
    }

    loading.value = false
}
</script>

<template>
    <v-col cols="12" sm="7" md="7" xl="4" class="d-flex justify-center">
        <v-card :max-width="450" width="100%" flat border class="pa-6 pa-md-10">

            <h2 class="text-h4 font-weight-black text-primary text-center mb-6">LOGO</h2>

            <v-text-field v-model="form.email" prepend-inner-icon="mdi-account-outline"
                          :label="$t('Username')" placeholder="adam.smith@example.com"
                          :error-messages="errorMessages($v.email, $t('Username'))"/>

            <v-text-field v-model="form.password" type="password" prepend-inner-icon="mdi-lock-outline"
                          :label="$t('Password')" placeholder="******"
                          :error-messages="errorMessages($v.password, $t('Password'))"/>

            <v-btn color="primary" size="large" variant="flat" :loading block class="mt-1" @click="login()">
                {{ $t('Sign in') }}
            </v-btn>

            <v-btn size="large" variant="flat" block class="mt-2 mb-n8" :to="localePath({name: 'auth-sign-up'})">
                {{ $t('Sign up') }}
            </v-btn>

        </v-card>
    </v-col>
</template>