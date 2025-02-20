"use client"
import IconButton from '@/components/iconButton'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { Link, CopyIcon } from 'lucide-react'
import React from 'react'

interface invitelinkInputProps {
  inviteLink: string
}

export default function invitelinkInput({inviteLink}: invitelinkInputProps) {

  const InviteLinkInput = () => {
    navigator.clipboard.writeText(inviteLink)
  }


  return (
    <InputRoot>
    <InputIcon>
      <Link className="size-5" />
    </InputIcon>
    <InputField
      defaultValue={inviteLink}
      readOnly
    />

    <IconButton className="-mr-2" onClick={InviteLinkInput}>
      <CopyIcon className="size-5"  />
    </IconButton>
  </InputRoot>
  )
}
