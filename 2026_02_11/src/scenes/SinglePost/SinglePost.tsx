import { useEffect, useState } from "react"
import type {Post} from "../../types/Post/Post.ts";
import type {Comment} from "../../types/Comment/Comment.ts";
import type {User} from "../../types/User/User.ts";

import styles from './SinglePost.module.scss'
import {useParams} from "react-router";

export default function SinglePost() {
  const [post, setPost] = useState<Post>()
  const [user, setUser] = useState<User>()
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const id = useParams().id
  let uid:number

  useEffect(() => {
    (() => {
      setIsLoading(true)
    })()
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => response.json())
      .then((json: Post) => {
        setPost(json)
        console.log(json)
        uid = json.userId
      })
      .then(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + uid)
            .then(response => response.json())
            .then((json: User) => {
              setUser(json)
            })
            .catch(() => {
              setIsError(true)
            })
            .finally(() => {
              setIsLoading(false)
            })
      })

    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
      .then(response => response.json())
        .then((json: Comment[])=> {
          setComments(json)
        })
        .catch(() => {
          setIsError(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
  }, []);


  return (
    <div className={styles.Posts}>
      {isLoading && (
        <div className={styles.PostsLoading}>
          <div className={styles.PostsLoadingLoader}>
            <div></div>
          </div>

          Trwa ładowanie...
        </div>
      )}
      {isError && (
        <div className={styles.PostsError}>
          Wystąpił nieoczekiwany błąd 😭
        </div>
      )}
      {!isLoading && !isError && (
        <>
          {post === undefined && (
            <div className={styles.PostsError}>
              Post znik 🤡
            </div>
          )}
          {post !== undefined && (
            <div className={styles.PostsPost} key={post.id}>
              <p className={styles.PostsPostUser}>
                {user?.username}
              </p>
              <h5 className={styles.PostsPostTitle}>
                {post.title}
              </h5>
              <p className={styles.PostsPostBody}>
                {post.body}
              </p>
            </div>
          )}
          {comments.map(c => (
            <div className={styles.PostsComment} key={c.id}>
              <p className={styles.PostsCommentUser}>
                {c.email.includes('@')
                    ? c.email.split('@')[0]
                    : c.email
                }
              </p>
              <h5 className={styles.PostsCommentTitle}>
                {c.name}
              </h5>
              <p className={styles.PostsCommentBody}>
                {c.body}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
