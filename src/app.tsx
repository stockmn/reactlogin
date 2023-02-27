import * as React from 'react';
import useForm from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(formData => {
    console.log('submitted data:', formData);
    alert('form submitted!');
  }); // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="firstName">First name</label>
      <input name="firstName" id="firstName" ref={register} />
      {errors.firstName && <p>{errors.firstName.type}</p>}

      <label htmlFor="lastName">Last name</label>
      <input name="lastName" id="lastName" ref={register} />
      {errors.lastName && <p>{errors.lastName.type}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
