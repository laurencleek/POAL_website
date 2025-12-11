'use client'

import Script from "next/script"

export function Analytics() {
  return (
    <>
      <Script
        data-goatcounter="https://poal.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
    </>
  )
}
