import {getCollection} from "./getCollectionFirestore.js";

export const addDocument = (object)=>{
    getCollection(`tasks`).add(object);
};