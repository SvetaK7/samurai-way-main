export const required = (value: string) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLenghtCreator = (maxLenght: number) => (value: string) => {
    if (value && value.length > maxLenght) {
        return `Max length is ${maxLenght} symbols`
    }
    return undefined

}



