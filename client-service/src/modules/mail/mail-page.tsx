import { cookies } from "next/headers"
import Image from "next/image"

import { Mail } from "./components/mail"
import { accounts, mails } from "./data"

export default function MailPage() {
  // const layout = cookies()?.get("react-resizable-panels:layout:mail")
  // const collapsed = cookies()?.get("react-resizable-panels:collapsed")

  const defaultLayout = undefined
  const defaultCollapsed = undefined

  return (
    <>
      <div className="flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
