import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1,{
        message: "Password is required"
    })
});

export const FilterShema = z.object({
    organization: z.string().min(1,{
        message: "Organization is required",
    }),
    username: z.string().min(1,{
        message: "Username is required",
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    date: z.string().date(),
    phone: z.string().min(1,{
        message: "Phone number is required",
    }),
    status: z.string().min(1,{
        message: "Status is required",
    }),
});