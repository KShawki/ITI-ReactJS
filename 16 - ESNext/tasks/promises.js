async function promisess(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP Error: ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Request failed: ' + error.message);
  }
}

promisess("https://jsonplaceholder.typicode.com/users")
  .then((data) => { console.log(data); })
  .catch((err) => { console.error(err);});
