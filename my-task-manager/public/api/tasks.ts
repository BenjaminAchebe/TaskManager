export async function getTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const tasks = await response.json();
    return tasks;
  }

  console.log(getTasks)
  