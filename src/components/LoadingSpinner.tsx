"use client";
import { FiLoader } from "react-icons/fi";

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
            <FiLoader className="animate-spin text-white dark:text-gray-300" size={50} />
        </div>
    );
};

export default LoadingSpinner;
