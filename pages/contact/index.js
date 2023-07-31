/** @format */

//import for form
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//components
import Circles from "/components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//variants
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const endpoint = "https://formspree.io/f/mdoraklr"; // Replace with your Formspree endpoint
  
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Form submission successful.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        console.log("Form reset.");
        toast.success("Thank you for your message!");

      } else {
        console.log("Form submission failed with status:", response.status);
        toast.error("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };


  return (

    <div className="h-full bg-primary/30">
      
      {/* Add the ToastContainer */}
      <ToastContainer />
      
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>


          {/* form */}
          <motion.form
            action="https://formspree.io/f/mdoraklr"
            method="POST"
            onSubmit={handleSubmit}
            ref={formRef}
            onInput={(e) => e.target.value = e.target.value.replace(/'/g, '&apos;')}

            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            
            {/* input group */}
            <div className="flex gap-x-6 w-full">


                {/* Input fields and textarea */}
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                />

              </div>
              
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  onInput={(e) => e.target.value = e.target.value.replace(/'/g, '&apos;')}
                  className="textarea"
                />
            
            
            {/* submit button */}
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">

              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex  group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />

            </button>

          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
