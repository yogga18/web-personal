import { useQuery } from '@tanstack/react-query';
import { getBlog } from './actions';

export const useGetBlog = () => {
  return useQuery({ queryKey: ['blog'], queryFn: getBlog });
};
