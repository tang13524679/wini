import { Dropdown, Menu } from "antd";
import { useGlobalState } from "@/hooks/global";

export default function LangDropDown({ collapsed }) {
  const [{ lang }, dispatch] = useGlobalState();
  console.log(lang, "sss");
  const languages = [
    {
      label: "Tiếng Việt",
      value: "vi",
      key: "vi",
    },
    {
      label: "中文",
      value: "zh",
      key: "zh",
    },
    {
      label: "English",
      value: "en",
      key: "en",
    },
  ];

  function getLangName(key) {
    let i = languages.find((item) => item.value === key);
    return i.label;
  }

  return (
    <Dropdown
      trigger="click"
      placement="topLeft"
      overlay={
        <Menu>
          {languages.map((item, index) => (
            <Menu.Item
              key={index}
              onClick={() => {
                dispatch({
                  type: "set_lang",
                  payload: item.key,
                });
              }}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <div
        className={`flex justify-between items-center ${
          collapsed ? "" : "py-3"
        }`}
      >
        <div className={`icon-${lang} ${collapsed ? "" : "mr-4 sm:mr-2"}`} />
        {!collapsed && (
          <>
            <div className="flex-auto text-base">{getLangName(lang)}</div>
            <div className="icon-dropdown" />
          </>
        )}
      </div>
    </Dropdown>
  );
}
