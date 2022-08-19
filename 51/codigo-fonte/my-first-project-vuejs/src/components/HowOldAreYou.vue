
<template>
    <section>
        <h2>Qual sua idade?</h2>
        <div>
            <!--
                A partir da diretiva v-model
                associei o valor com o input.
            -->
            <input v-model="age" type="text" placeholder="Digite sua idade">
            <button v-on:click="openAlert()">Calcular</button>
        </div>
    </section>
</template>

<script>

// Exporto o componente HowOldAreYou. 
export default {
    // Defini o nome do Componente.
    name: 'HowOldAreYou',
    // Defini os dados que irão provê o Componente.
    data() {
        return {
            age: 0
        }
    },
    // Definir a lista de funções que irão provê 
    // o Componente.
    methods: {
        openAlert() {
            // Ano atual.
            let currentYear = 2022;
            // Ano atual - idade = data nascimento.
            let birthDate = currentYear - this.age;
            // método alert, do próprio javascript (navegador)
            // para abrir um popup.
            alert(`Você nasceu em ${birthDate}.`);
        }
    }
}
</script>