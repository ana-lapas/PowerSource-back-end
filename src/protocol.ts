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