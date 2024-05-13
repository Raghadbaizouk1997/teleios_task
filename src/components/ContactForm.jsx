import axios from "axios";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import GradientBtn from "./GradientBtn";

const ContactForm = ({ onFormSubmit }) => {
  const initialFormData = {
    name: "",
    email: "",
    interests: [],
    f1Arcade: false,
    f1News: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [restSuccessMessage, setRestSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    if (name === "interests") {
      const updatedInterests = [...formData.interests];
      if (checked) {
        updatedInterests.push(value);
      } else {
        const index = updatedInterests.indexOf(value);
        if (index !== -1) {
          updatedInterests.splice(index, 1);
        }
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        interests: updatedInterests,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }));

      if (name === "f1Arcade" && checked) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          f1Arcade: "", // Clear the error message
        }));
      }

      if (name === "email" && type === "email" && event.target.validity.valid) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }

      if (
        name === "email" &&
        type === "email" &&
        !event.target.validity.valid
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Invalid email format",
        }));
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const newErrors = {};
  
      
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else {
       
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email.trim())) {
          newErrors.email = "Invalid email format";
        }
      }
  
  
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
  
      if (!formData.f1Arcade) {
        newErrors.f1Arcade =
          "You must agree to receive information from Teleios";
      }
  
     
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setLoading(false);
        return;
      }
  
      const response = await axios.post(
        "https://getform.io/f/navvdzja",
        formData,
        { headers: { Accept: "application/json" } }
      );
      onFormSubmit();
      
      setFormData(initialFormData);
      setSuccessMessage("THANK YOU");
      setRestSuccessMessage("Now you will be the first to know");
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Form submitted successfully!",
        showConfirmButton: false,
        timer: 2000, 
      });
      setFormSubmitted(true); 
      onFormSubmit();
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setLoading(false); 
    }
  };
  
  
  

  return (
    <div className="p-4 text-left">
      <style>
        {`
          /* Custom checkbox styles */
          .custom-checkbox input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 20px;
            height: 20px;
            border: 2px solid #ffffff;
            border-radius: 5px;
            outline: none;
            cursor: pointer;
            background: linear-gradient(to right, #F9A23F, #35EEED); 
          }

          /* Custom checkbox checkmark styles */
          .custom-checkbox input[type="checkbox"]:checked::before {
            content: "\\2713"; 
            display: block;
            text-align: center;
            line-height: 20px;
            font-size: 14px;
            color: #ffffff; 
          }
        `}
      </style>
      {!formSubmitted && (
        <form onSubmit={handleSubmit} noValidate>
          {successMessage && (
            <>
              <div className="text-green-500 text-sm">{successMessage}</div>
              <div className="text-green-500 text-sm">{restSuccessMessage}</div>
            </>
          )}
          <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col col-span-2 lg:col-span-1 relative">
              <label className="capitalize text-sm py-2 font-light">
                Your Name<span>*</span>
              </label>
              <div className="relative" style={{ width: "100%" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={`border-2 text-gray-900 rounded-lg p-3 pl-10 focus:outline-none ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  required
                  style={{ width: "100%" }}
                  onChange={(event) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      name: event.target.value,
                    }));
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      name: "", // Clear the error when the user starts typing
                    }));
                  }}
                />
                {errors.name && (
                  <div className="absolute top-0 left-0 mt-3 ml-3">
                    <FaTimes className="text-red-500 mt-1" />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  Your Name is required
                </p>
              )}
            </div>
          
                <div className="flex flex-col col-span-2 lg:col-span-1 relative">
                  <label className="capitalize text-sm py-2 font-light">
                    Email Address<span>*</span>
                  </label>
                  <div className="relative" style={{ width: "100%" }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className={`border-2 text-gray-900 rounded-lg p-3 pl-10 focus:outline-none ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      required
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    />
                    {errors.email && (
                      <div className="absolute top-0 left-0 mt-3 ml-3">
                        <FaTimes className="text-red-500 mt-1" />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

             
          </div>
          <div className="grid lg:grid-cols-1 gap-4 w-full py-2">
            <div className="flex flex-wrap items-center justify-between">
              <label className="capitalize text-sm py-2 font-light">
                What Are You Interested In?
              </label>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  name="interests"
                  value="Watch Parties"
                  onChange={handleChange}
                  checked={formData.interests.includes("Watch Parties")}
                />
                <label className="ml-1">Watch Parties</label>
              </div>
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  name="interests"
                  value="Private Events"
                  onChange={handleChange}
                  checked={formData.interests.includes("Private Events")}
                />
                <label className="ml-1">Private Events</label>
              </div>
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  name="interests"
                  value="New Race Modes"
                  onChange={handleChange}
                  checked={formData.interests.includes("New Race Modes")}
                />
                <label className="ml-1">New Race Modes</label>
              </div>
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  name="interests"
                  value="Family Fun"
                  onChange={handleChange}
                  checked={formData.interests.includes("Family Fun")}
                />
                <label className="ml-1">Family Fun</label>
              </div>
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  name="f1Arcade"
                  value={formData.f1Arcade}
                  onChange={handleChange}
                />
                <label className="ml-1">
                  I want to receive the latest information from Teleios
                </label>
                {errors.f1Arcade && ( 
                  <p className="text-red-500 text-xs mt-1 mb-1">
                    {errors.f1Arcade}
                  </p>
                )}
              </div>
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  name="f1News"
                  value={formData.f1News}
                  onChange={handleChange}
                />
                <label className="ml-1">
                  I want to receive the latest information from Teleios
                  including relevant news, surveys, offers, and exclusive
                  competitions
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <GradientBtn
              className="ml-4 mt-4 capitalize"
              title={loading ? "Sending..." : "Send Message"}
              style={{ width: "100%" }}
              disabled={loading}
            />
          </div>
        </form>
      )}

      {formSubmitted && (
        <div className="text-center">
          <h1 className="text-5xl">
            <span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">
              {successMessage}
            </span>
          </h1>
          <p className="mt-8 mb-16">{restSuccessMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
