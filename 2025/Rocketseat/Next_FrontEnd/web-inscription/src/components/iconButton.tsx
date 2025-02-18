import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'>{}


export default function IconButton(props: ButtonProps) {
  return (
    <button type="button" className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue transition-colors hover:text-gray-900 duration-300"
    {...props}
    />
  )
}
