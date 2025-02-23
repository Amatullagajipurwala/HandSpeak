import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [gesture, setGesture] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    let interval;
    if (isStreaming) {
      interval = setInterval(captureFrame, 500); // Adjust interval as needed
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStreaming]);

  const captureFrame = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const blob = await fetch(imageSrc).then((res) => res.blob());
        const formData = new FormData();
        formData.append("file", blob, "frame.jpg");

        try {
          const response = await axios.post("http://127.0.0.1:8000/predict/", formData);
          setGesture(response.data.gesture);
        } catch (error) {
          console.error("Error sending frame:", error);
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-600 text-white">
      {/* Header */}
      <h1 className="text-4xl font-extrabold bg-white/20 px-8 py-4 rounded-xl shadow-lg backdrop-blur-lg">
        Sign Language Recognition
      </h1>

      {/* Webcam Container */}
      <div className="mt-6 p-4 border-4 border-blue-400 rounded-xl shadow-2xl backdrop-blur-xl bg-white/10">
        <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="rounded-lg w-[400px] h-[300px] border-2 border-gray-300 shadow-md" />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-6">
        <button
          onClick={() => setIsStreaming(true)}
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-600"
        >
          Start Recognition
        </button>
        <button
          onClick={() => setIsStreaming(false)}
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-600"
        >
          Stop Recognition
        </button>
      </div>

      {/* Detected Gesture Output */}
      {gesture && (
        <p className="mt-6 text-2xl font-bold bg-white/20 px-6 py-4 rounded-lg shadow-lg backdrop-blur-lg text-green-300 border border-green-500 animate-pulse">
          Detected Gesture: <span className="text-green-400">{gesture}</span>
        </p>
      )}
    </div>
  );
};

export default WebcamCapture;
