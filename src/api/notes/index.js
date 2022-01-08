
const NotesHandler = require('./handler');
const routes = require('./routes');
const service = require('../../services/postgres/NotesService');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(routes(notesHandler));
  },
};
