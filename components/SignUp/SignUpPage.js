import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../common/Form/Form";
import { FormInput } from "../common/FormInput/FormInput";
import { FiShoppingCart } from "react-icons/fi";

const SignUpPage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (errors) => {
    console.log(errors);
    let errorMessage = "";
    const errorsKeys = Object.keys(errors);
    errorsKeys.forEach((error, index) => {
      errorMessage +=
        errors[error].message + (index + 1 != errorsKeys.length ? " , " : " ");
    });
    console.log(errorMessage);
  };
  return (
    <div className="min-h-screen bg-background w-full flex justify-center items-center bg-green px-5">
      <div className="sm:max-w-lg bg-white w-full p-10 shadow-md border">
        <h3 className="text-2xl font-semibold justify-center items-center flex pb-5">
          <FiShoppingCart className="mr-3 text-dark fill-light"></FiShoppingCart>
          Sign Up
        </h3>
        <Form onSubmit={onSubmit} onError={onError}>
          <FormInput
            title={"Email"}
            name="email"
            validations={{
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email is not valid",
              },
              maxLength: {
                value: 150,
                message: "Email exceeds 150 characters",
              },
            }}
          ></FormInput>
          <FormInput
            title={"Password"}
            name="password"
            type="password"
            validations={{
              required: "Password is required",
              maxLength: {
                value: 75,
                message: "Password exceeds 75 characters",
              },
            }}
          ></FormInput>
          <FormInput
            title={"Confirm password"}
            name="confirmPassword"
            type="password"
            validations={{
              required: "Confirm password is required",
              maxLength: {
                value: 75,
                message: "Confirm password exceeds 75 characters",
              },
            }}
          ></FormInput>

          <button
            className="py-2 px-4 mb-4 mx-auto bg-primary text-white block active:scale-95 transition-all transform"
            type="submit"
          >
            Sign Up
          </button>
        </Form>
        <hr></hr>
        <div className="flex justify-around pt-4">
          <button className="text-xs hover:scale-105 transition-all transform">
            Forgot your password?
          </button>
          <Link href={"/signup"}>
            <button className="text-xs hover:scale-105 transition-all transform">
              {"Don't have an account?"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
