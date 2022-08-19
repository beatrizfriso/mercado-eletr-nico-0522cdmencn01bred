// Importei o recurso de inicialização de App no Vuejs.
import { createApp } from 'vue';

// Importei o componente App.
import App from './App.vue';

// Criei uma instância do Vue.
// Montei/Renderizei essa instância na div #root.
createApp(App)
    .mount('#app');


// Nota: Instalação realizada a partir do npm.
// Link documentação: https://vuejs.org/guide/quick-start.html#with-build-tools

// Outra alternativa
// Link da documentação do Vite: https://vitejs.dev/guide/
