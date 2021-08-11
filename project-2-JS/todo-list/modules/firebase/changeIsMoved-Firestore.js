import { changeValue } from "./changeValue-Firestore.js";

export const changeIsMovedValue = (id, boolean)=>{
    changeValue(id, {moved: boolean} )
}