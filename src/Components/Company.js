// pages/CompanyList.js
"use client";
import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Spinner from "@/Utils/Spinner";

const Company = () => {
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const query = await fetch(apiUrl);
        const response = await query.json();
        setCompanyData(response);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="text-center">
      {loading ? (
        <Spinner />
      ) : (
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
            {companyData &&
              companyData?.company_list &&
              companyData?.company_list?.data?.map((info) => (
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
      )}
    </div>
  );
};

export default Company;
