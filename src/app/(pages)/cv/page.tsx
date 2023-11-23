import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curiculum Vitae',
  description: 'CV Page',
};

const CuriculumVitae = () => {
  return (
    <div>
      <h1 className='text-center'>CuriculumVitae</h1>
    </div>
  );
};

export default CuriculumVitae;
