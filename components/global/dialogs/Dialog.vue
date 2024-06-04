<script setup lang="ts">

const props = defineProps<{
    dialog: object,
    index: number,
    length: number,
}>()

const {smAndDown} = useDisplay()
const {state} = useStore()
let status = ref(true)

const currentDialog = computed(() => props.dialog)
const options = computed(() => currentDialog?.value?.options)

const position = ref('center')

const windowComponent = computed(() => position.value === 'right' && !smAndDown.value ? 'VNavigationDrawer' : 'VDialog')

const width = computed(() => smAndDown.value ? '100%' : position.value !== 'center' ? 500 : options.value.width)

const closeDialog = () => {
    status.value = false
    setTimeout(() => state.dialogs.splice(props.index, 1), 300)
}

</script>

<template>
    <Component :is="windowComponent" v-model="status" close-on-back retain-focus
               v-bind="options" transition="dialog-bottom-transition"
               :width="width" location="right" ref="activeDialog"
               :content-class="{'right-0 left-auto': position === 'right'}"
               :style="`z-index: ${options.zIndex}`"
               @update:modelValue="closeDialog">

        <Component :is="dialog.element" :key="`dialog-${index}-${position}`"
                   :data="dialog.data" :options="options" rounded="lg"
                   @position="position = $event" @close="closeDialog"/>

    </Component>
</template>
