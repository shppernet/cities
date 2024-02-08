"use client";
import { mailLink, phoneNumber, receiverMail } from "@/helpers/socialLinks";
import axios from "axios";
import * as React from "react";
import { FieldValues, set, useForm } from "react-hook-form";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
export interface IContactFormProps {}

export default function ContactForm(props: IContactFormProps) {
  const pathName = usePathname();
  const router = useRouter();
  const [hostName, setHostName] = useState("");

  const [isModal, setIsModal] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const url = "https://formsubmit.co/ajax/" + receiverMail;
  const urlApi = "https://formspree.io/f/xnqepoqj";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    axios.defaults.headers.post["Content-Type"] = "application/json";

    await axios
      .post(urlApi, {
        Name: data.first_name + " " + data.last_name,
        Email: data.email,
        Topic: data.topic,

        Message: data.message,
      })
      .then((response) => {
        setIsSuccess(true);
        reset();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsModal(true);
      });
  };
  React.useEffect(() => {
    const domainName: string = window.location.host;
    setHostName(domainName);
  }, [setHostName]);
  return (
    <div className="flex h-full  justify-start bg-white pt-30 mt-auto">
      <div className="mx-auto w-full max-w-2xl p-6 ">
        <p className="mt-3 flex justify-between items-center">
          <span>
            Email us : <strong className="font-semibold">{mailLink}</strong>
          </span>
          <span>
            Call us : <strong className="font-semibold">{phoneNumber}</strong>
          </span>
        </p>
        {/*  <a href="mailto:nahianhasan161@gmail.com">Mail Open</a> */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          {/* <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> */}
          <div className="grid gap-6  sm:grid-cols-2">
            <div className="relative z-0 col-span-2 sm:col-span-1 ">
              <input
                type="text"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                {...register("first_name", {
                  required: "First name is required",
                })}
                disabled={isSubmitting}
              />
              <label
                className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
              
              "
              >
                First Name
              </label>

              {errors.first_name && (
                <p className="text-red-500">{`${errors.first_name.message}`}</p>
              )}
            </div>
            <div className="relative z-0 col-span-2 sm:col-span-1">
              <input
                type="text"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                {...register("last_name", {
                  required: "Last name is required",
                })}
                disabled={isSubmitting}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Last Name
              </label>

              {errors.last_name && (
                <p className="text-red-500">{`${errors.last_name.message}`}</p>
              )}
            </div>
            <div className="relative z-0 col-span-2">
              <input
                type="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                {...register("email", {
                  required: "Email name is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                disabled={isSubmitting}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Email
              </label>

              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
            </div>
            <div className="relative z-0 col-span-2">
              <input
                type="text"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                {...register("topic", {
                  required: "Topic is required",
                })}
                disabled={isSubmitting}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Topic
              </label>

              {errors.topic && (
                <p className="text-red-500">{`${errors.topic.message}`}</p>
              )}
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                rows={5}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be minimum 10 Characters",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Message must be maximum 1000 Characters",
                  },
                })}
                disabled={isSubmitting}
              ></textarea>
              <label
                className="absolute top-3 -z-10 origin-[0] -translate-y-7 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
              
              "
              >
                Your message
              </label>

              {errors.message && (
                <p className="text-red-500">{`${errors.message.message}`}</p>
              )}
            </div>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className={`  mt-10 w-full font-semibold rounded-md  px-10 py-2 text-white hover:scale-[102%] transition-all ease-in-out
            ${isSubmitting ? "bg-[#1f3043]/80" : "bg-[#1f3043]"}
            `}
          >
            <span className="flex gap-2 items-center justify-center">
              {isSubmitting && (
                <svg
                  className="w-5 h-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                >
                  <linearGradient id="a11">
                    <stop
                      offset="0"
                      stop-color="#FFFFFF"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="1" stop-color="#FFFFFF"></stop>
                  </linearGradient>
                  <circle
                    fill="none"
                    stroke="url(#a11)"
                    stroke-width="15"
                    stroke-linecap="round"
                    stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
                    cx="100"
                    cy="100"
                    r="70"
                    transform-origin="center"
                  >
                    <animateTransform
                      type="rotate"
                      attributeName="transform"
                      calcMode="discrete"
                      dur="2"
                      values="360;324;288;252;216;180;144;108;72;36"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </circle>
                </svg>
              )}
              Send Message
            </span>
          </button>
        </form>

        {/* modal */}
        {!isModal ? null : (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
              <div className="w-full">
                <div className="m-8 my-20 max-w-[400px] mx-auto">
                  <div className="mb-8">
                    <h1 className="mb-4 text-3xl font-extrabold ">
                      {isSuccess
                        ? "Message Successfully Sent"
                        : "Something went wrong"}
                    </h1>
                    <p className="text-gray-600">
                      {isSuccess
                        ? "We will get back to you as soon as posible."
                        : `Please contact Support: ${mailLink}`}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <button
                      className="p-3 bg-black rounded-full text-white w-full font-semibold"
                      onClick={() => setIsModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
