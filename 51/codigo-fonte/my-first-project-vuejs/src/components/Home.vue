
<template>
    <section>
        <h2>Sobre a aplicação</h2>
        <p>{{ description }}</p>
    </section>
</template>

<script>

// Exporto o componente Home. 
export default {
    // Defini o nome do Componente.
    name: 'Home',
    // Defini os dados que irão provê o Componente.
    data() {
        return {
            description: 'Este é um exemplo de aplicação Vuejs.'
        }
    }
}
</script>