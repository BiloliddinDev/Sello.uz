import { Link } from "react-router-dom";
import Top from "./Top";
import Search from "antd/es/input/Search";
import Bottom from "./Bottom";

const Nav = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <div>
      <Top />
      <div className="bg-white p-[30px] ">
        <div
          style={{ marginTop: "20px" }}
          className="container flex items-center justify-between gap-[40px]"
        >
          <Link to={"/"}>
            <img
              width={174}
              height={44}
              src="https://sello.uz/images/logo.svg"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center border p-2 gap-1 border-gray-500a">
            <i className="fa-solid fa-list text-color"></i> Katalog
          </div>
          <Search
            size="large"
            placeholder="Tavarlarni Qidirish"
            onSearch={onSearch}
            enterButton
          />
          <div className="flex gap-[20px] text-color ">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-heart"></i>
              <p>Sevimlilar</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Savatcha</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-user"></i>
              <p>Profil</p>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    </div>
  );
};

export default Nav;
