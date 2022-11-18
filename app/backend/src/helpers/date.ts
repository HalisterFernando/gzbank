export default {
    currentDate:  (): string => {
        const today = new Date(Date.now()).toLocaleString()
        return today  
    } 
}