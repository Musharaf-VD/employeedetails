import { useEffect } from 'react';
import './Form.css'
import FormDetail from './FormDetail';
import Validate from './Validate';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
const Form = () => {

  const { handleChange,handleDelete,handleFormSubmit, errors, values, store,handleEdit,dummy } = FormDetail(Validate)

  useEffect(() => {
    const storedData = localStorage.getItem("employeeDetails");
    if (storedData) {
      // If data exists, parse it and set it to the store
      FormDetail.store = JSON.parse(storedData);
    }
  }, []);

  // Save data to localStorage whenever the `store` changes
  useEffect(() => {
    localStorage.setItem("employeeDetails", JSON.stringify(store));
  }, [store]);
 


  return (
    <section className="employee-container row mt-4 mx-5">
      <form className="employee-form col-6" >
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="heading-container mb-3">
                <h2 className='text-center'>Employee Details</h2>
              </div>

              <div className="detail-container row">
                {/* Name and Email side by side */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="form-control"
                    onChange={handleChange}
                    name='username'
                    value={values.username}
                  />
                  {errors.username && <p id="errors">{errors.username}</p>}
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="form-control"
                    onChange={handleChange}
                    value={values.email}

                  />
                  {errors.email && <p id="errors">{errors.email}</p>}
                </div>

                {/* Mobile Number and Age side by side */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Mobile No</label>
                  <input
                    type="number"
                    name="mblno"
                    placeholder="Your mobile number"
                    className="form-control"
                    onChange={handleChange}
                    value={values.mblno}
                  />
                  {errors.mblno && <p id="errors">{errors.mblno}</p>}
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    name="age"
                    placeholder="Your age"
                    className="form-control"
                    onChange={handleChange}
                    value={values.age}
                  />
                  {errors.age && <p id="errors">{errors.age}</p>}
                </div>

                {/* Gender Selection */}
                <div className="col-md-12 mb-3">
                  <label className="form-label">Gender</label>
                  <div>
                    <input type="radio"
                      name="gender"
                      id="Male"
                      value="Male"
                      onChange={handleChange}
                      checked={values.gender === "Male"}
                    />{" "}
                    <label htmlFor="male" className="me-3">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      id="Female"
                      value="Female"
                      onClick={handleChange}
                      checked={values.gender === "Female"}
                    />{" "}
                    <label htmlFor="female">Female</label>
                    {errors.gender && <p id="errors">{errors.gender}</p>}
                  </div>
                </div>

                {/* Buttons */}
                <div className="col-md-12 mb-3">
                  <button className="btn btn-success w-100 form-submit" onClick={handleFormSubmit} > {dummy ? "Update" : "Add"}</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </form>


      
          <div className='user-detail mt-4' >
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Remark</th>
                  
                </tr>
              </thead>
              <tbody>
                {store.map((user_detail,index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{user_detail.sname}</td>
                      <td>{user_detail.semail}</td>
                      <td>{user_detail.smblno}</td>
                      <td>{user_detail.sage}</td>
                      <td>{user_detail.sgender}</td>
                      
                      <button id='btn1' className='rounded' onClick={()=>handleEdit(index)}><CiEdit size={25}/></button>
                     <button className='rounded ' id='btn2' onClick={()=>handleDelete(index)}> <RiDeleteBin5Line size={25}/></button>
                      </tr>                
                    ))}
              </tbody>
            </table>
          </div>
      
    </section>
  );
}

export default Form;
