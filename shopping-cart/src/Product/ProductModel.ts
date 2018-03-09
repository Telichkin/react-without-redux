import BaseModel from "../Base/BaseModel";

export default class extends BaseModel {
    constructor(
        public id: number,
        public title: string,
        public price: number,
    ) { super(); }
}