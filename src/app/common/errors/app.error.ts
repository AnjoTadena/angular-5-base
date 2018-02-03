export class AppError {
    error: any;
    constructor(originalError?: any) {
        this.error = originalError;
    }
}
