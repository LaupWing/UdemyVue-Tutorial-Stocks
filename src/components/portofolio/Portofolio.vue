<template>
    <div>
        <app-stock 
            v-for="stock in stocks" 
            :key="stock.id" 
            :stock="stock"
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock';

export default {
    components:{
        appStock: Stock
    },
    computed:{
        ...mapGetters({
            stocks: 'stockPortofolio'
        })
    }
}
</script>

<style>

</style>