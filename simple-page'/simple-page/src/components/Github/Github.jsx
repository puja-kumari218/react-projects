import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-10 py-8 text-center flex flex-col items-center gap-4">
        <img
          src={data.avatar_url}
          alt="GitHub Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-200"
        />
        <h1 className="text-2xl font-bold text-gray-800">{data.login}</h1>
        <p className="text-gray-500 text-sm">Data fetched from GitHub API via useLoaderData()</p>
        <div className="bg-green-50 text-green-700 font-semibold px-6 py-2 rounded-full">
          Followers: {data.followers}
        </div>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/puja-kumari218");
  return response.json();
};