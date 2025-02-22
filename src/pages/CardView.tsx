import React, { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import useEmployees from "../hooks/useEmployees";
import CardSkeleton from "../components/CardSkeleton";
import SearchBar from "../components/SearchBar";
import FilterDropdown, { FilterOption } from "../components/FilterDropdown";
import ErrorDisplay from "../components/ErrorDisplay";

const CardView: React.FC = () => {
  const { employees, loading, error } = useEmployees();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilter, setCurrentFilter] = useState<FilterOption>("all");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filter: FilterOption) => {
    setCurrentFilter(filter);
  };

  const filteredAndSortedEmployees = React.useMemo(() => {
    let result = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (currentFilter) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "email-asc":
        result.sort((a, b) => a.email.localeCompare(b.email));
        break;
      case "email-desc":
        result.sort((a, b) => b.email.localeCompare(a.email));
        break;
      default:
        break;
    }

    return result;
  }, [employees, searchTerm, currentFilter]);

  if (loading) return <CardSkeleton />;
  if (error) return <ErrorDisplay message={error.message} />;

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Employee Card View
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        </div>
        <div className="sm:w-48">
          <FilterDropdown
            currentFilter={currentFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedEmployees.map((employee) => (
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
