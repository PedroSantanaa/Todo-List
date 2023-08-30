import * as crypto from 'node:crypto';
interface CategoryData {
  name: string;
  tasks?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class Category {
  private data: CategoryData;
  private _id: string;

  constructor(data: CategoryData) {
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
