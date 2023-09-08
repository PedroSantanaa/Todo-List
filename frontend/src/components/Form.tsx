import styles from "./Form.module.css";
import { ITask } from "../interfaces/Task";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Input from "./Input";
import { api } from "../axios/api";
import { ICategory } from "../interfaces/Category";

interface Props {
  btnText: string;
  userId: string;
  categories: ICategory[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  setCategoryList?: React.Dispatch<React.SetStateAction<ICategory[]>>;
  task?: ITask | null;
  handleUpdate?(id: string | undefined, title: string, categoryId: string): void;
}
const Form = ({
  btnText,
  userId,
  categories,
  setTaskList,
  setCategoryList,
  task,
  handleUpdate,
}: Props) => {
  //states
  const [id, setId] = useState<string>();
  const [title, setTitle] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setCategoryId(task.categoryId);
    } else {
    }
  }, [task]);

  //handle functions

  const createCategory = () => {
    api.post("category", { name: title });
    // const newCategory = { id: categoryId, name: title };
    // setCategoryList!((prev) => [...prev, newCategory]);
  };
  const taskHandle = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, categoryId);
    } else {
      //Id to edit or delete
      api.post("task", { title, categoryId, userId }).then((response) => {
        setId(response.data.id);
      });
      const newTask: ITask = { id, title, categoryId };
      setTaskList!((prev) => [...prev, newTask]);

      setTitle("");
    }
  };
  const handleDeleteCategory = () => {
    api.delete(`/category/${categoryId}`);
    setCategoryList!((prev) => prev.filter((category) => category.id !== categoryId));
  };

  return (
    <div>
      <form onSubmit={taskHandle} className={styles.form}>
        <div>
          <label>
            <Input
              type="text"
              name="title"
              placeholder="Add a new task/category"
              onChange={(ev: ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
              value={title}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Category
            <select
              name="category"
              id="category"
              onChange={(ev: ChangeEvent<HTMLSelectElement>) => setCategoryId(ev.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button className={styles.delete} onClick={handleDeleteCategory}>
              Deletar Categoria
            </button>
          </label>
        </div>
        <input type="submit" value={btnText} />
      </form>
      <input
        id="createCategory"
        className={styles.category}
        type="submit"
        value="Criar Categoria"
        onClick={createCategory}
      />
    </div>
  );
};
export default Form;
