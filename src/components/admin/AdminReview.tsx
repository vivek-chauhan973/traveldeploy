
import "../../app/globals.css";
import React, { useState } from 'react';
//import CalendarFunc from "@/components/Calender";
// import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

const AdminReview = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [summary, setSummary] = useState("");
    const [sdate, setSdate] = useState<Date | null>(null);
    const [rating, setRating] = useState(0);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTitle("");
        setAuthor("")
        setSummary("")
        setSdate(null);

        console.log("Form Data:", { title, author, summary, sdate, rating });
    };
    //setRating()

    //for sta rrating 
    // const handleClick = (value) => {
    //     // Toggle the rating between 0 and the clicked value
    //     const newRating = value === rating ? 0 : value;
    //     setRating(newRating);
    // };
    // for date 
    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSdate(new Date(event.target.value));
        console.log(sdate)
    };

    // for radio button rating

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setRating(value);
        console.log(`Rating: ${value}`);
    };



    return (
        <div>
            <div className="container-wrapper w-full px-4 py-4 bg-gray-100  mx-80">
                <h1 className=" text-center font-semibold text-xl">Admin Form section </h1>

                <form onSubmit={handleSubmit} >
                    <div className="md:mx-80" >
                        <div className="">
                            <label htmlFor="title" className=" text-black text-md font-normal md:font-semibold mb-2">Title </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter title...."
                                required
                            />
                        </div>

                        {/* DATE SECTION */}

                        {/* <div className="relative ">
                            <DatePicker
                                selected={selectedDate}
                                className="block w-full bg-white border left-8  border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                onChange={handleChange}
                                dateFormat="dd/MM/yyyy"  // Customize date format as per your requirement

                            />
                          
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SlCalender className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                        </div> */}


                        <div className="mt-3">
                            <label htmlFor="start-date" className=" text-md font-normal md:font-semibold mb-2">Date</label>
                            <input
                                type="date"
                                id="start-date"
                                value={sdate ? sdate.toISOString().split('T')[0] : ''}
                                onChange={handleStartDateChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-2"
                            />
                        </div>

                        {/* author name */}
                        <div className="mt-3">
                            <label htmlFor="author" className="  text-md font-normal md:font-semibold mb-2">Author name</label>
                            <input type="text" id="author" placeholder="Enter Author name"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        {/* STAR NUMERIC VALUE */}

                        <div className="mt-3">
                            <p className=" text-md md:text-lg">Over all please rate your interaction:</p>
                            {/* <div className="flex mt-1 ">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <svg
                                        key={value}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-8 w-8 cursor-pointer ${value <= rating ? 'text-green-700' : 'text-gray-500'
                                            }`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        onClick={() => handleClick(value)}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1l2.42 6.14 6.05.46c.91.07 1.28 1.21.59 1.83l-4.65 3.76 1.39 6.1c.21 1.06-.87 1.91-1.78 1.34L10 16.63l-5.82 3.49c-.91.57-2-.28-1.78-1.34l1.39-6.1-4.65-3.76c-.69-.62-.32-1.76.59-1.83l6.05-.46L10 1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                            </div> */}



                            <div className="flex  items-center">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <label key={value} className="flex  flex-col items-center">
                                        <span className={`ml-1 ${rating === value ? 'text-blue-600 font-semibold' : ' text-md '}`}>
                                            {value}

                                        </span>
                                      
                                        <input
                                            type="radio"
                                            id={`rating${value}`}
                                            name="rating"
                                            value={value}
                                            checked={rating === value}
                                            onChange={handleRatingChange}
                                        // className="ml-2 form-radio h-5 w-5 text-blue-600"
                                        className={`form-radio ml-1 h-5 w-5  ${rating === value ? 'bg-green-600' : 'bg-white'}`}

                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                        {/* trial end */}
                        <div className="mt-4">
                            <label htmlFor="summary" className="block text-md font-normal md:font-semibold mb-2">Summary</label>
                            <textarea
                                id="summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 resize-none"

                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AdminReview