import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curiculum Vitae',
  description: 'CV Page',
};

const CuriculumVitae = () => {
  return (
    <div>
      <div className='h-screen w-5/6 m-auto'>
        <iframe
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          src='Resume-Yogga-Aditya-Candra (5).pdf'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

export default CuriculumVitae;
