import Spinner from "@/Utils/Spinner";
import {
  useGetCompanyDataQuery,
  useGetFilteredDataQuery,
} from "@/redux/apiSlice";
import { useState } from "react";

const Company = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterParams, setFilterParams] = useState({
    company_status: 1,
    company_name: "",
  });
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const getFilteredDataQuery = useGetFilteredDataQuery({
    page: currentPage,
    ...filterParams,
  });

  const getCompanyDataQuery = useGetCompanyDataQuery({
    page: currentPage,
  });

  const { data, isLoading } = isFilterApplied
    ? getFilteredDataQuery
    : getCompanyDataQuery;

  const companyData = data?.company_list;

  const handleFilterChange = (e) => {
    setFilterParams({
      ...filterParams,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterClick = () => {
    setIsFilterApplied(true);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setIsFilterApplied(false);
    setFilterParams({
      company_status: 1,
      company_name: "",
    });
    setCurrentPage(1);
  };

  return (
    <div className="text-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <div className="mb-4">
            <label className="ml-4 text-black ">Company Status:</label>
            <input
              type="number"
              name="company_status"
              value={filterParams.company_status}
              onChange={handleFilterChange}
              className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />

            <label className="ml-4 text-black ">Company Name:</label>
            <input
              type="text"
              name="company_name"
              value={filterParams.company_name}
              onChange={handleFilterChange}
              className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />

            <button
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
              onClick={handleFilterClick}
            >
              Filter
            </button>

            {isFilterApplied && (
              <button
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600"
                onClick={handleClearFilter}
              >
                Clear Filter
              </button>
            )}
          </div>
          <div className="relative overflow-x-auto">
            {companyData?.data?.length > 0 ? (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Company name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Company Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address 1
                    </th>
                    <th scope="col" className="px-6 py-3">
                      City
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companyData?.data?.map((info) => (
                    <tr
                      key={info.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {info?.company_name}
                      </th>
                      <td className="px-6 py-4">{info?.company_phone}</td>
                      <td className="px-6 py-4">{info?.address1}</td>
                      <td className="px-6 py-4">{info?.city}</td>
                      <td className="px-6 py-4">{info?.company_status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">
                Sorry, no data related to this filter.
              </p>
            )}
          </div>
          <div className="mt-4 flex justify-center">
            {companyData?.links.map((link, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(Number(link.label))}
                className={`mx-2 px-3 py-2 rounded ${
                  link.active
                    ? "bg-gray-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Company;
