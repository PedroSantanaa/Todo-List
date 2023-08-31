import * as crypto from 'node:crypto';
interface CategoryData {
  name: string;
  tasks?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class Category {
  public name: string;
  public tasks: string[];
  public createdAt: Date;
  public updatedAt: Date;
  public _id: string;

  constructor(data: CategoryData) {
    this.name = data.name;
    this.tasks = data.tasks || [];
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this._id = crypto.randomUUID();
  }
  get id(): string {
    return this._id;
  }
}
