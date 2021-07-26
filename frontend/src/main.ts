import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApp, provide, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const defaultClient = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

createApp({
    setup() {
        provide(DefaultApolloClient, defaultClient);
    },
    render() {
        return h(App);
    },
})
    .use(store)
    .use(router)
    .mount('#app');
