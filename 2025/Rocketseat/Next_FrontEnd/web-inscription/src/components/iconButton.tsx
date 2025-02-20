import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


interface ButtonProps extends ComponentProps<'button'>{}


export default function IconButton({className, ...props}: ButtonProps) {
  return (
    <button type="button" className={twMerge("p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue transition-colors hover:text-gray-900 duration-300", className)}
    {...props}
    />
  )
}
