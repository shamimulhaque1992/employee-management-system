import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import {
  ArrowLeft,
  Globe,
  Building2,
  MapPin,
  Phone,
  Mail,
  User,
} from "lucide-react";

interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const EmployeeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        console.log("id", id);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        console.log("res", response.status);
        console.log("res data", response.data);
        setEmployee(response.data);
      } catch (err) {
        console.error("Error fetching employee:", err);
        setError("Failed to fetch employee details");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) return <LoadingIndicator />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!employee)
    return <div className="text-center p-4">Employee not found</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-6 lg:p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Employees
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="bg-blue-600 dark:bg-blue-700 p-6 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={`https://avatar.iran.liara.run/public/boy`}
              alt={employee.name}
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-600 shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{employee.name}</h1>
              <p className="text-blue-100 flex items-center justify-center md:justify-start">
                <User className="w-4 h-4 mr-2" />@{employee.username}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h2>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Email</p>
                  <a
                    href={`mailto:${employee.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    {employee.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">{employee.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Website</p>
                  <a
                    href={`https://${employee.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    {employee.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Additional Information
              </h2>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Address</p>
                  <p className="text-gray-600 dark:text-gray-300">{employee.address.suite}</p>
                  <p className="text-gray-600 dark:text-gray-300">{employee.address.street}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {employee.address.city}, {employee.address.zipcode}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Geo: {employee.address.geo.lat}, {employee.address.geo.lng}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Company</p>
                  <p className="font-medium text-gray-700 dark:text-gray-200">
                    {employee.company.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{employee.company.catchPhrase}"
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{employee.company.bs}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
