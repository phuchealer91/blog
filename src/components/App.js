import React from 'react';
import PostList from './PostList';

function App() {
  return (
    <div className="ui container" style={{marginTop: '20px'}}>
    <div className="ui segment">
        <PostList />
    </div>
    </div>
  );
}

export default App;
