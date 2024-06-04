<script setup lang="ts">

const {data: user, signOut}: any = useAuth()
const {state}: any = useStore()

const localePath = useLocalePath()

const logOut = () => {
    signOut({
        callbackUrl: localePath({name: 'auth-sign-in'}),
        external: true
    })
}
</script>

<template>
    <v-menu open-on-hover location="right">

        <template #activator="{ props }">
            <v-btn variant="text" color="primary" :size="44" v-bind="props"
                   class="overflow-hidden pa-1 ma-2">

                <v-icon icon="mdi-account-outline" size="24"/>

            </v-btn>
        </template>

        <v-card width="300" elevation="16" rounded="lg" border class="mb-5 mb-lg-0 ml-lg-5" v-if="user">

            <div class="text-center px-6 pt-6 pb-4">

                <v-avatar size="80" class="mb-4" color="blue-lighten-5">
                    <v-icon icon="mdi-account-outline" size="40" color="primary"/>
                </v-avatar>

                <h3 v-text="user.data.name" class="font-weight-black text-body-2 d-block mb-1"/>

                <span v-text="user.data.email" class="text-caption gray--text d-block"/>

            </div>

            <v-divider/>

            <v-list :lines="false" nav>

                <template v-for="(menu, i) in state.settingsMenu" :key="`menu-${i}`">
                    <v-list-item color="primary" :to="localePath({name: menu.path.name})">

                        <template #prepend>
                            <v-icon :icon="menu.icon" size="small"/>
                        </template>

                        <v-list-item-title v-text="$t(menu.name)"/>

                    </v-list-item>
                </template>

            </v-list>

            <v-divider/>

            <v-list :lines="false" nav>
                <v-list-item color="primary" @click="logOut">

                    <template #prepend>
                        <v-icon icon="mdi-logout" size="small"/>
                    </template>

                    <v-list-item-title v-text="$t('Log out')"/>

                </v-list-item>
            </v-list>

        </v-card>

    </v-menu>
</template>

