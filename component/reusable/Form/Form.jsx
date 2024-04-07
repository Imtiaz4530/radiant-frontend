"use client";
import { Alert, Box, Card, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Input from "@/component/reusable/Form/Input";
import SimpleButton from "@/component/reusable/Button";
import styles from "@/styles/form.module.css";
import { loginUser, registerUser } from "@/utils/authUser";

const Form = () => {
  const [error, setError] = useState("");

  const path = usePathname();
  const exactPath = path.split("/")[2];
  const router = useRouter();

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const handleSub = async (data) => {
    try {
      if (exactPath === "login") {
        const res = await loginUser(data.email, data.password);

        if (res?.jwt) {
          localStorage.setItem("token", res.jwt);
          localStorage.setItem("user", JSON.stringify(res?.user));
        }
        router.push("/");
        window.location.reload();
      } else if (exactPath === "register") {
        const res = await registerUser(
          data.username,
          data.email,
          data.password
        );

        if (res?.jwt) {
          localStorage.setItem("token", res.jwt);
        }
        router.push("/");
        window.location.reload();
      }
      reset();
      setError("");
    } catch (e) {
      setError(e?.response?.data?.error?.message);
      console.log(e?.response?.data?.error?.message);
    }
  };
  return (
    <Card className={styles.formContainer}>
      <Typography variant="h3">
        {exactPath === "login" ? "Login" : "Register"}
      </Typography>
      {error && <h6>{error}</h6>}
      <form className={styles.form} onSubmit={handleSubmit(handleSub)}>
        <Box className={styles.inputContainer}>
          {exactPath === "register" ? (
            <>
              {" "}
              <Input type="text" label="username" register={register} />
              {errors?.username && (
                <Alert
                  severity="error"
                  onClose={() => {
                    clearErrors("username");
                  }}
                  className={styles.error}
                >
                  {errors?.username?.message}
                </Alert>
              )}
              <Input type="email" label="email" register={register} />
              {errors?.email && (
                <Alert
                  severity="error"
                  onClose={() => {
                    clearErrors("email");
                  }}
                  className={styles.error}
                >
                  {errors?.email?.message}
                </Alert>
              )}
            </>
          ) : (
            <>
              <Input type="email" label="email" register={register} />
              {errors?.email && (
                <Alert
                  severity="error"
                  onClose={() => {
                    clearErrors("email");
                  }}
                  className={styles.error}
                >
                  {errors?.email?.message}
                </Alert>
              )}
            </>
          )}

          <Input type="password" label="password" register={register} />
          {errors?.password && (
            <Alert
              severity="error"
              onClose={() => {
                clearErrors("password");
              }}
              className={styles.error}
            >
              {errors?.password?.message}
            </Alert>
          )}
          {error && (
            <Alert
              severity="error"
              onClose={() => {
                clearErrors("password");
                clearErrors("email");
              }}
              className={styles.error}
            >
              {error}
            </Alert>
          )}

          {exactPath === "login" ? (
            <SimpleButton
              type={"submit"}
              value={"Login"}
              variant={"contained"}
              className={styles.button}
            />
          ) : (
            <SimpleButton
              type={"submit"}
              value={"Register"}
              variant={"contained"}
              className={styles.button}
            />
          )}

          {exactPath === "login" ? (
            <Typography>
              Don't have an account?{" "}
              <Link href={"/auth/register"}>Create Now.</Link>
            </Typography>
          ) : (
            <Typography>
              Already have an account?{" "}
              <Link href={"/auth/login"}>Login Now.</Link>
            </Typography>
          )}
        </Box>
      </form>
    </Card>
  );
};

export default Form;
