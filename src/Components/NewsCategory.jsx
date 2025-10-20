import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const NewsCategory = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(id, data);
  const [newsCategory, setNewsCategory] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setNewsCategory(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setNewsCategory(filteredNews);
    } else {
      const filtered = data.filter((news) => news.category_id == id);
      console.log(filtered);
      setNewsCategory(filtered);
    }
  }, [id, data]);
  return (
    <div>
      <h2 className="font-bold">
        Total <span className="text-secondary">{newsCategory.length}</span> News
        Found
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {newsCategory.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default NewsCategory;
