import { useState } from 'react';

const Student = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: '',
    username: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    console.log(student);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className='formPage'>
      <div>
        <h3>Name: </h3>
        <input
          type='text'
          name='name'
          placeholder='Enter Name: '
          value={student.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3>Username: </h3>
        <input
          type='text'
          name='username'
          placeholder='Enter Username: '
          value={student.username}
          onChange={handleChange}
        />

        <div>
          <input type='submit' value='Add Student' className='submitBtn' />
        </div>
      </div>
    </form>
  );
};

export default Student;
