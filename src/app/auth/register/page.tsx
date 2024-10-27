"use client";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockUnlockLine } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa6";
import DefaultInput from "@/components/common/DefaultInput";
import { useRef, useState } from "react";
import Link from "next/link";
// https://www.pinterest.com/pin/339529259418274829/
export default function RegisterPage() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [isVisible, setIsVisible] = useState({
    password: false,
    confirmPassword: false,
  });
  return (
    <div className="w-full h-full grid grid-cols-[1fr_2fr]">
      <div className="w-full h-full flex items-center">
        <div className="w-4/5 mx-auto px-4 flex flex-col gap-8">
          <h1 className="font-bold text-2xl">Welcome Back!</h1>

          {/* login */}
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <p className="">New here?</p>
            <Link
              href="/auth/login"
              className="border border-blue-sea rounded-full w-3/5 mx-auto py-2 text-center"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center">
        <form className="w-4/5 mx-auto px-4 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <DefaultInput
              name="name"
              id="name"
              placeholder="NAME"
              ref={nameRef}
              icon={<IoPersonOutline />}
            />
            <DefaultInput
              name="email"
              id="email"
              placeholder="EMAIL"
              type="email"
              ref={emailRef}
              icon={<HiOutlineMail />}
            />
            <DefaultInput
              name="password"
              id="password"
              placeholder="PASSWORD"
              type={isVisible.password ? "text" : "password"}
              ref={passwordRef}
              icon={<RiLockUnlockLine />}
              isVisible={isVisible.password}
              isClickable={true}
              onVisibleClick={() =>
                setIsVisible((prev) => ({ ...prev, password: !prev.password }))
              }
            />
            <DefaultInput
              name="confirmPassword"
              id="confirmPassword"
              placeholder="CONFIRMPASSWORD"
              type={isVisible.confirmPassword ? "text" : "password"}
              ref={confirmPasswordRef}
              icon={<FaCheckDouble />}
              isVisible={isVisible.confirmPassword}
              isClickable={true}
              onVisibleClick={() =>
                setIsVisible((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }))
              }
            />
          </div>
          <button
            type="submit"
            className="bg-blue-sea text-white rounded-full w-3/5 mx-auto py-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
