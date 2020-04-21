<template>
    <div>
        <app-stock 
            v-for='stock in stocks' 
            :key='stock.id'
            :stock='stock'
        />
    </div>
</template>

<script>
    import Stock from './Stock';
    export default {
        components:{
            appStock: Stock
        },
        data(){
            return{
                stocks:[
                    {
                        id: 1,
                        name: 'BMW',
                        PRICE: 110
                    },
                    {
                        id: 2,
                        name: 'Apple',
                        PRICE: 200
                    },
                    {
                        id: 3,
                        name: 'Google',
                        PRICE: 250
                    },
                    {
                        id: 4,
                        name: 'Twitter',
                        PRICE: 50
                    }
                ]
            }
        }
    }
</script>

<style>

</style>