import { useState } from 'react'
import Header from './components/Header';
import StoreList from './components/StoreList';
import './index.css';
import storeitems from './data/milkItems.json';
import Search from './components/Search'


function App() {
  const [posts, setPosts] = useState(storeitems);
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([])

  return (

    
    <div className="App">
      
      <Header />
      <Search  posts={posts} setSearchResults={setSearchResults}/>
       <StoreList posts = {posts} page={page} setPage={setPage} searchResults={searchResults} />
    </div>
  )
}

export default App
