// Step 1 - Import Mongoose
import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data
const bizContactsSchema = new Schema // design a table in database
({
    FirstName: String,
    LastName: String,
    Company: String,
    Position: String,
    LinkedIn: String,
    Phone: String
},
{
    collection: "bizcontacts"
})

// Step 3 - Create a Model using the Schema
const Model = mongoose.model("Business Contacts", bizContactsSchema);

// Step 4 - Export the Model -> this makes the file a module
export default Model;