export class RefModel {
    id:string;
    collection:string;

    constructor(id: string, collection: string) {
        this.id = id;
        this.collection = collection;
    }
    public static empty():RefModel{
        return new RefModel("","");
    }

}
