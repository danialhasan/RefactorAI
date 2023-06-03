// stores/counter.js
import { defineStore } from 'pinia';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { devEndpoint, prodEndpoint } from '../helpers/endpoint';

export const useDataStore = defineStore('data', {
    state: () => {
        return {
            codeInputValue: '',
            backendResponse: 'RefactorAI will respond here!',
            settingsVisible: false,
            toggleableFeatures: {
                dataStreaming: false,
                modelSwitching: false,
            },
            awaitingBackendResponse:false
        };
    },
    actions: {
        async createRequest(prompt) {
            console.log(`Awaiting backend response: ${this.awaitingBackendResponse}`)
            if (this.awaitingBackendResponse) return;
            try {
                this.awaitingBackendResponse = true;
                const endpoint = prodEndpoint;
                console.log('Creating non-stream request to ', endpoint)
                this.backendResponse = 'Thinking...';
                const response = await axios.post(`${endpoint}/api`, {
                    prompt: `${prompt}: ${this.codeInputValue}`,
                });
                if (response) { console.log(`response status: ${!!response}`); this.awaitingBackendResponse = false; }
                this.backendResponse = response.data.message.content;
                this.writeToMemento(this.$state);
            } catch (error) {
                console.error('There was a problem creating the non-stream server request!\n', error);
                this.awaitingBackendResponse = false;
            }
        },
        async createStreamRequest(prompt) {
            console.log(`Awaiting backend response: ${this.awaitingBackendResponse}`)
            if (this.awaitingBackendResponse) return;
            try {
                this.awaitingBackendResponse = true;
                const endpoint = prodEndpoint;
                console.log('Creating stream request to ', endpoint)
                this.backendResponse = 'Thinking...';
                const events = new EventSource(`${endpoint}/api/stream`);
                axios.post(`${endpoint}/api/stream`, {
                    prompt: `${prompt}: ${this.codeInputValue}`,
                });
                let response = [];
                events.addEventListener('message', (message) => {
                    if (message.data.includes('Event stream established!')) {
                        return;
                    } 
                    if (message.data.includes('[DONE]')) {
                        response = [];
                        this.awaitingBackendResponse = false;
                        return;
                    }
                    response += message.data
                    // console.log('RESPONSE: ', response)
                    this.backendResponse = response;
                    this.writeToMemento(this.$state);
                });
            } catch (error) {
                console.error('There was a problem with creating the stream request!\n', error);
                this.awaitingBackendResponse = false;
            }
        },
        async writeToMemento() {
            try {
                // console.log('Writing to Memento:');
                // console.log(this.$state);
                // eslint-disable-next-line no-undef
                await vscode.postMessage({
                    message: JSON.stringify(this.$state),
                });
            } catch (error) {
                console.error('There was a problem writing to Memento!\n ', error);
            }
        },
        async getFromMemento() {
            try {
                // console.log('getting from memento!');
                // eslint-disable-next-line no-undef
                await vscode.postMessage({
                    message: '{}',
                });
            } catch (error) {
                console.error('There was a problem with getting from Memento!\n ', error);
            }
        },
    },
});
