
const maxLength = max => value =>
   value && value.length > max 
   ? `Максимальная длина сообщения ${max} символов` 
   : undefined
export const maxLength500 = maxLength(500)

const minLength = min => value =>
   value && value.length < min 
      ? `Должно быть не менее ${min} символов` 
   : undefined
export const minLength4 = minLength(4)

export const email = value =>
   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) 
      ?  'Неверный адрес электронной почты' 
      :  undefined

export const requiredPost = value => value ? undefined : 'Добавить запись'