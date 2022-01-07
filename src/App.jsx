import Link from './router/Link';
import Route from './router/Route';
import Switch from './router/Switch';
import BrowserRouter from './router/BrowserRouter';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';

const App = () => {
    const style = {
        padding: '50px',
        textAlign: 'center',
    };
    return (
        <div style={style}>
            <BrowserRouter>
                <div>
                    <Link to="/a">组件A</Link>
                    <Link to="/b">组件B</Link>
                    <Link to="/a/c">组件C</Link>
                </div>
                <Switch>
                    <Route path="/a" component={A} />
                    <Route path="/b" component={B} />
                    <Route path="/a/c" component={C} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
