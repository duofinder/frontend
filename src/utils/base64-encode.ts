export const  base64Encode = (str: string): string => {
    return btoa(btoa(str))
}