import React from "react";
import { Field, useFormik } from "formik";
import CoustomSelect from "./CoustomSelect";

const options = [
  { value: "developer", label: "Software Developer" },
  { value: "chef", label: "Chef" },
  { value: "enginner", label: "Enginner" },
  { value: "painter", label: "Painter" },
];

function RegisterForm() {
  const validate = (values) => {
    const errors = {};

    if (!values.job) {
      errors.job = "Required";
    }

    if( !values.title){
      errors.title = "Required"
    }
    
    if (!values.description) {
      errors.description = "Required";
    } else if (values.description.split(" ").length > 300) {
      errors.description = "Maximum of 300 words allowed";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      job: "",
      title: "" ,
      description:"",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mt-[53px] ">
      <form onSubmit={formik.handleSubmit} class="">
        <div class="flex flex-wrap -mx-3 mb-0">
          <div class="w-full md:w-1/2 px-3 mb-4 md:mb-4">
            <CoustomSelect
              className="  w-auto  text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              onChange={(value) => formik.setFieldValue("job", value.value)}
              value={formik.values.job}
              options={options}
              placeholder={"Select Course Category"}
            />
            {formik.errors.job ? (
              <div className="text-red-500 text-[8px] -my-3">{formik.errors.job}</div>
            ) : null}
          </div>

          <div class="w-full md:w-1/2 px-3 mb-4">
            <CoustomSelect
              className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              onChange={(value) => formik.setFieldValue("job", value.value)}
              value={formik.values.job}
              options={options}
              placeholder={"Select Skill Experience"}
            />
            {formik.errors.job ? (
              <div className="text-red-500 text-[8px] -my-3">{formik.errors.job}</div>
            ) : null}
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full px-3">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter the main title of the Course"
              className="appearance-none text-[10px] font-semibold block w-full text-gray-700  border-gray-300 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="text-red-500 text-[8px] -my-3">
                {formik.errors.title}
              </div>
            ) : null}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
        <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="Course Description (maximum of 300 words)"
              maxLength={300}
              className="appearance-none block text-[10px] h-[72px] font-semibold w-full text-gray-700  border-gray-300 border-2 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
            {formik.errors.description ? (
              <div className="text-red-500 text-[8px] -my-3">{formik.errors.description}</div>
            ) : null}
        </div>
          </div>
      </form>
    </div>
  );
}

export default RegisterForm;
