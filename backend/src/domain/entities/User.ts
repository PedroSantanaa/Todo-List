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
  private data: UserData;
  private _id: string;

  constructor(data: UserData) {
    this.data = {
      ...data,
      tasks: data.tasks ?? [],
      createdAt: data.createdAt ?? new Date(),
      updatedAt: data.updatedAt ?? new Date(),
    };
    this._id = crypto.randomUUID();
  }
  get id(): string {
    return this._id;
  }

  set email(email: string) {
    this.data.email = email;
  }
  get email(): string {
    return this.data.email;
  }

  set name(name: string) {
    this.data.name = name;
  }
  get name(): string {
    return this.data.name;
  }
  public set tasks(tasks: string[]) {
    this.data.tasks = tasks;
  }
  public get tasks(): string[] {
    return this.data.tasks;
  }

  set password(password: string) {
    this.data.password = password;
  }
  get password(): string {
    return this.data.password;
  }

  get updatedAt(): Date {
    return this.data.updatedAt;
  }
  set updatedAt(updatedAt: Date) {
    this.data.updatedAt = updatedAt;
  }

  get createdAt(): Date {
    return this.data.createdAt;
  }
}
