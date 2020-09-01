import React, { useState } from 'react';

// optional fields have '?'
interface Person {
  name: string,
  age?: number,
}

interface Props {
  text: string,
  person: Person,
}

// const TextField: React.FC<{ text: string }> = () => {
const TextField: React.FC<Props> = ({
  person,
  text
}) => {
  const [count, setCount] = useState<number | null | undefined>(5);

  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default TextField;
