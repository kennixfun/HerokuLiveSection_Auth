import express from 'express';

import BusinessContacts from '../Models/bizcontacts';
import { UserDisplayName } from '../Util';

export function DisplayBizContactsList(req: express.Request, res: express.Response, next: express.NextFunction)
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

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Edit' , page: 'edit', displayName: UserDisplayName(req)});
}