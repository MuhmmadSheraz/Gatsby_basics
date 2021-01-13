import React from "react";

export default ({ pageContext ,location}) => {
  console.log('Location===>',location)
  return (
    <div>
      <div>Hello Dynamic Page from {pageContext.name}</div>
      <div>This page is create dynamically at Build Time</div>
      {location.pathname===`/localuser`?<h3>Local Users</h3>:<h3>Foreign Users</h3>}
      {pageContext.data?.map((item: any) => {
        return (
          <>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
          </>
        );
      })}
    </div>
  );
};
