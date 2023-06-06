class Publisher {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(cb) {
    this.subscribers.add(cb);
  }

  unsubscribe(cb) {
    this.subscribers.delete(cb);
  }

  publish(data) {
    for (const subscriber of this.subscribers) {
      subscriber(data);
    }
  }
}

export default Publisher;
