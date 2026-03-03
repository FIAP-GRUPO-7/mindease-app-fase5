import { Task } from "../entities/Task";

export interface TaskRepository {
  getAll(): Promise<Task[]>;
  save(tasks: Task[]): Promise<void>;
}