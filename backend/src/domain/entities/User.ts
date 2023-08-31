import * as crypto from 'node:crypto';
interface UserData {
  name: string;
  email: string;
  password: string;
  tasks?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  public name: string;
  public email: string;
  public password: string;
  public tasks: string[];
  public createdAt: Date;
  public updatedAt: Date;
  // private data: UserData;
  public _id: string;

  constructor(data: UserData) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.tasks = data.tasks || [];
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this._id = crypto.randomUUID();
  }
  get id(): string {
    return this._id;
  }
}
