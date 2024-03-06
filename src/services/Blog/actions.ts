import { blogType } from '@/types/Blog/blogTypes';
import { axiosInstance } from '@/utils/axiosInstances';

export const getBlog = async () => {
  try {
    const response: any = await axiosInstance.get<blogType>('/blog');

    if (response.status === 200) {
      const { data } = response.data;

      return data;
    } else {
      throw new Error(response.error);
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
