import { useState } from 'react';
import Validate from './Validate';

const FormDetail = () => {
    // State for form values
    const [values, setValues] = useState({
        username: "",
        email: "",
        mblno: "",
        age: "",
        gender: "",
    });

   const [dummy,setDummy] = useState(false);

    // State to store all user details
    const [store, setStore] = useState([]); // Initialize as an empty array

    // State for validation errors
    const [errors, setErrors] = useState({});

    // Track if the form is in "edit" mode and the index of the record being edited
    const [editIndex, setEditIndex] = useState(-1);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const validationErrors = Validate(values);
        setErrors(validationErrors);

        // Only proceed if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            if (editIndex >= 0) {
                // Edit mode: update the existing record
                const updatedStore = store.map((item, index) =>
                    index === editIndex
                        ? {
                              sname: values.username,
                              semail: values.email,
                              smblno: values.mblno,
                              sage: values.age,
                              sgender: values.gender,
                          }
                        : item
                );
                setStore(updatedStore);
                setEditIndex(-1); // Reset edit mode
            } else {
                // Add mode: add a new record
                setStore((prevStore) => [
                    ...prevStore,
                    {
                        sname: values.username,
                        semail: values.email,
                        smblno: values.mblno,
                        sage: values.age,
                        sgender: values.gender,
                    },
                ]);                
            }

            // Reset the form values
            setValues({
                username: "",
                email: "",
                mblno: "",
                age: "",
                gender: "",
            });
            setDummy(false)

        }
    };

    const handleDelete = (index) => {
        const updatedStore = store.filter((_, i) => i !== index);
        setStore(updatedStore);
    };

    const handleEdit = (index) => {
        const userToEdit = store[index];
        setValues({
            username: userToEdit.sname,
            email: userToEdit.semail,
            mblno: userToEdit.smblno,
            age: userToEdit.sage,
            gender: userToEdit.sgender,
        });
        setEditIndex(index); // Enter edit mode with the index of the record
       setDummy(true);
    };

    return {
        handleChange,
        handleFormSubmit,
        errors,
        values,
        store,
        handleDelete,
        handleEdit,
        dummy,
       
    };
};

export default FormDetail;
