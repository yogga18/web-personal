import { Todo } from '@/types/todoTypes';
import { axiosInstance } from '@/utils/axiosInstances';

export const getTodos = async () => {
  return await axiosInstance.get<Todo[]>('/todos');
};
