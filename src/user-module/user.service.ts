import { Injectable } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[] = []; // Ensure initialization of the array

  getUser(): User[] {
    return this.users;
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User[] {
    const remainingUsers = this.users.filter(i => i.email !== email); // Correct comparison
    this.users = remainingUsers;
    return this.users; // Return the updated users array
  }
}
