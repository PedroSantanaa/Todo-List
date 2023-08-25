import * as crypto from 'node:crypto';
interface UserProps {
  name: string;
  email: string;
  password: string;
  tasks?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  private props: UserProps;
  private _id: string;

  constructor(props: UserProps) {
    this.props = {
      ...props,
      tasks: props.tasks ?? [],
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
    this._id = crypto.randomUUID();
  }
  get id(): string {
    return this._id;
  }

  set email(email: string) {
    this.props.email = email;
  }
  get email(): string {
    return this.props.email;
  }

  set name(name: string) {
    this.props.name = name;
  }
  get name(): string {
    return this.props.name;
  }
  public set tasks(tasks: string[]) {
    this.props.tasks = tasks;
  }
  public get tasks(): string[] {
    return this.props.tasks;
  }

  set password(password: string) {
    this.props.password = password;
  }
  get password(): string {
    return this.props.password;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
