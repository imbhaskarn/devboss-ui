"use client";
import Link from "next/link";
import Image from "next/image";
import { StarFilledIcon, BadgeIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const article: any = {
  title: "The Best Way to Cook a Perfect Steak",
  description:
    "Learn how to cook a perfect steak every time with this easy-to-follow guide.Learn how to cook a perfect steak every time with this easy-to-follow guide.Learn how to cook a perfect steak every time with this easy-to-follow guide. Learn how to cook a perfect steak every time with this easy-to-follow guide.Learn how to cook a perfect steak every time with this easy-to-follow guide.",
  image: "/valley.jpg",
  category: {
    name: "Food",
    url: "/categories/food",
  },
  tags: ["Cooking", "Recipes", "Steak"],
  likes: 50,
  author: {
    name: "John Doe",
    role: "Food Enthusiast",
    avatar: "/images/john-doe.jpg",
    url: "/authors/john-doe",
    body: {
      code: `John Doe is a food enthusiast who loves to cook and share his recipes with the world.`,
    },
  },
};

export default function Article() {
  return (
    <>
      {" "}
      <article className="bg-gray-50 w-full rounded-lg border-blue-200 border  p-6">
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="w-full flex justify-between items-center rounded-lg">
            <div className="flex justify-center items-center">
              <div className="pr-4">
                {" "}
                <Image
                  src={"/valley.jpg"}
                  alt={"profile image"}
                  width={48}
                  height={48}
                  className="text-sm rounded-full aspect-square object-cover"
                />{" "}
              </div>
              <div className="flex text-sm text-center justify-center items-center">
                <h2>
                  <Link
                    className="text-indigo-500 hover:text-indigo-600"
                    href={article.author.url}
                  >
                    {article.author.name}
                  </Link>
                </h2>
                <p className="px-4">{article.author.role}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Badge className="text-sm rounded-full border border-indigo-100 text-indigo-600 bg-indigo-100 hover:bg-indigo-100">
                <BadgeIcon width={24} height={24} />{" "}
                <p className="pl-2"> Featured </p>
              </Badge>
            </div>
          </div>
          <div className="flex justify-start gap-4">
            <div className="flex flex-col items-start justify-center">
              <div>
                <h1 className="text-2xl font-semibold text-left">
                  {article.title}
                </h1>
              </div>
              <div className="text-left">
                <p>
                  {article.description.slice(0, 180) + "..."}
                  <Link
                    className="text-indigo-500"
                    href={`/article/${article.path}`}
                  >
                    {" "}
                    read more{" "}
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="max-w-xs min-w-48">
                <Image
                  width={200}
                  height={200}
                  alt="cover"
                  className="rounded-lg float-right aspect-video"
                  src={"/valley.jpg"}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center">
            <div> {article.likes} </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </article>{" "}
      <article className="bg-gray-50 w-full rounded-lg border-blue-200 border  p-6">
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="w-full flex justify-between items-center rounded-lg">
            <div className="flex justify-center items-center">
              <div className="pr-4">
                <Avatar>
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </span>

                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex text-sm text-center justify-center items-center">
                <h2>
                  <Link
                    className="text-indigo-500 hover:text-indigo-600"
                    href={article.author.url}
                  >
                    {article.author.name}
                  </Link>
                </h2>
                <p className="px-4">{article.author.role}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Badge className="text-sm rounded-full border border-indigo-100 text-indigo-600 bg-indigo-100 hover:bg-indigo-100">
                <BadgeIcon width={24} height={24} />{" "}
                <p className="pl-2"> Featured </p>
              </Badge>
            </div>
          </div>
          <div className="flex justify-start gap-4">
            <div className="flex flex-col items-start justify-center">
              <div>
                <h1 className="text-2xl font-semibold text-left">
                  {article.title}
                </h1>
              </div>
              <div className="text-left">
                <p>
                  {article.description.slice(0, 180) + "..."}
                  <Link
                    className="text-indigo-500"
                    href={`/article/${article.path}`}
                  >
                    {" "}
                    read more{" "}
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="max-w-xs min-w-48">
                <Image
                  width={200}
                  height={200}
                  alt="cover"
                  className="rounded-lg float-right aspect-video"
                  src={"/valley.jpg"}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center">
            <div> {article.likes} </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </article>
    </>
  );
}
