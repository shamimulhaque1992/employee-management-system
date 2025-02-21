import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "./Modal";
import axios from "axios";
import { FilePenLine, UserRoundX } from "lucide-react";
import { Employee } from "../types/employee";

const employeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
});

interface EmployeeTableProps {
  employees: Employee[];
  onDelete: (id: number) => void;
  onUpdate: (updatedEmployee: Employee) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  onDelete,
  onUpdate,
}) => {
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      onDelete(id);
      toast.success("Employee deleted successfully!");
    }
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    reset({
      name: employee.name,
      phone: employee.phone,
      email: employee.email,
      address: employee.address.street,
    });
  };

  const handleFormSubmit = async (data: {
    name: string;
    phone: string;
    email: string;
    address: string;
  }) => {
    if (editingEmployee) {
      try {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${editingEmployee.id}`,
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: {
              street: data.address,
              suite: "",
              city: "",
              zipcode: "",
            },
          }
        );
        console.log("Updating employee:", response.data);
        toast.success("Employee updated successfully!");

        const updatedEmployee = {
          ...editingEmployee,
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: {
            ...editingEmployee.address,
            street: data.address,
          },
        };

        onUpdate(updatedEmployee);

        setEditingEmployee(null);
        reset();
      } catch {
        toast.error("Failed to update employee.");
      }
    }
  };

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit((data) => handleFormSubmit(data))(e);
  };

  return (
    <div>
      <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
              Profile Picture
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
              Name
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
              Phone
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
              Email
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
              Address
            </th>
            <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <td className="border border-gray-300 dark:border-gray-600 p-2">
                <img
                  src={
                    employee.profilePicture ||
                    "https://avatar.iran.liara.run/public/boy"
                  }
                  alt={employee.name}
                  className="w-16 h-16 rounded-full"
                />
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium text-gray-800 dark:text-white">
                {employee.name}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
                {employee.phone}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
                {employee.email}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-800 dark:text-white">
                {employee.address.street}{" "}
                {employee.address.suite ? `(${employee.address.suite})` : ""},{" "}
                {employee.address.city}, {employee.address.zipcode}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-2">
                <div className="flex justify-center items-center gap-3">
                  <button
                    onClick={() => handleEdit(employee)}
                    className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200 group"
                    title="Edit Employee"
                  >
                    <FilePenLine
                      size={20}
                      className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200"
                    />
                  </button>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors duration-200 group"
                    title="Delete Employee"
                  >
                    <UserRoundX
                      size={20}
                      className="text-red-600 dark:text-red-400 group-hover:text-red-800 dark:group-hover:text-red-300 transition-colors duration-200"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingEmployee && (
        <Modal
          isOpen={!!editingEmployee}
          onClose={() => setEditingEmployee(null)}
          onSubmit={handleModalSubmit}
          isUpdate={true}
        >
          <h2 className="text-xl font-bold">Edit Employee</h2>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="border p-2 w-full mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          <input
            type="text"
            {...register("phone")}
            placeholder="Phone"
            className="border p-2 w-full mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          {errors.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="border p-2 w-full mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
          <input
            type="text"
            {...register("address")}
            placeholder="Address"
            className="border p-2 w-full mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          {errors.address && (
            <p className="text-red-600">{errors.address.message}</p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default EmployeeTable;
