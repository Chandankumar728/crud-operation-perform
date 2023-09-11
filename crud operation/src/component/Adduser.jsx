import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { schema } from "../validation/schema";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Adduser = () => {


    const formik = useFormik({
        initialValues: {
            name: "",
            lname:"",
            birth: "",
            study: "",
            sdate: "",
            ldate: "",
            ldate: "",
            salary: "",
            discription: "",
            
           

        },
        onSubmit: (values) => {
            // alert('clicked')

            toast.success('Registerd successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });


            axios
                .post("http://localhost:3000/posts", values)
                // alert('clicked')
                .then(() => {
                    history("/home");
                });
        },
        validationSchema: schema,


    })

    const history = useNavigate();
    return (
        <>
            <div className="shadow-sm">
                <h1 className="text-3xl font-extrabold mb-4 text-center p-4 text-black font-serif mr-10">
                    Employee Registration Form
                </h1>
               
                <form
                    onSubmit={formik.handleSubmit}
                    onChange={formik.handleChange}
                    className="flex justify-center"
                >
                    <div className="w-1/2 pr-4 ml-[30%]"> {/* Left side */}
                        <div className="mb-2 ml-10">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                First Name*
                            </label>
                            <input
                                className="appearance-none border bg-sky-50  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                                type="text"
                                placeholder="Enter your name"
                                {...formik.getFieldProps("name")}
                            />
                            {formik.errors.name && formik.touched.name && (
                                <p className="text-[red]">{formik.errors.name}</p>
                            )}
                        </div>

                        <div className="mb-2 ml-10">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                DOB*
                            </label>
                            <input
                                className="appearance-none border bg-sky-50  py-2 px-[69%] text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                                type="date"
                                placeholder="Enter your dob"
                                {...formik.getFieldProps("birth")}
                            />
                            {formik.errors.birth && formik.touched.birth && (
                                <p className="text-[red]">{formik.errors.birth}</p>
                            )}
                        </div>

                        <div className="mb-2 ml-10">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Study *
                            </label>
                            <select
                                className="appearance-none border bg-sky-50 py-2 px-[78%] text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                                {...formik.getFieldProps("study")}
                            >
                                <option value="">Select Study</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="Commerce">Commerce</option>
                            </select>
                            {formik.errors.study && formik.touched.study && (
                                <p className="text-[red]">{formik.errors.study}</p>
                            )}
                        </div>

                        <div className="mb-2 ml-10">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                            Start Date
                            </label>
                            <input
                                className="appearance-none border bg-sky-50  py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                                type="date"
                                placeholder="Enter your dob"
                                {...formik.getFieldProps("sdate")}
                            />
                            {formik.errors.sdate && formik.touched.sdate && (
                                <p className="text-[red]">{formik.errors.sdate}</p>
                            )}
                        </div>

                        <div className="mb-2 ml-10">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Current Salary*
                            </label>
                            <input
                                className="appearance-none border bg-sky-50  py-2 px-[60%] text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                                type="number"
                                placeholder="Current Salary"
                                {...formik.getFieldProps("salary")}
                            />
                            {formik.errors.salary && formik.touched.salary && (
                                <p className="text-[red]">{formik.errors.salary}</p>
                            )}
                        </div>

                        <div className="mb-2 ml-10">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Discription
                            </label>
                            <input
                                className="appearance-none border bg-sky-50  py-10  px-[60%] text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                                type="text"
                                placeholder="Enter your discription"
                                {...formik.getFieldProps("discription")}
                            />
                            {formik.errors.discription && formik.touched.discription && (
                                <p className="text-[red]">{formik.errors.discription}</p>
                            )}
                        </div>
                        <button
                            className=" w-2/4 bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded  ml-10  "
                            type="submit"
                        >
                            cancel
                        </button>


                        {/* Add more left-aligned input fields here */}
                    </div>

                    <div className="w-1/2 mr-[30%]"> {/* Right side */}
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Last name*
                            </label>
                            <input
                                className="appearance-none border rounded-lg bg-sky-50 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                type="text"
                                placeholder="Enter your last name"
                                {...formik.getFieldProps("lname")}
                            />
                            {formik.errors.lname && formik.touched.lname && (
                                <p className="text-[red]">{formik.errors.lname}</p>
                            )}
                        </div>
                        
                        <div className="mb-2 ml-10">
                          
                        </div>
                        <div className="mb-2 ml-10">
                          
                          </div>

                          <div className="mb-2 ml-10">
                          
                          </div>
                        
                        <div className="mb-2 mt-40">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                          Last Date
                            </label>
                            <input
                                className="appearance-none border bg-sky-50  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                                type="date"
                                placeholder="Enter your last date"
                                {...formik.getFieldProps("ldate")}
                            />
                            {formik.errors.ldate && formik.touched.ldate && (
                                <p className="text-[red]">{formik.errors.ldate}</p>
                            )}
                        </div>

                       

                        <button
                            className=" w-2/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-52 ml-[20%] "
                            type="submit"
                        >
                            Save
                        </button>

                        {/* Add more right-aligned input fields here */}
                    </div>

                   




                    {/* Add additional input fields for both sides as needed */}


                </form>


            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />

        </>



    )
}

export default Adduser