function genCrsInfo(courseInfo = {}) {
  const defaultInfo = {
    courseName: 'ES6',
    courseDuration: '3 days',
    courseOwner: 'JavaScript'
  };

  const checkk = Object.keys(courseInfo).filter(prop => !(prop in defaultInfo));
  if (checkk.length > 0) {
    throw new Error(`Unexpected properties: ${checkk.join(', ')}`);
  }

  const finalInfo = { ...defaultInfo, ...courseInfo };

  console.log('Course Information:');
  console.log(`Course Name: ${finalInfo.courseName}`);
  console.log(`Course Duration: ${finalInfo.courseDuration}`);
  console.log(`Course Owner: ${finalInfo.courseOwner}`);
}

const courseInfo = {
  courseName: 'ESNext',
  courseDuration: '2 days',
  courseOwner: 'Information Technology Institute'
};

genCrsInfo(courseInfo);
genCrsInfo({ c: "Test",  courseDuration: "3" , courseOwner: "Khaled"});

