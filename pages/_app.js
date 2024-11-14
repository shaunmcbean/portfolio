// _app.js
import '../styles/custom.global.scss';
import { Nav } from '../components/Navbar';
import { Header } from '../components/Header';
import { SEO } from '../config/config';
import { navigation } from '../config/config.js'; // Import navigation config

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header seo={SEO} /> {/* Optional SEO component */}
            <Nav title={navigation.name} links={navigation.links} /> {/* Use existing navigation config */}
            <div className="main-content">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
