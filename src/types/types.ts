export type DataType = {
    id: number,
    name: string,
    like: number
}
export type ContacsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileDataType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContacsType,
    photos: PhotosType
}


export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}