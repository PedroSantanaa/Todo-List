import * as crypto from 'node:crypto';
interface TaskData {
  title: string;
  userId: string;
  categoryId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Task {
  public title: string;
  public userId: string;
  public categoryId: string;
  public createdAt: Date;
  public updatedAt: Date;
  // private data: TaskData;
  public _id: string;

  constructor(data: TaskData) {
    this.title = data.title;
    this.userId = data.userId;
    this.categoryId = data.categoryId;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this._id = crypto.randomUUID();
  }
  get id(): string {
    return this._id;
  }
}
