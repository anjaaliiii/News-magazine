import NewsItem from "./NewsItem";
import { useEffect } from "react";
import { useState } from "react";


const NewsBoard = ({category}) => {
   
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        const url = `https://gnews.io/api/v4/top-headlines?country=us&lang=en&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data => {console.log(data); setArticles(data.articles || []);}).catch(err => console.error(err));
    },[]);
  return (
    <div>
       <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
   {articles.length === 0 && (
  <p className="text-center mt-4">No news available right now.</p>
)}

{articles.length === 0 && (
  <p className="text-center mt-4">No news available right now.</p>
)}

{Array.isArray(articles) && articles.map((news, index) => (
  <NewsItem
    key={index}
    title={news.title}
    description={news.description}
    src={news.image}
  />
))}


       
    
    </div>
  )
}

export default NewsBoard
