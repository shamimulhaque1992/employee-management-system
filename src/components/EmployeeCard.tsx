import React from "react";
import { useNavigate } from "react-router-dom";

interface EmployeeCardProps {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    suite?: string;
    city: string;
    zipcode: string;
  };
  profilePicture?: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  id,
  name,
  phone,
  email,
  address,
  profilePicture,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/employee/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={profilePicture || "default-profile.png"}
          alt={name}
          className="w-20 h-20 rounded-full mb-4 border-2 border-gray-200 dark:border-gray-600"
        />
        <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-1">{phone}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-1">{email}</p>
        <p className="text-gray-600 dark:text-gray-300">
          {address.street} {address.suite ? `(${address.suite})` : ""},{" "}
          {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;