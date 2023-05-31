class Publisher {
    constructor() {
        this.subscribers = [];
    }
    subscribers (cb) {
        this.subscribers.push(cb);
    }
    publish(data) {
        this.subscribers.forEach(cb=> cb(data))
    }
}

export default Publisher;