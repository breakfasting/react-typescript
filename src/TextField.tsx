import React, { useState, useRef } from 'react';

// optional fields have '?'
interface Person {
  name: string,
  age?: number,
}

interface Props {
  text: string,
  person: Person,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

// const TextField: React.FC<{ text: string }> = () => {
const TextField: React.FC<Props> = ({
  person,
  text,
  handleChange,
}) => {
  const [count, setCount] = useState<number | null | undefined>(5);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
