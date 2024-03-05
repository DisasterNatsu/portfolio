"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // set submitting to true

    setSubmitting(true);

    const formspreeEndpoint = "/api";

    const data = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
        },
      });

      // Handle the response here
      if (response.ok) {
        console.log("Form submitted successfully");

        alert("Submitted Successfully");
        // Additional logic for success
      } else {
        console.error("Form submission failed");
        // Handle the error or show an error message
        setSubmitting(false);
        return;
      }
    } catch (error) {
      setSubmitting(false);
      return console.error("Error submitting form:", error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
      onSubmit={handleSubmit}
    >
      {/* input group */}

      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="input"
        required
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="textarea"
        required
      ></textarea>
      <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
        {submitting ? (
          <div>
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-accent"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <span className="transition-all duration-500">Let&apos;s talk</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[32px]" />
          </>
        )}
      </button>
    </motion.form>
  );
};

export default Form;
