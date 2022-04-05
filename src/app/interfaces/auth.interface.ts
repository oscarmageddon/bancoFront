export interface Auth {
    enabled: boolean,
    fullname: string,
    id: string,
    roles: Role[],
    username: string
}

interface Role {
    id: string,
    name: string
}