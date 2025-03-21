// import { nanoid } from "@reduxjs/toolkit";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
 import { addTodo } from "../Redux/todoSlice.js";
const AddForm = () => {
    const initialValues = {todo : ''}
    const dispatch = useDispatch()
    const onSubmit =(values, options) =>{
      const newObj = {
        todo: values.todo,
        isComplited: false,
        id: crypto.randomUUID()
      }
      dispatch(addTodo(newObj))
       options.resetForm()
    }
   

    return (
    <>
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} >
          <Form>
            <Field name='todo' placeholder='Enter new todo' />
            <button type="submit">Add todo</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddForm;