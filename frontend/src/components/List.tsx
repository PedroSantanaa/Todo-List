//interface
import { ICategory } from "../interfaces/Category";
import { ITask } from "../interfaces/Task";

//css
import styles from "./List.module.css";

type Props = {
  taskList: ITask[];
  categoryList: ICategory[];
  handleDelete(id: string | undefined): void;
  handleEdit(task: ITask): void;
};
const List = ({ taskList, categoryList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => {
          // Encontre a categoria correspondente com base no categoryId da tarefa
          const matchingCategory = categoryList.find((category) => category.id === task.categoryId);

          return (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                {/* Verifique se uma categoria correspondente foi encontrada */}
                <p>{matchingCategory ? matchingCategory.name : "N/A"}</p>
              </div>
              <div className={styles.actions}>
                <i
                  className="bi bi-pencil"
                  onClick={() => {
                    handleEdit(task);
                  }}
                ></i>
                <i
                  className="bi bi-x-circle"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                ></i>
              </div>
            </div>
          );
        })
      ) : (
        <p>Não tem tarefas</p>
      )}
    </>
  );
};

export default List;
