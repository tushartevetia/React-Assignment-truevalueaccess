import React, { useEffect, useState } from "react";
import {  useParams} from "react-router-dom";
import NotFound from "./NotFound";

function UserDetails() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    );
    setUsers(await response.json());
  };

  const userDetail = users.find((data) => {
    return parseInt(data.id) === parseInt(id);
  });
  
  if (!userDetail ){
    return <NotFound />
  }

  return (
    <div className="px-2 text-sm">
      <h1 className="px-6 font-semibold text-2xl">
        Details : {userDetail?.first_name} {userDetail?.last_name}
      </h1>
      <ul className="p-6">
        <li className="py-4 border-b">
          First Name: <b className="font-semibold">{userDetail?.first_name}</b>{" "}
        </li>
        <li className="py-4 border-b">
          Last Name: <b className="font-semibold">{userDetail?.last_name}</b>{" "}
        </li>
        <li className="py-4 border-b">
          Company_name:{" "}
          <b className="font-semibold">{userDetail?.company_name}</b>{" "}
        </li>
        <li className="py-4 border-b">
          City: <b className="font-semibold">{userDetail?.city}</b>
        </li>
        <li className="py-4 border-b">
          State: <b className="font-semibold">{userDetail?.state}</b>{" "}
        </li>
        <li className="py-4 border-b">
          Zip: <b className="font-semibold">{userDetail?.zip}</b>{" "}
        </li>
        <li className="py-4 border-b">
          Email: <b className="font-semibold">{userDetail?.email}</b>
        </li>
        <li className="py-4 border-b">
          Web: <b className="font-semibold">{userDetail?.web}</b>
        </li>
        <li className="py-4 border-b">
          Age: <b className="font-semibold">{userDetail?.age}</b>
        </li>
      </ul>
    </div>
  );
}

export default UserDetails;
