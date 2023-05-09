import App from './App.jsx';
import App1 from './App1.jsx';
import App2 from './App2.jsx';
import './App.css';

const pages = [
    'index',
    'app1',
    'app2',
];

const apps = [
    <App  key="0" />,
    <App1 key="1" />,
    <App2 key="2" />,
];

export default function RouteManager() {
    const path = window.location.pathname;
    let i = 0;
    try {
        do {
            if ( 
                path == pages[i] || 
                path == `${pages[i]}.html`
            ) { 
                return apps[i]; 
            }
            i++;
        } while ( 
            i < apps.length  || 
            i < pages.length ||
            path != pages[i] || 
            path != `${pages[i]}.html` 
        );
    } catch (err) {
        console.error(err);
        return <App />;
    }
}
