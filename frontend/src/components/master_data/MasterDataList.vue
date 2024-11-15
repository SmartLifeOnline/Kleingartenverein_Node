/* eslint-disable */
<template>
    <div>
        <ul>
            <li v-for="master_data in master_data_list" :key="master_data.name">
                <router-link :to="master_data.url">{{ master_data.name }}</router-link>
            </li>
        </ul>
        <h1>Hallo</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface MasterData {
    name: string,
    url: string
}

export default defineComponent({
    name: 'MasterDataList',
    props: {
        master_data_list: {
            type: Array as PropType<MasterData[]>,
            required: true,
        },
    },
    setup() {
        
    },
})
</script>
