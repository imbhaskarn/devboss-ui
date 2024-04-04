"use client";
import Link from "next/link";
import Image from "next/image";
import { StarFilledIcon, BadgeIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LuFileBadge2 } from "react-icons/lu";
import { MdOutlineModeComment, MdOutlineBookmarkBorder } from "react-icons/md";

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
      <article className="w-full  p-6 border-indigo-100  border-b-2 lg:border-none lg:max-w">
        <div className="flex justify-center items-center flex-col">
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
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="text-sm flex justify-center items-center text-indigo-600">
                <LuFileBadge2 size={20} />{" "}
                <p className="hidden pl-2 sm:block"> Featured </p>
              </div>
            </div>
          </div>
          <div className="borer rounded-lg border-indigo-200">
            <div className="flex gap-2 flex-col sm:flex-row sm:justify-start sm:items-center">
              <div className="flex flex-col items-start justify-center">
                <div>
                  <h1 className="test-base sm:text-xl mb-1 font-semibold text-left">
                    {article.title}
                  </h1>
                </div>
                <div className="text-left hidden sm:block">
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
              <div className="flex justify-center items-center lg:hidden">
                <div className="max-w-2xl lg:max-w-xs lg:min-w-48">
                  <Image
                    objectFit="cover"
                    layout="responsive"
                    width={200}
                    height={200}
                    alt="cover"
                    className="rounded-lg float-right aspect-video"
                    src={"/valley.jpg"}
                  />
                </div>
              </div>
              <div className="hidden lg:flex lg:justify-center lg:items-center">
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
          </div>

          <div className="w-full flex justify-start items-center">
            <section className="flex w-full flex-col gap-5">
              <div className="p-3 flex flex-row items-center justify-between text-slate-600 dark:text-slate-300 text-sm ">
                <div className="flex flex-row items-center justify-start gap-2">
                  <Link href="/discussions/post/660e8c6f382d9a32cf9928bb?source=discuss_feed_card_button">
                    <div className="flex gap-2 justify-center items-center">
                      <MdOutlineModeComment size={20} />
                      <span className="css-m0svy7">Discuss</span>
                    </div>
                  </Link>
                  <span className="flex justify-center items-center">
                    <p className="text-nowrap"> {article.likes} likes </p>
                  </span>
                </div>
                <div className="w-full flex-row items-center justify-end flex gap-1">
                  <button
                    className="bookmark-button"
                    aria-label="Bookmark post"
                    data-state="closed"
                  >
                    <span className="text-slate-500 dark:text-slate-400 group-hover:text-blue-600">
                      <MdOutlineBookmarkBorder size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
