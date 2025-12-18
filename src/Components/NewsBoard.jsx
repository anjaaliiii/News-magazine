import NewsItem from "./NewsItem";
import { useEffect } from "react";
import { useState } from "react";


const NewsBoard = ({category}) => {
   
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://corsproxy.io/?https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

        fetch(url).then(response=>response.json()).then(data => setArticles(data.articles));
    },[])
  return (
    <div>
       <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
   {articles.length === 0 && (
  <p className="text-center mt-4">No news available right now.</p>
)}

{Array.isArray(articles) && articles.map((news, index) => {
  return (
    <NewsItem
      key={index}
      title={news.title}
      description={news.description}
      src={news.urlToImage}
    />
  );
})}

       
    
    </div>
  )
}

export default NewsBoard
