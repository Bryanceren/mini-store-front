import React from "react";
import { FormProvider, useForm } from "react-hook-form";
const Form = ({ defaultValues, children, onSubmit, onError }) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  errors: methods.formState.errors,
                  register: methods.register,
                  key: child.props.name,
                },
              })
            : child;
        })}
      </form>
    </FormProvider>
  );
};
export default Form;
