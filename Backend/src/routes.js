const express = require('express');
const ONGController = require('./controllers/ONGController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', ONGController.index);
routes.post('/ongs', ONGController.create);

routes.get('/incidents', ONGController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
