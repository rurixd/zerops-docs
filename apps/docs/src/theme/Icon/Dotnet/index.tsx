import { IconProps } from "@medusajs/icons/dist/types"
import clsx from "clsx"
import React from "react"

const IconDotnet = (props: IconProps) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 456 456"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx("text-ui-fg-subtle", props.className)}
    >
      <path fill="#512BD4" d="M0 0h456v456H0z" />
      <path
        fill="#fff"
        d="M81.274 291.333c-3.224 0-5.965-1.074-8.222-3.223-2.257-2.204-3.386-4.821-3.386-7.851 0-3.086 1.129-5.73 3.386-7.934 2.257-2.204 4.998-3.306 8.222-3.306 3.278 0 6.045 1.102 8.302 3.306 2.311 2.204 3.466 4.848 3.466 7.934 0 3.03-1.155 5.647-3.466 7.851-2.257 2.149-5.024 3.223-8.302 3.223ZM210.167 289.515h-20.958l-55.215-87.109a38.977 38.977 0 0 1-3.466-6.86h-.484c.43 2.535.645 7.962.645 16.281v77.688h-18.54V171h22.328l53.362 85.043c2.257 3.527 3.708 5.951 4.353 7.273h.322c-.537-3.14-.806-8.457-.806-15.951V171h18.459v118.515ZM300.449 289.515h-64.888V171h62.309v16.695h-43.124v33.554h39.739v16.612h-39.739v35.042h45.703v16.612ZM392.667 187.695h-33.21v101.82h-19.185v-101.82h-33.129V171h85.524v16.695Z"
      />
    </svg>
  )
}

export default IconDotnet
