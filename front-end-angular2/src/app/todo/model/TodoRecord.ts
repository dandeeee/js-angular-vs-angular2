export class TodoRecord {
    message: string;
    createdAt: number;

    constructor(message) {
        this.message = message;
        this.createdAt = Date.now();
    }
}