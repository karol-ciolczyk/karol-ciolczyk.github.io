import {getCollection} from "./getCollectionFirestore.js";

export const changeValue = (id, object)=>{
    getCollection(`tasks`).doc(id).update(object)
};