import { useQuery } from '@tanstack/react-query';
import { getProject } from './actions';

export const useGetProject = () => {
  return useQuery({ queryKey: ['project'], queryFn: getProject });
};
