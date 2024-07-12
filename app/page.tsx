"use client";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Hero from "../components/Hero";
import SuccessAlert from "../components/SuccessAlert";
import ErrorAlert from "../components/ErrorAlert";

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
    <div>
      {successMessage && <SuccessAlert successMessage={successMessage} />}

      {errorMessage && <ErrorAlert errorMessage={errorMessage} />}

      <Hero
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
    </div>
  );
}
