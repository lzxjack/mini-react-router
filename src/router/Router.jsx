import { createContext, useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export const RouterContext = createContext();

const Router = ({ children }) => {
    const [location, setLocation] = useState(window.location);
    useEffect(() => {
        // 监听路由变化
        const unlisten = history.listen(({ location: loc }) => {
            setLocation(loc);
        });
        return () => {
            unlisten && unlisten();
        };
    }, []);
    return (
        <RouterContext.Provider value={{ history, location }}>{children}</RouterContext.Provider>
    );
};

export default Router;
