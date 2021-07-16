import { Model } from '../models';
// All CRUD and business logic.
abstract class BaseController {
    model: Model;
    constructor(model: Model) {
        this.model = model;
    }

    public findById(id: string) {}

    public findAll(query: any) {}

    public getPaginatedResults(query: any) {}

    public createOne() {}

    public updateOne() {}

    public deleteOne() {}
}

export default BaseController;
