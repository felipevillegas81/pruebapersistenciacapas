import { Contact } from "../dao/factory.js"
import ContactRepository from "./contact.repository.js"

export const contactsService = new ContactRepository(new Contact())