export function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${propertyName} with arguments:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Result: ${result}`);
      return result;
    };
    return descriptor;
  }
  