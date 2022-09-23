import Link from 'next/link';
import React from 'react';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'eb94e4f8b7msh0ec80a5de6b6671p1d3c0cjsnbfb99a4eece1',
    'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
  },
};
const newIdReducer = (state, action) => {
  if (action.type === 'success') {
    return {
      ...state,
      id: action.data.slice(0, 10),
    };
  }
};

const newPostReducer = (state, action) => {
  if (action.type === 'success') {
    return {
      ...state,
      newTitle: [...state.newTitle, action.data.title],
      url: [...state.url, action.data.url],
      user: [...state.user, action.data.by],
      id: [...state.id, action.data.id],
    };
  }
};

export function NewPosts() {
  const [ids, dispatchIds] = React.useReducer(newIdReducer, { id: null });
  const [posts, dispatchPosts] = React.useReducer(newPostReducer, {
    newTitle: [],
    url: [],
    user: [],
    id: [],
  });
  React.useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((response) => {
        dispatchIds({ type: 'success', data: response });
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);
  React.useEffect(() => {
    if (ids.id) {
      ids.id.map((index) => {
        fetch(
          `https://community-hacker-news-v1.p.rapidapi.com/item/${index}.json?print=pretty`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            dispatchPosts({ type: 'success', data: response });
            console.log(response);
          })
          .catch((err) => console.error(err));
      });
    }
  }, [ids.id]);
  return (
    <div className='container mt-2'>
      {posts.id ? (
        posts.id.map((id, index) => (
          <div key={id} className='card bg-dark-background mb-2'>
            <a href={posts.url[index]}>
              <h2 className='font-md grotesk text-primary underline'>
                {posts.newTitle[index]}
              </h2>
            </a>

            <p className='grotesk font-sm o-80 mt-1'>
              By : {posts.user[index]}
            </p>
          </div>
        ))
      ) : (
        <div className='container display-f justify-center font-lg'>
          Loading...
        </div>
      )}
    </div>
  );
}
