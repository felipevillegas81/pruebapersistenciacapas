import { Router } from "express";
import ContactDTO from "../dao/dto/contacts.dto.js";
//import Contacts from "../dao/memory/contacts.memory.js";
//import Contacts from "../dao/mongo/contacts.mongo.js"
import { contactsService } from "../repositories/index.js";

const router = Router()
//const contactsServices = new Contacts()

router.get('/', async (req, res) => {
    //const contacts = contactsServices.get() // Memory
    const contacts = await contactsService.getContacts() // Mongo
    res.json(contacts)
}) 

router.post('/', async (req, res) => {
    const { name, email, phone } = req.body
    //const result = contactsServices.add({ name, email, phone }) // Memory
    //const result = await contactsServices.add(contact) // Mongo
    const result = await contactsService.createContact({ name, email, phone })
    console.log(result)
    res.json ({status: 'Ok'})
})

export default router