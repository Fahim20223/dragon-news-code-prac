import React, { useState } from "react";
import {
  FaBookmark,
  FaShareAlt,
  FaStar,
  FaRegStar,
  FaEye,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-100 hover:shadow-xl transition duration-200 mt-5">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4 bg-base-300">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>
      <div>
        <h2 className="card-title text-lg font-bold p-3">{title}</h2>
      </div>
      {/* Thumbnail */}
      <figure className="p-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full object-cover rounded-xl"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        <p className="text-gray-700 text-sm">
          {expanded ? details : `${details.slice(0, 200)}...`}
        </p>

        <button
          className="text-secondary text-sm font-semibold hover:underline mt-1"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-outline text-gray-600 font-medium"
            >
              #{tag}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
          {/* Rating */}
          <div className="flex items-center space-x-1 text-orange-400">
            {[...Array(5)].map((_, i) =>
              i < rating.number ? (
                <FaStar key={i} />
              ) : (
                <FaRegStar key={i} className="text-gray-300" />
              )
            )}
            <span className="ml-1 text-gray-700 font-medium text-sm">
              {rating.number.toFixed(1)}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center space-x-1 text-gray-500">
            <FaEye />
            <span className="text-sm font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
