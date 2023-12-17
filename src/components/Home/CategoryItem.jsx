import toples from '../../assets/toples.png'

const CategoryItem = () => {
    return (
        <div className="category flex flex-col items-center justify-center">
            <div className="category-pict bg-slate-300 w-36 h-36 rounded-lg mb-2 scalable hover:scale-105 hover:cursor-pointer">
                <img src={toples} alt="" width={150} height={150} />
            </div>
            <p className='font-extrabold text-xl'>Toples</p>
        </div>
    )
}

export default CategoryItem
