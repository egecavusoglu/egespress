interface IApiError {
    message: string;
    status: number;
}

/**
 * Global Error throwing interface.
 * Can be used as:
 * throw new ApiError({ message: "my message", status: 404 });
 */
class ApiError implements IApiError {
    message: string;
    status: number;
    constructor(err: IApiError) {
        this.message = err.message;
        this.status = err.status;
    }
}

export default ApiError;
