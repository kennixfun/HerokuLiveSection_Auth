import express from 'express';

import Movie from '../Models/bizcontacts';
import { UserDisplayName } from '../Util';

export function DisplayBizContactsList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    // Accessing the database
    Movie.find(function(err, bizcontactsCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contacts List', page: 'bizcontacts-list', bizcontacts: bizcontactsCollection, displayName: UserDisplayName(req)});
    });
}
