import type { Task } from "@/domain/entities/Task";
import type { TaskRepository } from "@/domain/repositories/TaskRepository";

const KEY = "@mindease_tasks";

export class TaskRepositoryImpl implements TaskRepository {
  async getAll(): Promise<Task[]> {
    try {
      const data = localStorage.getItem(KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  async save(tasks: Task[]): Promise<void> {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  }
}