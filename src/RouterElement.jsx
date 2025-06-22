import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getKeyForTable } from './Utils';
import { PageLoader } from './Loader';
import HomeLayout from './Components/user/layout/HomeLayout';
const HomePageContent = lazy(() => import('./Components/user/HomePageContent'));
const PageNotFound = lazy(() => import('./Components/user/PageNotFound'));

function PrivateRoute({ children }) {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('You are not logged in. Please log in to access this page.');
    }
    return token ? children : <Navigate to="/" replace />;
}
PrivateRoute.propTypes = {
    children: PropTypes.any,
};


const routes = [
    {
        element: <HomeLayout />,
        children: [
            { index: true, element: <HomePageContent /> },
            { path: "/", element: <HomePageContent /> },
            { path: "/page", element: <PrivateRoute><PageNotFound /></PrivateRoute> }
        ]
    }

];
function RouterElement() {
    return (
        <Routes>
            {routes.map((route, index) => {
                const { path, element, children, ...rest } = route;
                return <Route key={getKeyForTable('parent', index)} path={path} element={element} {...rest}>
                    {children?.map((child, idx) => (
                        <Route key={getKeyForTable('child', idx)} path={child.path}
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    {child.element}
                                </Suspense>
                            }
                            {...child} />
                    ))}
                </Route>
            })}
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default RouterElement


