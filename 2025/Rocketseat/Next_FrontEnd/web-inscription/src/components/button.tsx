import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"


interface ButtonProps extends ComponentProps<'button'>{
  children?: ReactNode 
}


export default function Button({className, ...props}: ButtonProps) {
  return (
    <button className={twMerge("flex items-center justify-between px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue transition-colors hover:text-gray-900 duration-300", className)}
    {...props}
    />
  )
}
