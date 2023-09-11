import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Update from './Update';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
            getData();
            toast.success('Deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        });
    };

    function getData() {
        axios.get("http://localhost:3000/posts").then((res) => {
            console.log(res.data);
            setdata(res.data);
        });
    }
    return (
        <div>
            <>

                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                               
                                <th scope="col" class="px-6 py-3">
                                    First name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Last Name
                                </th>
                              
                                <th scope="col" class="px-6 py-3">
                                    DOB
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Satrt Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    End Date
                                </th>
                                <th scope="col" class="px-6 py-3">

                                </th>
                                <th scope="col" class="px-6 py-3">

                                </th>
                                <th scope="col" class="px-6 py-3">

                                </th>
                                <th scope="col" class="px-6 py-3">

                                </th>
                                <th scope="col" class="px-6 py-3">

                                </th>
                            </tr>
                        </thead>

                        {
                            data.map((eachdata) => {
                                return (
                                    <>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                                {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {eachdata.id}
                                                </th> */}
                                                <td class="px-6 py-4">
                                                    {eachdata.name}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {eachdata.lname}
                                                </td>

                                                <td class="px-6 py-4">
                                                    {eachdata.birth}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {eachdata.sdate}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {eachdata.ldate}
                                                </td>

                                                <td class="px-6 py-1">

                                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        // onClick={() => settolocalstorage(eachdata.id, eachdata.name, eachdata.gender,eachdata.phone,eachdata.email,eachdata.birth)}
                                                        onClick={() => navigate(`/update/${eachdata.id}`)}


                                                    >Edit</button>


                                                </td>

                                                <td class="px-6 py-4">
                                                    <button type="button" class="text-whitehover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 bg-red-600" onClick={() => handleDelete(eachdata.id)} >Delete</button>
                                                </td>


                                            </tr>


                                        </tbody>

                                    </>
                                )
                            })


                        }

                    </table>
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


        </div>


    )
}

export default Home