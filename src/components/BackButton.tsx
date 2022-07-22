import { useLocation, useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const location = useLocation();
  const goBack = () => (location.state ? navigate(-1) : navigate("/"));

  return (
    <button
      onClick={goBack}
      className="shadow-md border-light rounded bg-white py-2 w-36 flex gap-2.5 items-center justify-center text-dark dark:bg-primary dark:text-white dark:shadow-[#252525]"
    >
      <i className="fa-solid fa-arrow-left-long text-sm"></i>
      <span>Back</span>
    </button>
  );
}
