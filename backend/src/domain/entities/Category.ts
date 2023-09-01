import { Task } from './Task';
interface CategoryData {
  name: string;
  task?: Task[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class Category {
  public name: string;
  public task: Task[];
  public createdAt: Date;
  public updatedAt: Date;
  public _id: string;

  constructor(data: CategoryData) {
    this.name = data.name;
    this.task = data.task || [];
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this._id = crypto.randomUUID();
  }
  get id(): string {
    return this._id;
  }
}
