import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

import {
    findIndex
} from 'lodash-es'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        beers: [],
        qty: 0,
        count: 0,
        cartTotal: 0
    },
    mutations: {
        addToCart(state, beer) {

            let index = findIndex(state.beers, (o) => o.id == beer.id)

            if (index === -1) {
                state.beers.push({
                    id: beer.id,
                    name: beer.name,
                    price: 2.5,
                    quantity: 1,
                    image_url: beer.image_url
                })
            } else {
                state.beers[index].quantity++;
            }

        },

        removeToCart(state, beer) {

            let index = findIndex(state.beers, (o) => o.id == beer.id)

            if (index !== -1) {
                state.beers[index].quantity--;
            }
            if (!state.beers[index].quantity) {
                state.beers.splice(index, 1);
            }
        },
        onSearch() {
            alert("oi");
        }
    },


    actions: {



    }
})