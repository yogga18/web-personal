import { useQuery } from '@tanstack/react-query';
import { getTodos } from './actions';

export const useTodosQueris = () => {
  return useQuery({ queryKey: ['todos'], queryFn: getTodos });
};
