export function setItem<T>(key:string, value: T) {
   return window.localStorage.setItem(key, JSON.stringify(value))
}

export function getItem (key: string) {
    
    const item = window.localStorage.getItem(key)
    if (item) {
        return JSON.parse(item)
    }
    return null
}