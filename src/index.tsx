import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
    models: {
        transactions: Model,
    },

    seeds(server){
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Curso de react',
                    type: 'withdraw',
                    category: 'Curso',
                    amount: 1000,
                    createdAt: '12/05/2022'
                },
                {
                    id: 2,
                    title: 'Projeto web',
                    type: 'deposit',
                    category: 'Desenvolvimento',
                    amount: 3000,
                    createdAt: '12/05/2022'
                }
            ],
        })
    },

    routes() {
        this.namespace = 'api';
        this.get('/transactions', () => {
            return this.schema.all('transactions');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            console.log(data);
            return schema.create('transactions', data);
        });
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
