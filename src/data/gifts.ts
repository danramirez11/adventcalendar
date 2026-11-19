import type { DayType } from "../types/types";
import { supabase } from "./supabase";

const gifts = {
    fish: {
        name: "Organizador de Audífonos",
        desc: "fih",
        imgUrl: "string",
        isFirstTime: false,
    },
    pouch: {
        name: "Bolsita",
        desc: "para guardar cosas pequeñas",
        imgUrl: "o",
        isFirstTime: false
    },
    pouchMagic: {
        name: "Bolsita expandible",
        desc: "para guardar cosas más grandes",
        imgUrl: "o",
        isFirstTime: false
    },
    nfc: {
        name: "Near Field Communication",
        desc: "A ti hay que meterte a un curso de informática",
        imgUrl: "o",
        isFirstTime: false
    },
    timeline: {
        name: "Libro de historia",
        desc: "no se ve desgastado, debe ser reciente",
        imgUrl: "o",
        url: "",
        isFirstTime: false
    },
    playlist: {
        name: "Cassette Moderno",
        desc: "una playlist de spotify",
        imgUrl: "o",
        url: "",
        isFirstTime: false
    },
    wpp: {
        name: "WhatsApp Wrapped",
        desc: "Análisis cuantitativo de 6 meses (y un poquito más) de relación",
        imgUrl: "o",
        url: "",
        isFirstTime: false
    },
    parejas: {
        name: "Mazo de Cartas",
        desc: "se te cayeron todas boca abajo",
        imgUrl: "o",
        url: "",
        isFirstTime: false
    },
    flappyBird: {
        name: "Jueguito",
        desc: "Desarrollado por Bungie (100% oficial)",
        imgUrl: "o",
        url: "",
        isFirstTime: false
    },
    reese: {
        name: "Reese's",
        desc: "Dulce",
        imgUrl: "o",
        isFirstTime: false
    },
    

}

export const uploadGifts = async () => {
    for (const gift of Object.values(gifts)) {

        const { error } = await supabase
            .from("gifts")
            .insert(gift);

        if (error) {
            throw error;
        }
    }
}

export const days: DayType[] = [
    {
        day: 1,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.timeline
    },
    {
        day: 21,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.fish
    },
    {
        day: 5,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.playlist
    },
    {
        day: 17,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.fish
    },
    {
        day: 3,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.nfc
    },
    {
        day: 11,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.parejas
    },
    {
        day: 9,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.pouchMagic
    },
    {
        day: 15,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.fish
    },
    {
        day: 23,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.fish
    },
    {
        day: 13,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.reese
    },
    {
        day: 19,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.fish
    },
    {
        day: 7,
        id: '',
        isBlocked: true,
        type: "simple",
        gift: gifts.pouch
    }
]

export const upDays = async () => {
    for (const day of days) {

        const correctDay = {
            day: day.day,
            isBlocked: day.isBlocked,
            isSimple: true,
            gift: day.gift.name
        }

        const { error } = await supabase
            .from("days")
            .insert(correctDay);

        if (error) {
            throw error;
        }
    }
}