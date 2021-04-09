
export const objectFromLS = (name)=>{

        const jsonObject = localStorage.getItem(name)
        const jsObject = JSON.parse(jsonObject)

        return jsObject;
}