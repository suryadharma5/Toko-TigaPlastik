import Banner from '../components/Home/Banner'
import Card from '../components/Home/Card'
import Category from '../components/Home/Category'
import Products from '../components/Home/Products'

const Home = () => {
    return (
        <div className='mb-52'>
            <Banner />
            <Card />
            <Category />
            <Products />
        </div>
    )
}

export default Home
