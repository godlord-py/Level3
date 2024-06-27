import { logMethod } from './decorator';

export class User {
  constructor(public name: string, public age: number) {}

  @logMethod
  sayHello(): string {
    return `Hello, my name is ${this.name}`;
  }
}
