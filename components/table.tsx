"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { TableHeaders } from "@/constants";
import getStyle from "@/constants/data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import { GrUserExpert } from "react-icons/gr";
import { LuUserX2 } from "react-icons/lu";
import { Skeleton } from "@mui/material";
import FilterForm from "./ui/filter-form";

interface TableDataProps {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Inactive" | "Blacklisted" | "Pending" | "Active";
}

const Table = () => {
  const mockUrl = process.env.mockUrl || "";
  const [tableData, setTableData] = useState<TableDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const divRef = useRef<HTMLDivElement>(null); // Reference to the div
  const [filteredData, setFilteredData] = useState<TableDataProps[]>([]);

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the clicked target is outside the div
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsShowForm(false); // Hide the div if clicked outside
    }
  };

  useEffect(() => {
    const loadTableData = async (url: string): Promise<any> => {
      try {
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: TableDataProps | null = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    loadTableData(mockUrl)
      .then((data) => setTableData(data))
      .catch((error) => console.error("Fetch error:", error));

    setIsShowForm(true);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mockUrl]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalRows = tableData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

 //all organizations in data
  const uniqueOrganizations = useMemo(() => {
    const orgs = new Set(tableData.map((data) => data.organization));
    return Array.from(orgs);
  }, [tableData]);

  function showForm() {
    setIsShowForm((prev) => !prev);
  }

  // Calculate the data to display on the current page
  const currentData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];

    // Showing the first three pages
    for (let i = 1; i <= 3; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    if (totalPages > 5) {
      pageButtons.push(<span key="ellipsis">...</span>);
    }

    for (let i = totalPages - 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  const handleFilter = (filters: {
    status?: string;
    organization?: string;
    username?: string;
    email?:string;
    phone?: string;
  }) => {
    const { status, organization, email, phone, username } = filters;
    const filtered = tableData.filter(
      (item) =>
        (!status || item.status === status) &&
        (!organization || item.organization === organization) &&
        (!username || item.username === username) &&
        (!phone || item.phone === phone) &&
        (!email || item.email === email)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="table-wrapper" ref={divRef}>
      {isShowForm && (
        <FilterForm
          records={tableData}
          uniqueOrganizations={uniqueOrganizations}
          onApplyFilter={handleFilter}
        />
      )}
      {isLoading ? (
        <Skeleton variant="rounded" height={240} width="100%" />
      ) : (
        <div className="table">
          <table className="table-details">
            <thead>
              <tr className="header-container">
                {TableHeaders.map((header, index) => (
                  <th key={index} className="header">
                    <div className="header-div">
                      <p>{header}</p>

                      <button className="btn-options" onClick={showForm}>
                        <IoFilterSharp className="filter-icon" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            {isShowForm ? (
              <tbody>
                {filteredData.map((data, index) => (
                  <tr key={index} className="data-container">
                    <td className="data-org"> {data.organization} </td>
                    <td className="data-username"> {data.username} </td>
                    <td className="data-email"> {data.email} </td>
                    <td className="data-phone"> {data.phone} </td>
                    <td className="data-date"> {data.dateJoined} </td>
                    <td className="data-status">
                      <div className="status-div" style={getStyle(data.status)}>
                        {data.status}
                      </div>
                    </td>
                    <td className="data-options">
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          asChild
                          className="dropdown-trigger"
                        >
                          <button className="btn-options">
                            <SlOptionsVertical className="options-icon" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Link
                              href={`/users/${data.id}`}
                              className="dropdown-link"
                            >
                              <FiEye className="dropdown-icon" /> View Details
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="" className="dropdown-link">
                              <LuUserX2 className="dropdown-icon" /> Blacklist
                              User
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="" className="dropdown-link">
                              <GrUserExpert className="dropdown-icon" />{" "}
                              Activate User
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {currentData.map((data, index) => (
                  <tr key={index} className="data-container">
                    <td className="data-org"> {data.organization} </td>
                    <td className="data-username"> {data.username} </td>
                    <td className="data-email"> {data.email} </td>
                    <td className="data-phone"> {data.phone} </td>
                    <td className="data-date"> {data.dateJoined} </td>
                    <td className="data-status">
                      <div className="status-div" style={getStyle(data.status)}>
                        {data.status}
                      </div>
                    </td>
                    <td className="data-options">
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          asChild
                          className="dropdown-trigger"
                        >
                          <button className="btn-options">
                            <SlOptionsVertical className="options-icon" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Link
                              href={`/users/${data.id}`}
                              className="dropdown-link"
                            >
                              <FiEye className="dropdown-icon" /> View Details
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="" className="dropdown-link">
                              <LuUserX2 className="dropdown-icon" /> Blacklist
                              User
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="" className="dropdown-link">
                              <GrUserExpert className="dropdown-icon" />{" "}
                              Activate User
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      )}

      <div className="pagination">
        <span>
          Showing {currentPage} out of {totalPages}
        </span>
        <div className="page-controls">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="action-btn"
          >
            <IoIosArrowBack className="action-icon" />
          </button>
          {renderPaginationButtons()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="action-btn"
          >
            <IoIosArrowForward className="action-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
