export const maxLengthCreator = (maxLength) => value => { //тут диспатчит, поэтому может быть только value передано, но через замыкание отправляем и нужное нам число. Вызивает форму redaxForm поэтому и не можем передать. 
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const required = value => {
    if (value) return undefined;

    return "Field is required"
}
