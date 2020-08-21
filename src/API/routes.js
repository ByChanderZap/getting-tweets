const express = require('express');
const api = require('./network');

const routes = (server) => {
    server.use('/api', api)
}

module.exports = routes; 
