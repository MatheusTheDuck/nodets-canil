import { Request, Response } from "express";
import { CreateMenuObeject } from '../helpers/createMenuObject'
import { Pet } from '../models/Pet'

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: CreateMenuObeject('all'),

        banner: {
            title: 'todos os animais ',
            background: 'allanimals.jpg',
        },
        list
    })
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: CreateMenuObeject('dog'),
        banner: {
            title: 'Cachorros ',
            background: 'Banner_dog.jpg',
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: CreateMenuObeject('cat'),
        banner: {
            title: 'Gatos',
            background: 'Banner_cat.jpg',
        },
        list
    })
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: CreateMenuObeject('fish'),
        banner: {
            title: 'Peixes ',
            background: 'Banner_fish.jpg',
        },
        list
    })
}