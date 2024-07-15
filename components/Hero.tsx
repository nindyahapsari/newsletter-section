import Image from "next/image";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

type FormValues = {
  email: string;
};

type HeroProps = {
  onSubmit: SubmitHandler<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

export default function Hero({
  onSubmit,
  handleSubmit,
  register,
  errors,
}: HeroProps) {
  return (
    <div className="h-screen flex flex-col my-12 desktop:justify-center desktop:items-center desktop:flex-row ">
      <div className="desktop:w-1/3">
        <div className="px-4">
          <h1 className="text-4xl font-bold mb-8 leading-tight tablet:text-5xl desktop:text-6xl ">
            Get the finest curated abstracts delivered weekly to your inbox
          </h1>
          <ul className="text-lg">
            <li className="my-4 flex flex-row gap-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#4338ca"
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
                  fill="#4338ca"
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
                  fill="#4338ca"
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
          <div className="my-4 px-4 flex flex-col items-center tablet:items-start desktop:px-8 desktop:items-start">
            <div className="flex flex-col w-screen px-4 tablet:px-0 items-center tablet:flex-row desktop:flex-row desktop:w-full desktop:gap-4 desktop:px-0">
              <input
                type="text"
                placeholder="Enter you email"
                className="input input-bordered w-full tablet:w-3/6 desktop:w-full "
                {...register("email", { required: true })}
              />
              <button className="btn bg-indigo-700 text-white border-none w-full my-4 tablet:w-32 tablet:mx-4 desktop:w-32 ">
                Subscribe
              </button>
              {errors.email?.type === "invalid_string" && (
                <p className="text-red-500 mt-2">
                  Please enter a valid email address
                </p>
              )}
            </div>
            <p className="my-4">We only send you the best! No spam.</p>
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
  );
}
