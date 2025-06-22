import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
    return (
        <div className="home-layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout
