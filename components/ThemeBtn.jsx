import useTheme from "next-theme";
import {FaMoon, FaSun} from "react-icons/fa";

const ThemeBtn = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex items-center mx-5">
            <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="opacity-0 absolute checkbox"
                onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <label
                htmlFor="checkbox"
                className="flex text-white cursor-pointer justify-between w-8 h-4 bg-gray-400 rounded-2xl p-1 relative transform scale-[1.5] label"
            >
                <FaSun className="text-[9px] mt-0 pt-0 text-yellow-400" />
                <FaMoon className="text-[9px] mt-0 pt-0 text-yellow-500" />
                <div
                    className="w-3 h-3 bg-white absolute rounded-full top-[2px] left-[2px] ball transition duration-500 "
                />
            </label>
        </div>
    );
};

export default ThemeBtn;