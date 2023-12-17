import { ShoppingCartIcon } from "@heroicons/react/20/solid"
const CardItem = () => {
    return (
        <div className="card">
            <div className="bg-white rounded-full p-3 flex justify-center items-center h-20 w-20">
                <ShoppingCartIcon className="text-[#F82013]" height={35} />
            </div>
            <p className="text-2xl font-black mt-3 font-body">Best Quality</p>
            <small className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</small>
        </div>
    )
}

export default CardItem
