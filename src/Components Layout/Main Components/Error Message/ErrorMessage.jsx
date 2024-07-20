import { Link } from "react-router-dom";


const ErrorMessage = () => {
  return (
    <div className="text-center my-60 space-y-8">
      <p className="text-2xl font-bold"><span className="text-5xl font-extrabold">404</span> Page not found</p>
      <p>Please! Go back to home home page.</p>
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default ErrorMessage;
