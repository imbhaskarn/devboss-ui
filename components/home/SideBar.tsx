import React from "react";
import Link from "next/link";
const SideBar = () => {
  const data = {
    categories: ["Food", "Travel", "Lifestyle", "Tech"],

    recentPosts: [
      {
        title: "The Best Way to Cook a Perfect Steak",
        image: "/valley.jpg",
        category: "Food",
        tags: ["Cooking", "Recipes", "Steak"],
        likes: 50,
        slug: "the-best-way-to-cook-a-perfect-steak",
      },
      {
        title: "Exploring the Wilderness",
        image: "/forest.jpg",
        category: "Travel",
        tags: ["Adventure", "Nature", "Exploration"],
        likes: 30,
        slug: "exploring-the-wilderness",
      },
      {
        title: "The Art of Photography",
        image: "/camera.jpg",
        category: "Art",
        tags: ["Photography", "Art", "Creativity"],
        likes: 70,
        slug: "the-art-of-photography",
      },
      {
        title: "Healthy Living: Mind and Body",
        image: "/yoga.jpg",
        category: "Health",
        tags: ["Wellness", "Fitness", "Mindfulness"],
        likes: 45,
        slug: "healthy-living-mind-and-body",
      },
      {
        title: "Artificial Intelligence: A Primer",
        image: "/ai.jpg",
        category: "Technology",
        tags: ["AI", "Technology", "Future"],
        likes: 40,
        slug: "artificial-intelligence-a-primer",
      },
      {
        title: "The Joy of Reading",
        image: "/book.jpg",
        category: "Literature",
        tags: ["Books", "Reading", "Literature"],
        likes: 75,
        slug: "the-joy-of-reading",
      },
      {
        title: "Exploring the Cosmos",
        image: "/cosmos.jpg",
        category: "Science",
        tags: ["Space", "Cosmos", "Astronomy"],
        likes: 90,
        slug: "exploring-the-cosmos",
      },
    ],
  };

  return (
    <div className="rounded-lg border border-indigo-200 w-full h-auto p-6 hidden lg:block lg:min-w-72">
      <div>
        <div className="flex flex-col gap-2">
          {data.recentPosts.map((post, index) => (
            <div key={index} className="flex gap-3 justify-start items-center">
              <span className="rounded bg-indigo-500 text-zinc-200 text-sm p-2">
                {post.likes}
              </span>
              <Link href={`/articles/${post.slug}`}>
                <p className="text-sm text-indigo-500">{post.title}</p>{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
