//import Foo from './components/Foo.jsx'
const Foo = () => import('./components/Foo.jsx');

export default function Page1() {
    return (
      <>
        <h1>Vite + React</h1>
        <p>This is a Page1 Page</p>
        <Foo />
      </>
    );
  }
  