import { useLoaderData } from "react-router-dom";


const Github = () => {
    const data = useLoaderData();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Github followers: {data.followers}</h1>
          <img src={data.avatar_url} alt="Profile" className="rounded-full w-32 h-32" />
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Luciferxgkp");
    return response.json();
}