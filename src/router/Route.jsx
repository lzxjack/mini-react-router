import { createElement, useContext } from 'react';
import { RouterContext } from './Router';

const Route = ({ path, component }) => {
    const { location } = useContext(RouterContext);
    return <>{location.pathname === path ? createElement(component) : null}</>;
};

export default Route;
