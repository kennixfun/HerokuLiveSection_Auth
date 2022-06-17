import express from 'express';

import Movie from '../Models/bizcontacts';
import { UserDisplayName } from '../Util';

export function DisplayBizContactsList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    // Accessing the database
    Movie.find(function(err, moviesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName: UserDisplayName(req)});
    });
}
