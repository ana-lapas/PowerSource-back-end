export type User = {
    name: string,
    email: string,
    cpf: string,
    password: string,
};

export type SignInUser = {
    email: string,
    password: string,
};

export type ApplicatonError = {
    name: string;
    message: string;
};

export type Product = {
    userId: number
    font: string,
    month: number,
    energy_amount: number,
    price: number
}

export type NewOperation = {
    buyer_Id: number
    product_id: number
    seller_id: number
    quantity: number
    price: number
}
