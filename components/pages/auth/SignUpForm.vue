<script setup lang="ts">

import {useVuelidate} from "@vuelidate/core";
import {required, email, minLength, maxLength, sameAs} from "@vuelidate/validators";

const localePath = useLocalePath()
const {signUp} = useAuth()

const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const $v = useVuelidate({
    name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(15),
    },
    email: {
        required,
        email,
    },
    password: {
        required,
        minLength: minLength(6),
    },
    password_confirmation: {
        required,
        minLength: minLength(6),
        sameAs: sameAs(computed(() => form.password))
    }
}, form)

const loading = ref(false)

const register = async (): Promise<void> => {

    const valid = await $v.value.$validate()
    if (!valid) return

    loading.value = true

    await signUp(form, {
        callbackUrl: localePath({name: 'index'}),
        external: true,
    })

    loading.value = false
}
</script>

<template>
    <v-col cols="12" sm="7" md="7" xl="4" class="d-flex justify-center">
        <v-card :max-width="450" width="100%" flat border class="pa-6 pa-md-10">

            <h2 class="text-h4 font-weight-black text-primary text-center mb-6">LOGO</h2>

            <v-text-field v-model="form.name" prepend-inner-icon="mdi-account-outline"
                          :label="$t('Username')" placeholder="Adam Smith"
                          :error-messages="errorMessages($v.email, $t('Username'))"/>

            <v-text-field v-model="form.email" prepend-inner-icon="mdi-email-outline"
                          :label="$t('Email')" placeholder="adam.smith@example.com" type="email"
                          :error-messages="errorMessages($v.email, $t('Email'))"/>

            <v-text-field v-model="form.password" prepend-inner-icon="mdi-lock-outline"
                          :label="$t('Password')" placeholder="******" type="password"
                          :error-messages="errorMessages($v.password, $t('Password'))"/>

            <v-text-field v-model="form.password_confirmation" prepend-inner-icon="mdi-lock-outline"
                          :label="$t('Password confirmation')" placeholder="******" type="password"
                          :error-messages="errorMessages($v.password_confirmation, $t('Password confirmation'))"/>

            <v-btn color="primary" size="large" variant="flat" :loading block class="mt-1" @click="register()">
                {{ $t('Sign up') }}
            </v-btn>

            <v-btn size="large" variant="flat" block class="mt-2 mb-n8" :to="localePath({name: 'auth-sign-in'})">
                {{ $t('Sign in') }}
            </v-btn>

        </v-card>
    </v-col>
</template>