require ('dotenv').config();

const notesPlugin = require('./src/api/notes');
const Hapi = require('@hapi/hapi');

const NoteService = require('./src/services/postgres/NotesService');
const NotesValidator = require('./src/validator/notes');


const init = async () => {
  const server = Hapi.server({
      port : process.env.PORT,
      host : process.env.HOST,
      routes : {
      cors: {
          origin : ['*'],
      },
      },
  });
  
  // registrasi satu plugin
  await server.register({
    plugin: notesPlugin,
    options: { 
      service: NoteService,
      validator: NotesValidator,
   },

  });
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

