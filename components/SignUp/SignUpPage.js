import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../common/Form/Form";
import { FormInput } from "../common/FormInput/FormInput";
import { FiShoppingCart } from "react-icons/fi";
import Button from "../common/Button/Button";
import SignUpPageAPI from "./SignUpPageAPI";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setToken } from "../../store/reducers/authSlice";

const signupPageAPI = new SignUpPageAPI("http://localhost:3003/");
const SignUpPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = async (data) => {
    const response = await signupPageAPI.signup({ ...data, rolId: 1 });
    if (response.token) {
      dispatch(setToken(response.token));
      router.push("/");
    }
    console.log(response);
  };
  const onError = (errors) => {
    console.log(errors);
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
            title={"Name"}
            name="name"
            validations={{
              required: "Name is required",
              maxLength: {
                value: 150,
                message: "Name exceeds 150 characters",
              },
            }}
          ></FormInput>
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

          <div className="justify-center flex my-3">
            <Button type="submit">Sign Up</Button>
          </div>
        </Form>
        <hr></hr>
        <div className="flex justify-around pt-4">
          <button className="text-xs transition-all transform">
            Forgot your password?
          </button>
          <Link href={"/signin"}>
            <button className="text-xs transition-all transform">
              {"Already have an account?"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
