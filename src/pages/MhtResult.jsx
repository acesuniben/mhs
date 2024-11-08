// Result.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import {ADHD_Assessment} from "../data/ADHD.js";

const MhtResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scorerange } = location.state || { scorerange: 0 };

  // Interpret the score range for ADHD assessment
  

  return (
    <>
      <PageNav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-poppins">
        <h1 className="text-3xl font-bold mb-4">Mental Health Test</h1>
        <p className="text-lg mb-8 text-center">
          Congratulations! You have completed the ADHD assessment. 🎉
        </p>

        <p className="text-xl mb-2">Comment:</p>
        <div className="text-xl text-center font-bold mb-8">
          <p>{ADHD_Assessment(scorerange)}</p>
        </div>

        <div className="flex space-x-4">
          <Link to="/mhs/">
            <button
              onClick={() => navigate("/")}
              className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md shadow hover:bg-gray-300 transition"
            >
              End
            </button>
          </Link>

          <Link to="/mhs/adhd">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700 transition"
            >
              Retake test
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MhtResult;
