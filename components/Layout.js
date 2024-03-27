import Navbar from './Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import ClassNames from 'classnames';


const Layaut = ({ children, footer = true, dark = false, title }) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url)
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => NProgress.done())

        return () => {
            router.events.off('routerChangeStart', handleRouteChange)
        }

    }, [])

    return (
        <div className={ClassNames({ 'bg-dark': dark, 'bg-light': !dark })}>

            <Navbar />


            <main className='py-0' style={{ paddingTop: '70px', top: '70px' }}>

                {title && (
                    <h1 className={ClassNames('text-center', { 'text-light': dark })}>
                        {title}
                    </h1>

                )}

                {children}
            </main>



            {
                footer && (
                    < footer className='bg-dark text-light text-center'>
                        <div className="container p4">
                            <p><a href="https://rock4mel.com">rock4mel</a> <br />2020 -{new Date().getFullYear()}</p>
                        </div>

                    </footer >
                )
            }
        </div>
    )
}

export default Layaut;