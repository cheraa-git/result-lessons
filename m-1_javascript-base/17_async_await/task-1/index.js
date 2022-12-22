const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
const _createNewPost = async () => {
  let isLoading = false
  try {
    isLoading = true
    const response = await fetch(POSTS_URL, {method: "POST"})
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.log('error', error)
  } finally {
    isLoading = false
  }
}
_createNewPost()
