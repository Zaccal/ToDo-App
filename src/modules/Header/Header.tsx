import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={`${classes.nav} dark:bg-gray-800 dark:from-transparent`}>
                <div className={classes.headerContainer}>
                    <div className="flex items-center">
                        <img
                            src="/Logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className={`${classes.logoText} dark:text-white`}>
                            ToDo-App
                        </span>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to={"/settings"}
                            className={`${classes.navLink} dark:focus:ring-gray-800 hover:dark:bg-slate-500 dark:bg-gray-700 dark:text-white`}
                        >
                            Settings
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
