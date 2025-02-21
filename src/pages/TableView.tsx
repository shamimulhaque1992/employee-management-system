import React, { useState, useEffect } from "react";
import EmployeeTable from "../components/EmployeeTable";
import useEmployees from "../hooks/useEmployees";
import TableSkeleton from "../components/TableSkeleton";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "../components/Modal";
import axios from "axios";
import { Plus } from "lucide-react";
import SearchBar from "../components/SearchBar";
import { Employee } from "../types/employee";

const employeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
});

const TableView: React.FC = () => {
  const { employees, loading } = useEmployees();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeList, setEmployeeList] = useState(employees);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setEmployeeList(employees);
  }, [employees]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredEmployees = employeeList.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        toast.success("Employee deleted successfully!");
        setEmployeeList((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
      } catch (error) {
        toast.error("Failed to delete employee.");
      }
    }
  };

  const handleUpdateEmployee = (updatedEmployee: Employee) => {
    setEmployeeList((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(employeeSchema),
  });

  const handleAddEmployeeSubmit = async (data: {
    name: string;
    phone: string;
    email: string;
    address: string;
  }) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
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
      console.log("Adding employee:", response.data);
      setEmployeeList([response.data, ...employeeList]);
      reset();
      toast.success("Employee added successfully!");
      setIsModalOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) { // Fixed: Added closing parenthesis
        toast.error("Failed to add employee.");
      }
    }
  };

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(handleAddEmployeeSubmit)(e);
  };

  if (loading) return <TableSkeleton />;

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Employee Table View</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-600 text-white p-2 mb-4 rounded-md flex items-center hover:bg-green-700 transition-colors"
      >
        <Plus size={18} className="mr-2" />
        Add Employee
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        isUpdate={false}
      >
        <h2 className="text-xl font-bold mb-4">Add Employee</h2>
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
        {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="border p-2 w-full mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <input
          type="text"
          {...register("address")}
          placeholder="Address"
          className="border p-2 w-full mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        {errors.address && <p className="text-red-600">{errors.address.message}</p>}
      </Modal>
      <EmployeeTable
        employees={filteredEmployees}
        onDelete={handleDelete}
        onUpdate={handleUpdateEmployee}
      />
    </div>
  );
};

export default TableView;