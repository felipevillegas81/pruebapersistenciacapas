import mongoose from "mongoose";
import config from "../config/config.js";

export let Contact

switch (config.persitence) {
    case 'MONGO':
        const connect = mongoose.connect('mongodb://localhost:27017/contacts', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log('Error connecting to MongoDB...', error))
        const {default:ContactsMongo} = await import ('../dao/mongo/contacts.mongo.js')
        Contact = ContactsMongo
    break;

    case 'MEMORY':
        const {dafault:ContactsMemory} = await import('../dao/memory/contacts.memory.js')
        Contact = ContactsMemory
    break;
}