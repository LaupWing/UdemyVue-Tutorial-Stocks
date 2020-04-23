import Vue from 'vue';

export const loadData = ({commit})=>{
    Vue.http.get('data.json')
        .then(res=>res.json())
        .then(data=>{
            if(data){
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortofolio = data.stockPortofolio;

                const portofolio ={
                    funds,
                    stockPortofolio
                };
                commit('SET_STOCKS', stocks);
                commit('SET_PORTOFOLIO', portofolio);
            }
        });
};