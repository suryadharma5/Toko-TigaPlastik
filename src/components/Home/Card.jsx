import { ShoppingCartIcon } from "@heroicons/react/20/solid"
import CardItem from "./CardItem"

const Card = () => {
    const index = [1, 2, 3, 4]
    return (
        <div className="mt-28 text-center">
            <h1 className="title-text font-title">Why Choose Us</h1>
            <div className="cards mt-10 flex flex-row grid-rows-4 gap-16 justify-center">
                {
                    index.map((idx) => (
                        <CardItem key={idx} />
                    ))
                }

            </div>
        </div>
    )
}

export default Card
