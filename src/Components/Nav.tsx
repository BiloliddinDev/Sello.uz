import { Link, useNavigate } from "react-router-dom";
import Top from "./Top";
import Search from "antd/es/input/Search";
import Bottom from "./Bottom";
import Madal from "./madal";
import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { instance } from "../Utils";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IFormInput } from "../Interface";
import { useUser } from "../Storge";
import { toast } from "react-toastify";
import DrawerFun from "./DrawerProps";

const Nav = () => {
  const onSearch = (value: string) => console.log(value);
  const [showmadal, setshowmadal] = useState(false);
  const [login, setLogin] = useState(false);
  const { name, setName } = useUser();
  const [drawer, setDrawer] = useState(false);
  const nav = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    login
      ? instance
          .post(`/register`, data)
          .then((res) => toast.success("Siz Mofaqyatli royhatdan otingiz"))
      : instance
          .post(`/login`, data)
          .then(
            (res) => (
              setName(res.data.token),
              toast.success("Kirish muvaffaqiyatli !!!")
            )
          );
  };

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
          <div className="flex items-center border p-2 gap-1 border-gray-500a cursor-pointer">
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
            <div
              onClick={() => setDrawer(true)}
              className="flex flex-col items-center cursor-pointer"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Savatcha</p>
            </div>
            <div
              onClick={() => (name ? nav("/users") : setshowmadal(true))}
              className="flex flex-col items-center cursor-pointer"
            >
              <i className="fa-solid fa-user"></i>
              <p>Profil</p>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
      <Madal handleCancel={() => setshowmadal(false)} showmadal={showmadal}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[15px]"
        >
          {login && (
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  size="large"
                  {...field}
                  addonBefore={<i className="fa-solid fa-user text-color"></i>}
                />
              )}
            />
          )}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                size="large"
                {...field}
                addonBefore={
                  <i className="fa-solid fa-envelope  text-color"></i>
                }
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                addonBefore={<i className="fa-solid fa-lock  text-color"></i>}
              />
            )}
          />
          {login ? (
            <h2
              onClick={() => setLogin(false)}
              className="text-color cursor-pointer"
            >
              Menda akaunt bor !!
            </h2>
          ) : (
            <h2
              onClick={() => setLogin(true)}
              className="text-color cursor-pointer"
            >
              Sizda Akaunt hali yoqmi ?
            </h2>
          )}
          <Button onClick={() => setshowmadal(false)} htmlType="submit">
            Send
          </Button>
        </form>
      </Madal>
      <DrawerFun open={drawer} setOpen={setDrawer} />
    </div>
  );
};

export default Nav;
