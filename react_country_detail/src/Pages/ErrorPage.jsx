
import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

  return (
    <div>
        <h1>Error: Page Not Found</h1>
        {error && <p>{error.data}</p>}
    </div>
  );
}