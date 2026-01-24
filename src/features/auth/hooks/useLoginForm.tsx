import { useForm } from "react-hook-form";
import { LoginFormSchema, TLoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient, getErrorMessage } from "~/lib/auth-client";
import { toast } from "sonner";
import { LOCAL_STORAGE_AUTH_TOKEN_KEY } from "../constants/localStorage";

const useLoginForm = () => {
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const login = async (data: TLoginFormSchema) => {
    try {
      const { error, data: authResponseData } = await authClient.signIn.email({
        email: data.email,
        password: data.password
      });

      // handle auth errors
      if (error?.code) {
        toast.error(getErrorMessage(error.code));
        return;
      }

      if (authResponseData?.token) {
        localStorage.setItem(
          LOCAL_STORAGE_AUTH_TOKEN_KEY,
          authResponseData.token ?? ""
        );
      }

      // handle success
      toast.success("Login Successful");
    } catch (error) {
      // handle non-auth errors
      toast.error((error as Error).message);
    }
  };

  return { form, login };
};

export default useLoginForm;
