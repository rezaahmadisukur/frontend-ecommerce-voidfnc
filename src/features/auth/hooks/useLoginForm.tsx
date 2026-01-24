import { useForm } from "react-hook-form";
import { LoginFormSchema, TLoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";

const useLoginForm = () => {
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const login = (data: TLoginFormSchema) => {
    console.log(data);
    alert("Login Successfully");
  };

  return { form, login };
};

export default useLoginForm;
