export default class Item {
    constructor({ title, status = false }) {
        this.title = String(title);
        this.status = Boolean(status);
    }
}