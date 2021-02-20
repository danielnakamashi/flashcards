import { Observable } from './protocols'

class Observer<T> implements Observable<T> {
  private subscriptions: Set<(data?: T) => void> = new Set()
  private queue: Array<T | undefined> = []
  private emitter: (next: (data?: T) => void, error: (error: unknown) => void) => void

  constructor(emitter: (next: (data?: T) => void, error: (error: unknown) => void) => void) {
    this.next = this.next.bind(this)
    this.error = this.error.bind(this)
    this.emitter = emitter
  }

  private next(data?: T): void {
    if (this.subscriptions.size) {
      this.subscriptions.forEach(callback => {
        callback(data)
      })
    } else {
      this.queue.push(data)
    }
  }

  private error(error: unknown): void {
    console.error(error)
  }

  subscribe(callback: (data?: T) => void): () => void {
    this.subscriptions.add(callback)

    if (this.queue.length) {
      this.queue.forEach(data => callback(data))
      this.queue = []
    }

    if (this.subscriptions.size === 1) {
      this.emitter(this.next, this.error)
    }

    return () => {
      this.subscriptions.delete(callback)
    }
  }
}

export { Observer }
