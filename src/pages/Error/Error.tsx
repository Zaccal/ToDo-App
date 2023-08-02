import { Link } from "react-router-dom";
import classes from './Error.module.css'

const Error = () => {
    return (
        <div className={`${classes.container} dark:bg-gray-900`}>
            <div className={classes.content}>
                <p className={classes.title}>404</p>
                <p className={classes.subtitle}>Page Not Found</p>
                <p className={classes.subheader}>
                    Sorry, the page you are looking for could not be found.
                </p>
                <a href="#" className={classes.button} title="Return Home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <Link to={'/'}>Return Home</Link>
                </a>
            </div>
        </div>
    );
};

export default Error;
