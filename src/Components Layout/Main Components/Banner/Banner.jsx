import { Link } from "react-router-dom";
import bannerIMg from "../../../assets/Images/BannerImage.png"

const Banner = () => {
  return (
    <div className="p-20 flex bg-slate-300 rounded-xl justify-center gap-12 items-center my-10 flex-col-reverse lg:flex-row">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold">Books to freshen up your bookshelf</h2>
        </div>
        <div>
          <Link to={'/listed-books'}><button className="btn bg-green-500 text-white">View The List</button></Link>
        </div>
      </div>
      <div>
        <img src={bannerIMg} alt="" />
      </div>
    </div>
  );
};

export default Banner;