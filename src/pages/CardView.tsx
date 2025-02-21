import React, { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import useEmployees from "../hooks/useEmployees";
import CardSkeleton from "../components/CardSkeleton";
import SearchBar from "../components/SearchBar";
import ErrorDisplay from "../components/ErrorDisplay";

const CardView: React.FC = () => {
  const { employees, loading, error } = useEmployees();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <CardSkeleton />;
  if (error) return <ErrorDisplay message={error.message} />;

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Employee Card View
      </h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
            address={employee.address}
            profilePicture={`https://avatar.iran.liara.run/public/boy`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardView;
