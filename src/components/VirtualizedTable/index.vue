<template>
    <div>
        <el-table-v2
            :columns="props.columns"
            :data="props.data"
            :width="1000"
            :height="800"
            fixed
        />
        {{ props.data }}
    </div>
</template>

<script langh="jsx" setup>
import { defineProps } from 'vue'
const props = defineProps(['data','columns'])
</script>

<style lang="sass" scoped>

</style>