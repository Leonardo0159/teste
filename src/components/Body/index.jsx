import { useState } from "react";

export const Body = () => {

    const [numero2, setNumero2] = useState(1);

    const diminuir = () => {
        setNumero2(numero2 - 1);
    }

    const aumentar = () => {
        setNumero2(numero2 + 1);
    }

    return (
        <body className="bg-orange-500 flex flex-col gap-32">
            <div className="w-full flex justify-center">
                <h1 className="font-bold text-3xl">Hello world!!</h1>
            </div>
            <div className="w-full flex justify-center flex-row gap-4">
                <div>
                    <button onClick={diminuir}>-</button>
                </div>
                <div>
                    {numero2}
                </div>
                <div>
                    <button onClick={aumentar}>+</button>
                </div>
            </div>
        </body>
    )
}