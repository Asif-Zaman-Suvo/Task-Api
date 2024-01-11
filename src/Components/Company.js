import Spinner from "@/Utils/Spinner";
import { useGetCompanyDataQuery } from "@/redux/apiSlice";
import { useState } from "react";

const Company = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useGetCompanyDataQuery({
    page: currentPage,
  });
  const companyData = data?.company_list;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="text-center">
      <div className="relative overflow-x-auto">
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
          {companyData?.data?.map((info) => (
            <tbody key={info.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
            </tbody>
          ))}
        </table>
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
    </div>
  );
};

export default Company;
