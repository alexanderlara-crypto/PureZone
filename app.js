require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Ruta principal (index) - se activa cuando entras a "/"
app.get('/', (req, res) => {
res.send('Página de inicio');
});
// Otra ruta de ejemplo
app.get('/contacto', (req, res) => {
res.send('Página de contacto');
});
app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});
