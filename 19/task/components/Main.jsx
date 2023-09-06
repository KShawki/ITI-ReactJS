import Student from './Student';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Display from './Display';

const Main = () => {
  const [students, setStudents] = useState([
    { id: uuid(), name: 'Khaled Shawki', username: 'k.shawki' },
    { id: uuid(), name: 'Anas Roubi', username: 'xhzeem' },
    { id: uuid(), name: 'Ahmed Fathy', username: 'a.fathy' },
    { id: uuid(), name: 'Yasser Aldosri', username: 'y.rashid' },
    { id: uuid(), name: 'Anas AlAmady', username: 'anas' },
  ]);

  const addStudent = (student) => setStudents([...students, student]);

  return (
    <>
      <div className='main'>
        <Student addStudent={addStudent} />
        <Display students={students} />
      </div>
    </>
  );
};

export default Main;
