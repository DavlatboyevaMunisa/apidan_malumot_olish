import React from 'react';
import Post from './Post';

export default function Posts({data}) {

  return (
    <div>
        {data.map((post) => {
            return (
                <>
                <Post key={post.id} {...post} />
                </>
            )
        })}
    </div>
  )
}
