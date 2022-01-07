import { useContext } from 'react';
import { RouterContext } from './Router';

const Switch = ({ children }) => {
    const { location } = useContext(RouterContext);
    const routes = [...children];
    return (
        <>
            {routes.map(child => {
                const {
                    props: { path },
                } = child;
                if (location.pathname === path) {
                    return child;
                }
                return null;
            })}
        </>
    );
};

export default Switch;
