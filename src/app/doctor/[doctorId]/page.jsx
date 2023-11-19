'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import '../../doctor/doc.css'

const page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`https://carrejarrrrrrr.onrender.com/doc/${params.doctorId}`);
        // console.log(response);

        setData(response);
      } catch (error) {
        // console.error(error.message);
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []); // Add params.doctorId as a dependency

  if (loading) {
    return <div className="fixed inset-0 bg-gray-200 flex justify-center items-center">
     <div className=" h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  
    </div>
      
      </div>;
  }

  if (error) {
    return <p className="mt-24">Error: {error.message}</p>;
  }

  if (!data || !data.doctor || !data.doctor.specialist_doctors || data.doctor.specialist_doctors.length === 0) {
    return <p className="mt-24">No data found for the given ID</p>;
  }

  return (
    <div className="mt-20 px-8 bg-white" >
      {[...data.doctor.specialist_doctors].reverse().map((doctor, index) => (
        <div key={index} className='border-gray-500 shadow-md'>
          <div className='flex flex-col sm:flex-row p-8 md:px-12 sm:-ml-[40px]'>
          <div className ="avatar">

          <img
                className="doctor-image w-full ml-4"
                src={doctor.image_url}
                alt={`Dr. ${doctor.name}`}
                
              />
              <span className='bg-purple-700 z-40 mt-[7.5rem] text-white rounded-full doctor-image-badge text-center'>&#10003;</span>
          </div>
              <div className="doctor-info ml-2">
                <div className="doctor-details">
                  <p className="doctor-name">{doctor.name}</p>
                  <p className="doctor-type">{doctor.type}</p>
                  <p className="doctor-experience">
                    {doctor.experience_years} years of experience overall
                  </p>
                  <div className="doctor-location">
                    <p>{doctor.location}</p>
                    <p >⚫</p>
                    <p>{doctor.description}</p>
                  </div>
                  <p className="doctor-fee">
                    {doctor.fee} Consultation fee at Clinic
                  </p>
                  <div className="doctor-ratings">
                    <p className="doctor-assurance">👍🏻{doctor.assurance}%</p>
                    <p className="patient-stories">
                      {doctor.patient_stories_count} Patient Stories
                    </p>
                  </div>
                </div>
                <div className="doctor-actions">
                  <button className="book-appointment-button sm:w-auto">
                    Book Appointment No Booking Fee
                  </button>
                
                  <p>
                    <img
                      className="book-appoinment-img"
                      src="https://user-images.githubusercontent.com/86207985/270446299-183c07b5-2340-4aaf-afda-1515d497bac0.png"
                    />
                    Available Today
                  </p>
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page
