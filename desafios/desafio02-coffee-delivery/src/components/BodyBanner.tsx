import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Cup from "../images/CoffeDeliveryCup.png"

export function BodyBanner() {
    return (
        <div className="flex">
            <div>
                <div>
                    <h1 className="font-extrabold text-4xl">Encontre o cafe perfeito para qualquer hora do dia</h1>
                    <h3>Com o Coffe Delivery voce recebe seu cafe onde estiver, a qualquer hora</h3>
                </div>
                <div className="flex">
                    <div>
                        <span className="flex"><div className="bg-[#C47F17] rounded-full w-7 h-7 flex items-center justify-center">
                            <ShoppingCart color="white" />
                        </div>
                            <h1>Compra simples e segura</h1></span>
                        <span className="flex">
                            <div className="bg-[#DBAC2C] rounded-full w-7 h-7 flex items-center justify-center">
                                <Timer color="white" />
                            </div> <h1>Compra simples e segura</h1></span>
                    </div>
                    <div>
                        <span className="flex">
                            <div className="bg-[#574F4D] rounded-full w-7 h-7 flex items-center justify-center">
                                <Package color="white" />
                            </div>
                            <h1>Compra simples e segura</h1>
                        </span>
                        <span className="flex">
                            <div className="bg-[#8047F8] rounded-full w-7 h-7 flex items-center justify-center">
                                <Coffee color="white" className="bg-[#8047F8] rounded-full" />
                            </div> <h1>Compra simples e segura</h1></span>
                    </div>
                </div>
            </div>
            <img src={Cup} />

        </div>
    )
}