import { useContext } from 'react';
import { RouterContext } from './BrowserRouter';

const style = {
    border: '2px solid blue',
    padding: '10px',
    margin: '20px',
    textDecoration: 'none',
};

const Link = ({ to, children }) => {
    const { history } = useContext(RouterContext);
    return (
        <a
            href={to}
            style={style}
            onClick={e => {
                e.preventDefault();
                history.push(to);
            }}
        >
            {children}
        </a>
    );
};

export default Link;
