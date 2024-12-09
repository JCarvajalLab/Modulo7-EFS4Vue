import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
    state() {
        return {
            pokemon: null
        }
    },
    mutations: {
        colocarNombre(state, nombre) {
            state.pokemon = nombre
        }
    },
    actions: {
        obtenerPokemon({ commit }, nombreOId) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${nombreOId}`)
                .then(response => {
                    commit('colocarNombre', response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }
})

export default store