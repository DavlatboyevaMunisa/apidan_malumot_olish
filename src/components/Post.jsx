import React from 'react'

export default function Post({title,id}) {
  return (
    <div>
        <h3>{title}</h3>
        <button onClick={() => removeItem(id)}>delete</button>
    </div>
  )
}
