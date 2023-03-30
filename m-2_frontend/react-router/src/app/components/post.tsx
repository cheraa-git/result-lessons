import { FC } from 'react'
import { useHistory } from 'react-router-dom'

interface PostProps {
  id: string
  posts: { id: number, label: string }[]
}

export const Post: FC<PostProps> = ({ posts, id }) => {
  const history = useHistory()
  const getPostById = (id: string) => {
    return posts.find(post => post.id.toString() === id)
  }

  const handleSave = () => {
    history.replace('/posts')
  }

  const post = getPostById(id)
  return (
    <>
      <h2>{post ? post.label : `Post with id: ${id} not found`}</h2>
      <button onClick={handleSave}>Сохранить</button>
    </>
  )
}
