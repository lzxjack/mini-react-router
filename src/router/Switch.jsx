import { useContext } from 'react';
import { RouterContext } from './BrowserRouter';

const Switch = ({ children }) => {
    const { location } = useContext(RouterContext);
    const routes = Array.isArray(children) ? children : [children];
    return (
        <>
            {routes.map(child => {
                const {
                    props: { path },
                } = child;
                if (location.pathname === path) return child;
                return null;
            })}
        </>
    );
};

export default Switch;
