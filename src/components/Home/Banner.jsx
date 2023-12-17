import mockBanner from '../../assets/mockBanner.jpg'
import { TypeAnimation } from 'react-type-animation'

const Banner = () => {
    return (
        <div className="banner static">
            <img src={mockBanner} alt="" height={10} className='banner' />
            <div className="judul absolute w-full text-center bottom-1/3 p-5 text-[#F2F5EA]">
                {/* <h1 className='text-7xl font-black '>HALO INI COBA</h1> */}
                <TypeAnimation
                    sequence={[
                        'We Sell Plastic Bottle',
                        2000,
                        'We Sell Plastic Cup',
                        2000,
                        'We Sell Plastic Plate',
                        2000
                    ]}
                    wrapper='h1'
                    speed={30}
                    className='text-7xl'
                    repeat={Infinity}
                />
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, natus?</h4>
                <button className='bg-[#F82013] px-10 py-3 mt-5 rounded-lg scalable hover:scale-95 hover:bg-[#A40800]'>Shop Now</button>
            </div>
            <div className='w-full absolute -bottom-12 flex justify-center'>
                <div className="info bg-[#F82013] w-1/2 h-24 text-center rounded-lg flex flex-row justify-between px-14 items-center text-white">
                    <span className='flex flex-col'>
                        <p className='text-3xl font-bold'>10+</p>
                        <p>Years</p>
                    </span>
                    <span className='flex flex-col'>
                        <p className='text-3xl font-bold'>30K+</p>
                        <p>Furnitures</p>
                    </span>
                    <span className='flex flex-col' >
                        <p className='text-3xl font-bold'>40k+</p>
                        <p>Active Members</p>
                    </span>
                    <span className='flex flex-col' >
                        <p className='text-3xl font-bold'>10K+</p>
                        <p>New Users</p>
                    </span>
                </div>
            </div>
            {/* <div className="h-52"></div> */}
        </div>
    )
}

export default Banner
