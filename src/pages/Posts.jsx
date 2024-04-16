import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPost(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center  gap-5 ">
        {post.map((pst, index) => {
          return (
            <div key={index} className="w-56">
              <div className="bg-gray-100 p-5 rounded-lg">
                <img src={pst.thumbnailUrl} alt="" />
                <p>{pst.id}</p>
                <p>{pst.title}</p>
                <p>{pst.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
