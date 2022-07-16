import { toast } from "react-toastify";
import Joi from "joi";
import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createCard } from "../services/cardsService";

const CreateCard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),
      bizImage: Joi.string().min(11).max(1024).uri().allow("").label("Image"),
    }),
    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }

        await createCard(body);
        toast("A new Card Created👏");

        navigate("/my-cards");
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  return (
    <>
      <PageHeader title="Create Card" description="Create Card" />

      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="text"
          label="Name"
          {...form.getFieldProps("bizName")}
          error={form.touched.bizName && form.errors.bizName}
        />
        <Input
          type="text"
          label="Description"
          {...form.getFieldProps("bizDescription")}
          error={form.touched.bizDescription && form.errors.bizDescription}
        />
        <Input
          type="text"
          label="Address"
          {...form.getFieldProps("bizAddress")}
          error={form.touched.bizAddress && form.errors.bizAddress}
        />
        <Input
          type="text"
          label="Phone"
          {...form.getFieldProps("bizPhone")}
          error={form.touched.bizPhone && form.errors.bizPhone}
        />
        <Input
          type="text"
          label="Image"
          {...form.getFieldProps("bizImage")}
          error={form.touched.bizImage && form.errors.bizImage}
        />

        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Create Card
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateCard;
