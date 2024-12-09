<template>
<div class="container">
    <h1>Pokémon Search</h1>
    <div class="pokemonSearch">
        <input v-model="searchPokemon" type="text" placeholder="Buscar Pokémon" />
        <button @click="obtenerPokemonNombre">Buscar</button>
    </div>
    <PokemonDetail v-if="pokemon" :pokemon="pokemon" />
</div>
</template>

<script>

import PokemonDetail from './components/PokemonDetail.vue';
import {computed, ref, onMounted } from 'vue'; 
import {useStore} from 'vuex';

export default {
    name: 'App',
    components: {
        PokemonDetail
    },
    setup() {
        const store = useStore();
        const pokemon = computed(() => store.state.pokemon);
        const searchPokemon = ref('');

        const obtenerPokemonNombre = async () => {
            await store.dispatch('obtenerPokemon', searchPokemon.value);
        };

        onMounted(async () => { // Agregado para mostrar a Pikachu en la página principal
            await store.dispatch('obtenerPokemon', 'pikachu');
        });

        return {
            pokemon,
            searchPokemon,
            obtenerPokemonNombre
        };
    }
}
</script>

<style>
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 800px;
    /* Aumentar el ancho máximo para acomodar los elementos */
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    /* Usar flexbox para alinear los elementos */
    flex-direction: column;
    /* Colocar los elementos en columna */
    align-items: center;
    /* Centrar los elementos horizontalmente */
}

h1 {
    color: #333;
    margin-bottom: 20px;
    /* Espacio debajo del título */
}

.pokemonSearch {
    display: flex;
    justify-content: center;
    /* Centra los elementos en línea */
    margin-bottom: 20px;
    /* Espacio debajo de la barra de búsqueda */
}

.pokemonSearch input {
    padding: 8px;
    /* Reducir el padding */
    border: 2px solid #28a745;
    /* Borde verde */
    border-radius: 5px;
    font-size: 0.9em;
    /* Reducir el tamaño de la fuente */
    width: 60%;
    /* Ancho del input */
    margin-right: 10px;
    /* Espacio entre el input y el botón */
    transition: border-color 0.3s;
    /* Transición suave para el borde */
}

.pokemonSearch input:focus {
    border-color: #218838;
    /* Color del borde al enfocar */
    outline: none;
    /* Elimina el contorno por defecto */
}

.pokemonSearch button {
    padding: 8px 15px;
    /* Reducir el padding */
    background-color: #28a745;
    /* Color de fondo verde */
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 0.9em;
    /* Reducir el tamaño de la fuente */
    cursor: pointer;
    transition: background-color 0.3s;
    /* Transición suave para el fondo */
}

.pokemonSearch button:hover {
    background-color: #218838;
    /* Color de fondo al pasar el mouse */
}
</style>
