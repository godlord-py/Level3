import { User } from './user';
import { List } from './list';

const userList = new List<User>();
userList.add(new User('Aayush', 30));
userList.add(new User('Pathak', 25));

const users = userList.getAll();
users.forEach(user => console.log(user.sayHello()));
