import { useTodosQueris } from '@/services/Todos/queries';
import React from 'react';

type Props = {};

const TanstackTest = (props: Props) => {
  const todosQuery = useTodosQueris();

  return (
    <div>
      <h1>TanstackTest</h1>
    </div>
  );
};

export default TanstackTest;
