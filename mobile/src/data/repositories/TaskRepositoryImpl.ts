import { Task } from "@/domain/entities/Task";
import { TaskRepository } from "@/domain/repositories/TaskRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@mindease_tasks";

export class TaskRepositoryImpl implements TaskRepository {
  async getAll(): Promise<Task[]> {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  }

  async save(tasks: Task[]): Promise<void> {
    await AsyncStorage.setItem(KEY, JSON.stringify(tasks));
  }
}
