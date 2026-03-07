import { TaskRepositoryImpl } from "@/data/repositories/TaskRepositoryImpl";
import type { Task } from "@/domain/entities/Task";
import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

interface TaskContextProps {
  tasks: Task[];
  addTask: (title: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  loading: boolean;
}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

const repository = new TaskRepositoryImpl();

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const stored = await repository.getAll();
      setTasks(stored);
      setLoading(false);
    }
    load();
  }, []);

  const addTask = async (title: string) => {
    const newTask: Task = {
      id: uuid(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const updated = [...tasks, newTask];
    setTasks(updated);
    await repository.save(updated);
  };

  const toggleTask = async (id: string) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updated);
    await repository.save(updated);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, loading }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
