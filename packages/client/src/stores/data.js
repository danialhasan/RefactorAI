// stores/counter.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useDataStore = defineStore('data', {
    state: () => {
        return { codeInputValue: '', backendResponse: 'RefactorAI will respond here!' };
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        async createRequest(prompt) {
            return;
            try {
                // Prompt example: "Refactor: let x = 5; console.log('this is x:', x)"
                // http://localhost:3000/api
                const response = await axios.post('https://refactorai-server.herokuapp.com/api', {
                    prompt: `${prompt}: ${this.codeInputValue}`,
                });
                this.backendResponse = response.data.message.content;
                console.log('RESPONSE!N ', response);
            } catch (error) {
                console.error('There was a problem!\n', error);
            }
        },
    },
});
