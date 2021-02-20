export interface Observable<T> {
  subscribe(callback: (data?: T) => void): () => void
}
