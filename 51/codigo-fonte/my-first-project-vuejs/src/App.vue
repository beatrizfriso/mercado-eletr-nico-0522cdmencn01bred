
<!-- 
	Modelo 

	View que será utilizada para apresentar 
	valores dinâmicos.
-->
<template>
	<div>
		<h1>Olá, {{ name }}</h1>
		<Home />
		<HowOldAreYou />
	</div>
</template>

<script>
// Importei o componente Home
import Home from './components/Home.vue';
import HowOldAreYou from './components/HowOldAreYou.vue';

export default {
	// Defini o nome do Componente.
	name: 'App',
	// Defini os dados que irão provê o Componente.
	data() {
		return {
			name: "Willian"
		}
	},
	// Definir a lista de Componentes que serão utilizados
	// no Componente App
	components: {
		Home,
		HowOldAreYou
	}
}
</script>
