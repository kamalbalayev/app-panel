<script setup lang="ts">

defineProps<{ navMenu: any[] }>()
const open = ref([])

</script>

<template>
    <v-list v-model:opened="open" density="default" :border="0" nav :lines="false" class="tree-list">
        <template v-for="(item, i) in navMenu" :key="`tree-item-${i}`">

            <template v-if="item.children">
                <v-list-group :value="item._id" v-if="item.children?.length">

                    <template #activator="{ props }">
                        <v-list-item v-bind="props" :title="$t(item.name)">
                            <template #prepend>
                                <v-icon :icon="item.icon" :color="item.color || 'primary'" size="20"/>
                            </template>
                        </v-list-item>
                    </template>

                    <div v-for="(subItem, s) in item.children" :key="`tree-item-${i}-sub-${s}`"
                         class="tree-list-item mb-1 relative">
                        <v-list-item :to="localePath(subItem.path)" :title="$t(subItem.name)" class="flex-grow-1 mb-0"/>
                    </div>

                </v-list-group>
            </template>

            <v-list-item :to="localePath(item.path)" :title="$t(item.name)"
                         class="flex-grow-1 mb-0 pr-6" color="primary" v-else>
                <template #prepend>
                    <v-icon :icon="item.icon" :color="item.color || 'primary'" size="20"/>
                </template>
            </v-list-item>

        </template>
    </v-list>
</template>

<style lang="scss">
.tree-list {

    .v-list-item {
        &__prepend {
            > .v-icon {
                opacity: 1 !important;
            }
        }
    }

    .v-list-group {
        &__items {

            overflow: hidden;

            .tree-list-item {
                &::before {
                    content: "";
                    position: absolute;
                    width: 13px;
                    height: calc(50% + 28px);
                    left: 1rem;
                    bottom: calc(50% - 1px);
                    border-left: 2px dotted #888888;
                    border-bottom: 2px dotted #888888;
                    border-bottom-left-radius: 8px;
                    z-index: 10;
                    opacity: 1;
                }
            }

            .v-list-item {
                padding-inline-start: 42px !important;
            }
        }
    }
}
</style>
