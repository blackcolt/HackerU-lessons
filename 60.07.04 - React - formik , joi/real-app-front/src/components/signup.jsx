import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";

const Signup = () => {
  const [error, setError] = useState("");

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate(values) {
      const { error } = Joi.object({
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string().min(6).required(),
        name: Joi.string().min(2).required(),
      }).validate(values, { abortEarly: false });

      if (!error) {
        return null;
      }

      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }

      return errors;
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  return (
    <>
      <PageHeader
        title="Sign Up with Real App"
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
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
