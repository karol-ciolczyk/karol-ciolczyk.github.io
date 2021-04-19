import {getCollection} from "./getCollectionFirebase.js";

export const addDocument = (object)=>{
    getCollection(`tasks`).add(object);
};