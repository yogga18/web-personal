import { projectType } from '@/types/Project/projectType';
import { axiosInstance } from '@/utils/axiosInstances';

export const getProject = async () => {
  try {
    const response: any = await axiosInstance.get<projectType>('/project');

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
