import {UserType} from "../redux/state";

export const updateObjectInArray = (items: Array<UserType>, itemId: number, objPropName: keyof UserType, newObjProps: any) => {
    return items.map(u => {
        // return u.id === itemId ? {...u, followed: true} : u
         return u[objPropName as keyof typeof u] === itemId ? {...u, ...newObjProps} : u
    })
}