import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error && <p></p>}
      {error.data}
      <NavLink to={"/"}>
        <button>GO Home </button>
      </NavLink>
    </div>
  );
};
