const mongoose = require('mongoose');
const readline = require('readline');

// The local MongoDB instance database string
const dbURI = 'mongodb://127.0.0.1/travlr';
mongoose.connect(dbURI);

// Log messaging hook for successful database activation
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

// Log error parameters if structural baseline failure occurs
mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}`);
});

// Log structural baseline parameter drop
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Process hook checking system platform layer (Windows workaround parameter)
if (process.platform === 'win32') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit('SIGINT');
    });
}

// Global shutdown tracking wrapper
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close()
        .then(() => {
            console.log(`Mongoose disconnected through ${msg}`);
            callback();
        })
        .catch(err => {
            console.error(`Error during shutdown: ${err}`);
            callback();
        });
};

// Intercept nodemon live-reload runtime refresh triggers
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Intercept standardized local termination triggers
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

// Link your existing trip model definition directly into your data pipeline
require('./travlr');
require('./user');