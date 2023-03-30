import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Post } from './post'
import { PostList } from './postList'

export const Posts: FC = () => {
  const { postId } = useParams<{ postId?: string }>()
  const posts = [
    { id: 1, label: 'post 1' },
    { id: 2, label: 'post 2' },
    { id: 3, label: 'post 3' }
  ]
  return (
    <>
      {postId ? <Post id={postId} posts={posts}/> : <PostList posts={posts}/>}
    </>
  )
}
