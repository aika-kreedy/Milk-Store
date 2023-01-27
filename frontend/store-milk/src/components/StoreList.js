
import '../index.css';


const  StoreList = ({posts,page,setPage,searchResults}) => {

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= posts.results.length / 9 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  const results = searchResults.map(post => <StoreList key={post.results.id} post={post} />)

  const content = results?.length ? results : <article><p>No Matching Products</p></article>

  return (
    <div>
        <div>
        <main>{content}</main>
          <h3>{posts.count} products</h3>
          <div className='card'>
            {(posts.results).slice(page *9-9,page*9).map(item =>(
              <div className="one-card" key={item.id} >
              <img src="/imgs/milk.png" alt= {item.name} />
              <div  className="container" >
                <h3>{item.name}</h3>
                <h4 color=''>{item.type}</h4> 
                <h5>{item.storage} Liter</h5>
                <p><button>Order Milk</button></p>
                </div>
                </div>)
                  )}
                  {(posts.results).length>0 && (<div className='pagination'>
                    <span>◀️</span>
                  {
                  [...Array((posts.results).length / 9)].map((_, i) =>
                  { return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
    
        })}
            
            <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>▶️</span>
            </div>)}
            </div>
        </div>

    </div>
  )
}

export default StoreList