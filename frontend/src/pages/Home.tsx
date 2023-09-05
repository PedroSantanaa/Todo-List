import { useEffect, useState } from "react";

//Css
import styles from ".././App.module.css";

//Interfaces
import { ITask } from "../interfaces/Task";

//Componentes
import Footer from "../components/Footer";
import Form from "../components/Form";
import List from "../components/List";
import Modal from "../components/Modal";
import { useAuth } from "../context/Auth";
import { ICategory } from "../interfaces/Category";
import { api } from "../axios/api";

function Home() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [taskToupdate, setTaskToUpdate] = useState<ITask | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/task/${user?.id}`).then((response) => {
      setTaskList(response.data);
    });
    api.get("/category").then((response) => {
      setCategoryList(response.data);
    });
  }, [user]);

  const deleteTask = (id: string) => {
    api.delete(`/task/${id}`);
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };
  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    const createCategory = document.querySelector("#createCategory");
    if (display) {
      modal!.classList.remove("hide");
      createCategory!.classList.add("hide");
    } else {
      modal!.classList.add("hide");
      createCategory!.classList.remove("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: string, title: string, categoryId: string) => {
    api.patch(`/task/${id}`, { title, categoryId });
    const updateTask: ITask = { id, title, categoryId };
    const updatedItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });
    setTaskList(updatedItems);
    hideOrShowModal(false);
  };
  return (
    <h1>
      <Modal
        children={
          <Form
            btnText="Edit Task"
            userId={user?.id!}
            categories={categoryList}
            task={taskToupdate}
            handleUpdate={updateTask}
          />
        }
      />
      {/* <Header /> */}
      <main className={styles.main}>
        <div className="form"></div>
        <Form
          btnText="Criar Tarefa"
          userId={user?.id!}
          categories={categoryList}
          setTaskList={setTaskList}
          setCategoryList={setCategoryList}
        />
        <div className={styles.todo}>
          <List
            taskList={taskList}
            categoryList={categoryList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </h1>
  );
}

export default Home;
