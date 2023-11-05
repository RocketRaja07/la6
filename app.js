const http = require('http');
const fs = require('fs'); const path = require('path'); const server = http.createServer((req, res) => {
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

const publicPath = path.join( dirname, 'public');
