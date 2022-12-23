async function renderPost(postId) {
  const POSTS_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`
  const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`

  try {
    const [postResponse, commentsResponse] = [await fetch(POSTS_URL), await fetch(COMMENTS_URL)]
    if (!postResponse.ok || !commentsResponse.ok) throw new Error('Ошибка запроса')
    const [post, comments] = [await postResponse.json(), await commentsResponse.json()]

    const commentsHtml = comments.map(comment => `
        <div class="post-comment">
          <span class="post-comment__author">${comment.email}</span>
          <span class="post-comment__text">${comment.body}</span>
        </div>
  `).join('')

    document.body.innerHTML = `
    <div id="post" class="post">
      <h1 class="post__title">${post.title}</h1>
      <p class="post__text">${post.body}</p>
      <b class="post__comments-text">Комментарии</b>
      <div class="post__comments">
        ${commentsHtml}
      </div>
    </div>
  `
  } catch (error) {
    console.error(error)
  }
}

renderPost(1)

