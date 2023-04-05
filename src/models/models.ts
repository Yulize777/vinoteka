export type formType = {
    id: number
    agree: boolean,
    confirm: string,
    email: string,
    gender: string,
    name: string,
    password: string,
    phone: string,
    surname: string
}

export type userType = {
    user : formType
}

export type typeLocal = {
    agree: boolean,
    confirm: string,
    email: string,
    gender: string,
    name: string,
    password: string,
    phone: string,
    surname: string,
    token: string
}

export type typeLocalUser = {
    user : typeLocal | null
}

export type winesType =  {
    "id": number | null,
    "image": string,
    "category": string,
    "name": string,
    "price": number,
    "region": string,
    "producer": string,
    "year": number,
    "alc": number,
    "grape": string,
    "country": string,
    "dry": string,
    "description": string,
    "bought": number,
    "review": any,
    "rating": number[]
}

export type propsWine = {
    item: winesType
}

export type reviewType = {
    "id": string,
    "name": string,
    "surname": string,
    "rating": number,
    "text": string
    "data": number
}



