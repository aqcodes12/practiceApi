import axios from "axios";
import React, { useState } from "react";

const PostApi = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqbody = {
      name: name,
      job: job,
    };
    console.log(reqbody);
    try {
      const res = await axios.post("https://reqres.in/api/users");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid place-items-center my-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="John"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="job"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Job
            </label>
            <input
              type="text"
              id="job"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="job here"
              onChange={(e) => setJob(e.target.value)}
              required
            />
          </div>
          <div className="my-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostApi;
