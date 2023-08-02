import classes from './Welcome.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const GITHUB_REPOSITORIES_LINK = 'https://github.com/Zaccal/ToDo-App' 

    return (
       <>
            <header className={classes.header}>
                <nav className={`${classes.nav} dark:bg-gray-800 dark:from-transparent`}>
                    <div className={classes.headerContainer}>
                        <div className="flex items-center">
                            <img src="../../../public/Logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className={`${classes.logoText} dark:text-white`}>ToDo-App</span>
                        </div>
                        <div className="flex items-center lg:order-2">
                            <Link 
                                to={'/settings'} 
                                className={`${classes.navLink} dark:focus:ring-gray-800 hover:dark:bg-slate-500 dark:bg-gray-700 dark:text-white`}
                            >
                                Settings
                            </Link>
                        </div>
                    </div>
                </nav>
            </header> 
            <section className={`${classes.section} dark:bg-gradient-to-r dark:from-[#0f2027] dark:via-slate-800 dark:to-gray-900`}>
                <div className={classes.container}>
                    <div className="text-center">
                        <p className={`${classes.onSubTitle} dark:text-element`}>
                            Organize. Prioritize. Accomplish.
                        </p>
                        <h1 className={`${classes.title} dark:text-white`}>Your Ultimate ToDo&nbsp; Companion</h1>
                        <p className={`${classes.subtitle} dark:text-slate-400`}>
                            Stay on Top of It All: Introducing Your Personalized ToDo Application for 
                            Enhanced Productivity and Seamless Task Management.
                        </p>
                    </div>

                    <div className={classes.buttonContainer}>
                        <Link to="/application" className={classes.buttonContained}>
                            <span className='pr-[2px]q'>Get started</span>
                            <KeyboardArrowRightRoundedIcon />
                        </Link>
                        <a 
                            target='_blank' 
                            href={GITHUB_REPOSITORIES_LINK} 
                            className={`${classes.buttonOutline} dark:border-slate-200 dark:text-white`}
                        >
                            <span className='pr-2'>GitHub</span>
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Welcome;
