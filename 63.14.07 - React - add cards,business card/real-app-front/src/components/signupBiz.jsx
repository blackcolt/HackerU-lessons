import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { createUser } from "../services/usersService";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth.context";

const SignupBiz = ({ redirect }) => {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [error, setError] = useState("");

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string().min(6).required(),
      name: Joi.string().min(2).required(),
    }),
    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: true });
        await login({ email: values.email, password: values.password });

        toast("Your account is ready 👏");

        if (redirect) {
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader
        title="Sign Up for Business with Real App"
        description="Open a new account, it is free you yammani!"
      />

      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="email"
          label="Email"
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />
        <Input
          type="password"
          label="Password"
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />
        <Input
          type="name"
          label="Name"
          {...form.getFieldProps("name")}
          error={form.touched.name && form.errors.name}
        />

        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Business Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupBiz;
