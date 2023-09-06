const Display = ({ students }) => {
  return (
    <div className='display viewPage'>
      <h2 style={{ fontWeight: 'black', marginBottom: '20px' }}>
        List of Students:{' '}
      </h2>
      {students.map((u) => (
        <div key={u.id}>
          <div className='item'>
            <div style={{ marginRight: '10px' }}>
              <img src='1.png' alt='user' width={40} />
            </div>
            <div>
              <h3>{u.name}</h3>
              <p>@{u.username}</p>
            </div>
          </div>
          <hr className='m-10' />
        </div>
      ))}
    </div>
  );
};

export default Display;
