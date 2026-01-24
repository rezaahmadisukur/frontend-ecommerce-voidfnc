import { Controller } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { Field, FieldError, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import useLoginForm from "../hooks/useLoginForm";
import { authClient } from "~/lib/auth-client";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const LoginForm = () => {
  const { form, login } = useLoginForm();
  const { data: session } = authClient.useSession();
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In {session?.user?.name}</CardTitle>
        <CardDescription>
          Enter your email and password to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={form.handleSubmit(login)}>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  {...field}
                  type="password"
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-muted-foreground text-center w-full">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary underline">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
