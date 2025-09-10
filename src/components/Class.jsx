import { Link } from "react-router-dom";

const Class = ({ id, url, className, rate }) => {
  return (
    <section>
      <Link to={`/class/${id}`}>
        <img src={url} alt="" className="rounded-lg px-1 h-[120px]" />
      </Link>
      <p>{className}</p>
      <progress max={5} value={rate} />
    </section>
  );
};

export default Class;
