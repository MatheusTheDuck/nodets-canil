import { Request, Response } from "express";
import { Pet } from '../models/Pet';
import { CreateMenuObeject } from '../helpers/createMenuObject'

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string
let list = Pet.getFromName(query)
if(!query){
    res.redirect('/');
    return
}
    res.render('pages/page', {
        menu: CreateMenuObeject(''),
        list,
        query
    })
}