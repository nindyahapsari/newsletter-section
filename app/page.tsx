"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type InputEmail = {
  email: string;
};

const schema = z.object({
  email: z.string().email().min(5),
});

export default function Home() {
  const [userEmail, setUserEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputEmail>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    try {
      const sendUserEmail = async () => {
        const response = await fetch(
          "https://www.greatfrontend.com/api/projects/challenges/newsletter",
          {
            method: "POST",
            body: JSON.stringify({ email: userEmail }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 400 || response.status === 500) {
          const data = await response.json();
          setErrorMessage(data.message);
        }

        const data = await response.json();
        setSuccessMessage(data.message);
      };

      sendUserEmail();
    } catch (errors) {
      setErrorMessage(errors.message);
    }
  }, [userEmail]);

  const onSubmit = (data: { email: string }) => {
    setUserEmail(data.email);
    reset({ email: "" });
  };

  return (
    <div className="">
      {successMessage && (
        <div className="absolute top-32 left-1/3 rounded-2xl px-3 py-1 bg-green-100 flex flex-row gap-2 justify-center">
          <span className="my-auto">
            <div className="rounded-lg text-green-700 text-sm px-2 bg-white">
              Success
            </div>
          </span>
          <p className="text-green-700">{successMessage}</p>
        </div>
      )}

      {errorMessage && (
        <div className="absolute top-32 left-1/3 rounded-2xl px-3 py-1 bg-red-100 flex flex-row gap-2 justify-center">
          <span className="my-auto">
            <div className="rounded-lg text-red-600 text-sm px-2 bg-white">
              Error
            </div>
          </span>
          <p className="text-red-600">{errorMessage}</p>
        </div>
      )}

      <div className="h-screen flex flex-col desktop:flex-row justify-center items-center">
        <div className="desktop:w-1/3">
          <div className="px-10">
            <h1 className="text-5xl font-bold mb-10 leading-tight">
              Get the finest curated abstracts delivered weekly to your inbox
            </h1>
            <ul className="text-lg">
              <li className="my-5 flex flex-row gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#4e03fc"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p>Exclusive access to new abstracts images and collections</p>
              </li>
              <li className="my-5 flex flex-row gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#4e03fc"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p>Unlock special promotions only for subscribers</p>
              </li>
              <li className="my-5 flex flex-row gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#4e03fc"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p>Regular doses of artistic inspiration</p>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-5 px-2 flex flex-col items-center tablet:px-10 desktop:px-10 desktop:items-start">
              <div className="flex flex-col gap-2 items-center desktop:flex-row desktop:w-full">
                <input
                  type="text"
                  placeholder="Enter you email"
                  className="input input-bordered w-screen desktop:w-full "
                  {...register("email", { required: true })}
                />
                <button className="btn btn-primary w-full desktop:w-32 my-2">
                  Subscribe
                </button>
                {errors.email?.type === "invalid_string" && (
                  <p className="text-red-500 mt-2">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <p className="my-5">We only send you the best! No spam.</p>
            </div>
          </form>
        </div>

        <div>
          <Image
            src="/assets/abstract_cropped.webp"
            alt="Abstract art"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
