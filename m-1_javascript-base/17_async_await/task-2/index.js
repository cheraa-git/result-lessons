const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTodosByIds_ = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
    const response = await Promise.all(requests)
    const dataResults = response.map((data) => data.json())
    const allTasks = await Promise.all(dataResults)
    console.log(allTasks)
  } catch (error) {
    console.log('error', error)
  }
}

getTodosByIds_([43, 21, 55, 100, 10])

