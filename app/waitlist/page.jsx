"use client";
import React, { useState } from "react";

function MainComponent() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/db/waitlist-entries", {
        method: "POST",
        body: JSON.stringify({
          query:
            "INSERT INTO `waitlist` (`email`, `signup_date`) VALUES (?, ?)",
          values: [email, new Date().toISOString()],
        }),
      });
      setSubmitted(true);
      setEmail("");
      setError("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0D111D] flex flex-col relative overflow-hidden pb-24">
      <nav className="fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img
                src="https://ucarecdn.com/edfb445e-2772-46fe-886a-2c1196746b07/-/format/auto/"
                alt="logo-white.png"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-24 relative z-10">
        <div className="max-w-3xl mx-auto w-full">
          <div className="p-8 md:p-12 bg-[#171B26] rounded-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#EFEFED] font-poppins mb-8">
              The future of car marketplace is here.
            </h1>
            <p className="text-lg text-[#9C9FA4] font-poppins mb-8">
              Join the waitlist for VehiQL - your one-stop destination for
              buying and selling vehicles. Experience a seamless, modern
              approach to car transactions powered by cutting-edge technology.
            </p>
            <div className="flex items-center space-x-2 mb-8">
              <div className="h-px flex-1 bg-[#262A36]"></div>
              <p className="text-lg font-poppins text-[#EFEFED]">
                Be the first to rocket your marketing into the future ✨
              </p>
              <div className="h-px flex-1 bg-[#262A36]"></div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 pr-36 rounded-lg bg-[#20242F] border border-[#262A36] text-[#EFEFED] placeholder-[#9C9FA4] focus:outline-none focus:border-[#EFEFED] transition-colors font-poppins"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EFEFED] text-[#0D111D] py-2 px-4 rounded-lg transition-all duration-200 font-poppins"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Launch</span>
                      <i className="far fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-sm font-poppins">{error}</p>
                )}
              </form>
            ) : (
              <div className="bg-[#20242F] border border-[#262A36] text-[#EFEFED] p-8 rounded-lg space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="far fa-check text-2xl text-[#EFEFED]"></i>
                  <h3 className="text-2xl font-poppins">You're on the list!</h3>
                </div>
                <p className="text-[#9C9FA4] font-poppins">
                  Thanks for joining! We'll keep you updated on all the exciting
                  developments.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 p-8 md:p-12 bg-[#171B26] rounded-lg">
            <h2 className="text-xl font-poppins text-[#EFEFED] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "What is VehiQL?",
                  answer:
                    "VehiQL is an AI-powered car marketplace platform that helps businesses optimize their car marketing strategies through advanced analytics and automation.",
                },
                {
                  question: "How does it work?",
                  answer:
                    "Our platform analyzes your car marketing data using AI to provide actionable insights and automate repetitive tasks, helping you make data-driven decisions.",
                },
                {
                  question: "When will it be available?",
                  answer:
                    "We're currently in the final stages of development. Join our waitlist to be among the first to access the platform when we launch.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#262A36] rounded-lg p-4 hover:bg-[#20242F] transition-colors"
                >
                  <button
                    onClick={() =>
                      setOpenQuestion(openQuestion === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-[#EFEFED] font-poppins"
                  >
                    <span>{faq.question}</span>
                    <i
                      className={`far fa-chevron-down transition-transform ${
                        openQuestion === index ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`mt-4 transition-all duration-300 ease-in-out ${
                      openQuestion === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-[#9C9FA4] font-poppins">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 z-10 w-full py-6 px-6 md:px-20 bg-[#171B26] border-t border-[#262A36]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-[#9C9FA4] hover:text-[#EFEFED] transition-colors"
            >
              <i className="far fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="text-[#9C9FA4] hover:text-[#EFEFED] transition-colors"
            >
              <i className="far fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="text-[#9C9FA4] hover:text-[#EFEFED] transition-colors"
            >
              <i className="far fa-linkedin text-xl"></i>
            </a>
          </div>
          <p className="text-[#9C9FA4] font-poppins text-sm">
            © 2025 VehiQL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
