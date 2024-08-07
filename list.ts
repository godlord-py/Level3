export class List<T> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    getAll(): T[] {
      return this.items;
    }
  }
  