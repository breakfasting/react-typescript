import React from 'react';

interface Person {
  name: string,
  age: number,
}

interface Props {
  text: string,
  person: Person,
}

// const TextField: React.FC<{ text: string }> = () => {
const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default TextField;
