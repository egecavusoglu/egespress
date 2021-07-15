// All CRUD and business logic.
abstract class BaseController {
    model: any;
    constructor() {
        // this.model = this.getModel();
    }

    public findById(id: string) {}

    public findAll(query: any) {}

    public createOne() {}

    public deleteOne() {}
}
