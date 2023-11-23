import PrimaryCard from '@/app/Components/Card/PrimaryCard';
import React from 'react';
import { DummyDataProject } from '../../DummyData/DummyDataProject';

export const metadata = {
  title: 'See My Project',
  description: 'My Project Page',
};

const Project = () => {
  const DataDummy = DummyDataProject;

  return (
    <div className='grid grid-cols-12 w-full h-screen overflow-y-scroll'>
      <div className='col-span-12 mt-10'>
        {DataDummy.map((data) => {
          return <PrimaryCard key={data.id} data={data} isMetaData={false} />;
        })}
      </div>
    </div>
  );
};

export default Project;
