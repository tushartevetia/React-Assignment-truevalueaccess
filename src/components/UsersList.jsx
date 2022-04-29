import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import SearchBar from "./SearchBar";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [searchVal, setSearchVal] = useState("");
  const [order, setOrder] = useState("ASC");
  const [userResult, setUserResult] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filterdUsers = users.filter((user) => {
      if (
        user.first_name.toLowerCase().includes(searchVal.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchVal.toLowerCase())
      ) {
        return user;
      }
    });
    setUserResult(filterdUsers || []);
    if (searchVal === "") {
      setUserResult([]);
    }
  }, [searchVal]);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    );

    setUsers(await response.json());
  };

  //sorting
  const sorting = (col) => {
    if (order === "ASC") {
      const sortElements = [...users].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setUsers(sortElements);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sortElements = [...users].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setUsers(sortElements);
      setOrder("ASC");
    }
  };

  const Result = ({ data }) => {
    return (
      <tbody key={data.id}>
        <tr className="text-left border-b font-light">
          <td className="py-3 px-3">
            <Link to={`/users/${data.id}`}>{data.first_name}</Link>
          </td>
          <td className="py-3 px-3">{data.last_name}</td>
          <td className="py-3 px-3">{data.age}</td>
          <td className="py-3 px-3">{data.email}</td>
          <td className="py-3 px-3 text-blue-600">
            <a href={data.web} target="_blank">
              {data.web}
            </a>
          </td>
        </tr>
      </tbody>
    );
  };

  //Get current users
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  //change page content
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <h2 className="font-medium text-2xl py-3">Users</h2>
      <SearchBar setSearchVal={setSearchVal} />
      <table className="table-auto ">
        <thead>
          <tr className="bg-slate-100 font-medium text-left border-b ">
            <td
              onClick={() => sorting("first_name")}
              className="py-3 px-3  cursor-pointer"
            >
              First Name
            </td>
            <td
              onClick={() => sorting("last_name")}
              className="py-3 px-3  cursor-pointer"
            >
              Last Name
            </td>
            <td
              onClick={() => sorting("age")}
              className="py-3 px-3 cursor-pointer"
            >
              Age
            </td>
            <td
              onClick={() => sorting("email")}
              className="py-3 px-3 cursor-pointer"
            >
              Email
            </td>
            <td
              onClick={() => sorting("web")}
              className="py-3 px-3 cursor-pointer"
            >
              
              Website
            </td>
          </tr>
        </thead>

        {!searchVal &&
          currentUsers.map((data) => <Result key={data.id} data={data} />)}
        {searchVal && !userResult.length ? (
          <tbody>
            <tr>
              <td>No Users</td>
            </tr>
          </tbody>
        ) : (
          userResult.map((data) => <Result key={data.id} data={data} />)
        )}
      </table>

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </>
  );
}

export default UsersList;
