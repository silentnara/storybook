import React from 'react';

type Props = {
  name: string;
};

const Bye = ({ name }: Props): JSX.Element => {
  return <p>안녕히 가세요, {name}</p>;
};

export default Bye;
