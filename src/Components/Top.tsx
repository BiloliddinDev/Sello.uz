import { Button, Select } from "antd";
import { useTranslation } from "react-i18next";

const Top = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (e: string) => {
    i18n.changeLanguage(e);
  };

  return (
    <div
      style={{ padding: "10px" }}
      className="flex items-center justify-between container "
    >
      <Button style={{ backgroundColor: "#00b3a8", color: "white" }}>
        Sello Market
      </Button>
      <p className="text-gray-500">{t("Uzb")}</p>
      <div className="flex items-center gap-4">
        <Button style={{ backgroundColor: "#00b3a8", color: "white" }}>
          Sello-da sotish
        </Button>
        <Select
          defaultValue="Uzb"
          onChange={handleChange}
          options={[
            {
              value: "uzb",
              label: "Uzb",
            },
            {
              value: "ru",
              label: "Ru",
            },
          ]}
        />
        <div className="flex gap-1 items-center">
          <i className="text-color fa-solid fa-location-dot "></i>
          Tashkent
        </div>
      </div>
    </div>
  );
};

export default Top;
