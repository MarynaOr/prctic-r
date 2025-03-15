import { nanoid } from "@reduxjs/toolkit";

const AddForm = () => {
    const initialValue = {todo : ''}

    const onSubmit =(value, options) =>{
       options.resetForm()
    }


    return (
    <>
      
    </>
  );
};

export default AddForm;