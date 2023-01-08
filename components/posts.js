import React from 'react'

const idReducer = (state, action) => {
  if (action.type === 'success') {
    return [...action.data.slice(0, 10)]
  }
}

const postReducer = (state, action) => {
  if (action.type === 'success') {
    console.log(action.data)
    return {
      ...state,
      title: [...state.title, action.data.title],
      url: [...state.url, action.data.url],
      user: [...state.user, action.data.by],
      id: [...state.id, action.data.id],
    }
  }
}

export function Posts() {
  const [ids, dispatchIds] = React.useReducer(idReducer, [])
  const [posts, dispatchPosts] = React.useReducer(postReducer, {
    title: [],
    url: [],
    user: [],
    id: [],
  })
  React.useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((response) => {
        dispatchIds({ type: 'success', data: response })
      })
      .catch((err) => console.error(err))
  }, [])

  React.useEffect(() => {
    if (ids) {
      ids.map((index) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${index}.json?print=pretty`)
          .then((response) => response.json())
          .then((response) => {
            dispatchPosts({ type: 'success', data: response })
            console.log(response)
          })
          .catch((err) => console.error(err))
      })
    }
  }, [ids])

  return (
    <div className='container mt-2'>
      {posts.id ? (
        posts.id.map((id, index) => (
          <div key={id} className='card bg-dark-background mb-1'>
            <a href={posts.url[index]}>
              <h2 className='font-md grotesk text-primary underline'>{posts.title[index]}</h2>
            </a>

            <p className='lato font-sm o-80 mt-1'>By : {posts.user[index]}</p>
          </div>
        ))
      ) : (
        <div className='container display-f justify-center font-lg'>Loading...</div>
      )}
    </div>
  )
}
