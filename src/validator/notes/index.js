const { NotePayloadSchema } = require("./schema");
const InvariantError =require('../../services/exceptions/InvariantError');
const NotesValidator = {
    validateNotePayload : (payload) => {
        const validationResult = NotePayloadSchema.validate(payload);
        if (validationResult.error){
            throw new Error(validationResult.error.message);
        }
    },
};

module.exports = NotesValidator;