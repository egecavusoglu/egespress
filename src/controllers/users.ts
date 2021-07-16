import BaseController from './index';

class UserController extends BaseController {
    constructor() {
        super();
        // Initialize the BaseController with appropriate model
        // super(userModel: Model);
    }

    public findUser(id: string) {
        return this.findById(id);
    }
}
