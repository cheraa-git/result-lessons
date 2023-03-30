import { FC } from 'react'
import { Link } from 'react-router-dom'

export const PostList: FC<{ posts: { id: number, label: string }[] }> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <h3>{post.label}</h3>
        </Link>
      ))}
    </>
  )
}
