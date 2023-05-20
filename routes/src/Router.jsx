import Index from './Index.jsx';
//import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

const Page1 = () => import('./Page1.jsx');


const path = window.location.pathname;

export default function Router() {
    switch (path) {
        case "/page1":
        case "/page1.html":
            return <Page1 key="page1" />;
        case "/page2":
        case "/page2.html":
            return <Page2 key="page2" />;    
        default:
            return <Index key="index" />;
    }
}
