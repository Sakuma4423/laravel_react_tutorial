// ファイル選択;
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const FileSelect = (props: any) => {
  const [key, setkey] = useState('');
  const [value, setValue] = useState('');
  const result: any[] = [];
  if (props.source) {
    props.source.forEach((value: string, key: string) => {
      result.push(<option value={key}>{value}</option>);
    });
  }
  return <Form.Control as="select">{result}</Form.Control>;
};

export default FileSelect;
