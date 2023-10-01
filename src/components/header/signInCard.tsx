import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "@/store";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useFetch } from "@/hooks/useFetch";
export const SignInCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const showLogin = useSelector((state: any) => state.signIn.showLogin);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, className: "-z-10" }}
      transition={{ duration: 0.2 }}
      animate={{ opacity: 1, className: "z-10" }}
      exit={{ opacity: 0 }}
      className="overflow-visible fixed inset-0 z-10 flex justify-center items-center bg-gray-900 bg-opacity-50"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(toggleLogin());
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <form
          onSubmit={handleSubmit((data) => console.log(data)
            useFetch("http://localhost:3000/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: watch("email"),
                password: watch("password"),
              }),
            })
              .then((data) => console.log(data))
              .catch((error) => console.log(error));
              data: null,
              isPending: false,
              error: null,
            }).catch((error) => console.log(error));

            )}
          className="space-y-6"
          action="#"
        >
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
            <span>
              {errors.email && (
                <p className="text-red-500">This field is required</p>
              )}
            </span>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,16}$/,
              })}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
            <span>
              {errors.password && (
                <p className="text-red-500">This field is required</p>
              )}
            </span>
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  {...register("remember", { required: true })}
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
