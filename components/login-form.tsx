"use client";

import * as z from "zod";
import Link from "next/link";
import { FormWrapper } from "./ui/form-wrapper";
import Button from "@mui/material/Button";
import { useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Form, FormField, FormItem, FormMessage, FormControl } from "./ui/form";
import { FormError } from "./ui/form-error";
import { Input } from "./ui/input";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider"
    : "";
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const showPasswordSettings = () => {
    setShowPassword(prev => !prev)
  }

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    setError("");
    const validatedFields = LoginSchema.safeParse(values);
    console.log(values);

    if (!validatedFields.success) {
      setError("Invalid Fields");
    } else {
      try{
        //POST values to API
      } catch(error){
        console.error(error);
      } finally{
        setIsLoading(false);
        redirect('/users')
      }
    }
  };

  return (
    <div className="form-details">
      <FormWrapper headerLabel="Welcome!" messageNote="Enter details to login.">
        <Form {...form}>
        <form className="form-content" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem  >
                  <FormControl className="form-control">
                    <Input
                      {...field}
                      placeholder="Email"
                      type="email"
                      className="input-child"
                      isShow={false}

                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="form-control">
                  {/* <Link href="/reset-password" className="ml-2 text-[#9400FF] text-sm">forgot password?</Link> */}
                  <FormControl className="form-control">
                    <Input
                      {...field}
                      placeholder="Password"
                      type={showPassword ? 'password' : 'text'}
                      className="input-child"
                      isShow={true}
                      showButtonAction={showPasswordSettings}
                      showButton={showPassword ? 'SHOW' : 'HIDE'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <div className="forget-div">
            <Link href="/forgot-password" className="forgot-password">
              FORGOT PASSWORD?
            </Link>
          </div>
          <FormError message={error || urlError} />
          <Button
            variant="contained"
            className="btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "LOG IN"
            )}
          </Button>
        </form>
        </Form>
      </FormWrapper>
    </div>
  );
}
