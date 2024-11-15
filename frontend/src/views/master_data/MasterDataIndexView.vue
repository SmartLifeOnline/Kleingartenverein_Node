/* eslint-disable */
<template>
    <div>
        <H1>Stammdaten</H1>
        <MasterDataList :master_data_list="[
            {name:'Gärten',url:'/gaerten'},
            {name:'Kunden',url:'/kunden'},
        ]"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'
import MasterDataList from '../../components/master_data/MasterDataList.vue'

export default defineComponent({
    name: 'MasterDataIndex',
    components: {
        MasterDataList,
    },
    data() {
      return {
        store: null as any
      }
    },
    setup() {
        
    },
    mounted() {
        this.store = useStore();
        this.store.dispatch('fetchData');
        console.log(this.store.getters.getData);
    },
})
</script>
