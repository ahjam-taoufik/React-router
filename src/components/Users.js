import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") == "active";

  return (
    <div>
      Users page
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        active
      </button>
      <button onClick={() => setSearchParams({})}>desactive</button>

      {/* {isActive &&<h1>active section</h1> }
      {!isActive &&<h1>NO ACTIVE section</h1>}  */}
      {isActive ? <h1>active section</h1> : <h1>NO ACTIVE section</h1>}

    </div>
  );
};

export default Users;
