export interface CRUD {
    list: (resource: any) => Promise<Array<any>>
    create: (resource: any) => Promise<any>
    update: (resource: any) => Promise<any>
    find: (resource: any) => Promise<any>
    delete: (resource: any) => Promise<any>
    patch: (resource: any) => Promise<any>
}