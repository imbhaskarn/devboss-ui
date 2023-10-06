import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, toggleAuthState } from "@/store";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axiosInstance from "@/utils/axios/axios";
import { setRefreshToken, setAccessToken, setUser } from "@/store";

export const SignInCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const showLogin = useSelector((state: any) => state.signIn.showLogin);
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    axiosInstance
      .post("/auth/login", values)
      .then((res) => {
        console.log(res.data);
        dispatch(toggleLogin());
        dispatch(setAccessToken(res.data.data.accessToken));
        dispatch(setRefreshToken(res.data.data.refreshToken));
        dispatch(setUser(res.data.data.user));
        dispatch(toggleAuthState());
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(values);
  };

  return (
    <motion.div
      initial={{ opacity: 0, className: "-z-10" }}
      transition={{ duration: 0.2 }}
      animate={{ opacity: 1, className: "z-10" }}
      exit={{ opacity: 0 }}
      className="overflow-visible fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"
      onClick={(e) => {
        dispatch(toggleLogin());
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          action="#"
        >
          <h5 className="text-xl font-medium text-gray-900">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
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
              className="block mb-2 text-sm font-medium text-gray-900"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
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
                  {...register("remember")}
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Create account
            </a>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
