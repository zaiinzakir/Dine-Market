import { FC } from "react"

const Wrapper: FC<{ children: React.ReactNode}> = ({ children}) => {
    return (
        <div className="max-w-7xl border-4 mx-auto ">
            {children}
        </div>
    )
}

export default Wrapper