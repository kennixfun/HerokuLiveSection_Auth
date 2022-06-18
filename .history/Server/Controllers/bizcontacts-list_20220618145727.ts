import express from 'express';
import { CallBackError } from 'mongoose';

// import the Business Contact Model
import BusinessContacts from '../Models/bizcontacts';
import { UserDisplayName } from '../Util';

export function DisplayBizContactsList(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    // Accessing the database
    BusinessContacts.find(function(err, bizContactsCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contacts List', page: 'bizcontacts-list', bizcontacts: bizContactsCollection, displayName: UserDisplayName(req)});
    }).sort({FirstName: 1});
}

export function DisplayAddPage (req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Add', page: 'edit', bizcontacts: '', displayName: UserDisplayName(req) })
}

export function DisplayEditPage (req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db and read the business contacts into the edit page
    BusinessContacts.findById(id, {}, {}, function(err, bizcontactsToEdit)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }

    // show the edit view with the data
    res.render('index', { title: 'Edit', page: 'edit', bizcontacts: bizcontactsToEdit, displayName: UserDisplayName(req) })
    });
}

export function ProcessAddPage (req: express.Request, res: express.Response, next: express.NextFunction): void
{
    // instantiate a new Business Contact to add
    let newBizcontact = new BusinessContacts
    ({
        "FirstName": req.body.bizFirstName,
        "LastName": req.body.bizLastName,
        "EmailAddress": req.body.bizEmailAddress,
        "Phone": req.body.bizPhone
    });

    // Insert the new Business Contact object into the database (bizcontacts collection)
    BusinessContacts.create(newBizcontact, function(err: CallBackError)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }

        // new Business Contact has been added => refresh the business contact list
        res.redirect('/bizcontacts-list');
    })
}

export function ProcessEditPage (req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Business Contact to Edit
    let updateBizcontacts = new BusinessContacts
    ({
        "_id": id,
        "FirstName": req.body.bizFirstName,
        "LastName": req.body.bizLastName,
        "EmaillAddress": req.body.bizEmailAddress,
        "Phone": req.body.bizPhone
    });

// update the business contacts in the database
BusinessContacts.updateOne({_id: id}, updateBizcontacts, function(err: CallBackError)
{
    if (err)
    {
        console.error(err);
        res.end(err);
    }

    // edit was successful => go to the bizcontacts-list page
    res.redirect('/bizcontacts');
    });
}

export function ProcessDeletePage (req: express.Request, res: express.Response, next: express.NextFunction): void
{
    let id = req.params.id;

    // pass the id to the database and delete the business contact
    BusinessContacts.remove({_id: id}, function(err: CallBackError)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }

        // delete was successful
        res.redirect('/bizcontacts-list');
    });
}