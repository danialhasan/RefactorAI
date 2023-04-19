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
            try {
                // Prompt example: "Refactor: let x = 5; console.log('this is x:', x)"
                // const endpoint = https://refactorai-server.herokuapp.com/api
                const endpoint = 'http://localhost:3000/api';
                this.backendResponse = 'Thinking...';
                const response = await axios.post(endpoint, {
                    prompt: `${prompt}: ${this.codeInputValue}`,
                });
                this.backendResponse = response.data.message.content;
                console.log('OpenAI Response! ', response);
            } catch (error) {
                console.error('There was a problem!\n', error);
            }
        },
        async writeToMemento() {
            // Write to extension package, then write to Memento from there.
            // console.log('Writing to Memento:', this.$state);
            // eslint-disable-next-line no-undef
            await vscode.postMessage({
                message: 'Hello world!',
            });
        },
    },
});
