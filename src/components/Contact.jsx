import React, { useState } from "react";
import PageSection from "./PageSection";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  return (
    <>
      {!isFormSubmitted && (
        <PageSection
          name="contact"
          title="Be the first to know."
          subtitle={`Early access to bookings, exciting F1 events, Grand Prix watch parties, and new releases.`}
        >
          <div className="flex flex-col mt-4">
            <div className="w-full rounded-xl p-4">
              <ContactForm onFormSubmit={handleFormSubmit} />
            </div>
          </div>
        </PageSection>
      )}
      {isFormSubmitted && (
        <div className="text-center">
          <h1 className="text-5xl">
            <span className="bg-gradient-to-r from-thOrange to-thBlue text-transparent bg-clip-text">
              THANK YOU
            </span>
          </h1>
          <p className="mt-8 mb-16">Now you will be the first to know</p>
        </div>
      )}
    </>
  );
};

export default Contact;
