import { useContext } from 'react';
import { RouterContext } from './Router';

const Switch = ({ children }) => {
    const { location } = useContext(RouterContext);
    children = Array.isArray(children) ? children : [children];
    for (const child of children) {
        const {
            props: { path },
        } = child;
        if (location.pathname === path) {
            return child;
        }
    }
    return null;
};

export default Switch;
