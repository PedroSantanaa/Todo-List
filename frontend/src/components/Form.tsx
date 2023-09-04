import styles from "./Form.module.css";
import { ITask } from "../interfaces/Task";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Input from "./Input";
import { useAuth } from "../context/Auth";
import { api } from "../axios/api";
import { CreateTask } from "../interfaces/CreateTask";
import { ICategory } from "../interfaces/Category";

interface Props {
  btnText: string;
  categories: ICategory[];
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}
const Form = ({ btnText, categories, task, handleUpdate }: Props) => {
  //states
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    } else {
    }
  }, [task]);

  //handle functions

  const taskHandle = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      //Id to edit or delete
      // const newTask: CreateTask = { title, difficulty };
      api.post;

      setTitle("");
      setDifficulty(0);
    }
  };

  return (
    <form onSubmit={taskHandle} className={styles.form}>
      <div>
        <label>
          <Input
            type="text"
            name="title"
            placeholder="Add a new task"
            onChange={(ev: ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
            value={title}
            required
          />
        </label>
      </div>
      <div>
        <label>Category</label>
        <select name="category" id="category">
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};
export default Form;
