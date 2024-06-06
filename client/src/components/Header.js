import { Link } from "react-router-dom";
import LanguageMenu from "./LanguageMenu";
import OrientationMenu from "./OrientationMenu";
import SettingsModal from "./SettingsModal";
import { useEditor } from "../context/AppContext";

const Header = () => {
  const { language } = useEditor();

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-lg bg-gradient-to-r from-purple-600 to-blue-500">
      {/* Logo */}
      <Link to="/" aria-label="Home">
        <div className="flex items-center gap-3 cursor-pointer">
          <h1 className="text-3xl font-extrabold tracking-widest text-white">
            CodeUnity
          </h1>
        </div>
      </Link>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-8 text-white">
        {/* Change the orientation of editors (only for webd view) */}
        {language === "webd" && <OrientationMenu />}

        {/* Choose language */}
        <LanguageMenu />

        {/* Opens settings modal */}
        <SettingsModal />
      </div>
    </nav>
  );
};

export default Header;
