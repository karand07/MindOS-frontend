"use client"

import { useEffect, useRef } from "react"

type TwitterProps = {
  link: string
}

declare global {
  interface Window {
    twttr?: any
  }
}

function Twitter({ link }: TwitterProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    ref.current.innerHTML = ""

    const blockquote = document.createElement("blockquote")
    blockquote.className = "twitter-tweet"

    const a = document.createElement("a")
    a.href = normalizeTwitterUrl(link)

    blockquote.appendChild(a)
    ref.current.appendChild(blockquote)

    if (window.twttr) {
      window.twttr.widgets.load(ref.current)
    } else {
      const script = document.createElement("script")
      script.src = "https://platform.twitter.com/widgets.js"
      script.async = true
      script.onload = () => window.twttr?.widgets.load(ref.current)
      document.body.appendChild(script)
    }
  }, [link])

  return <div ref={ref}  />
}

export default Twitter

function normalizeTwitterUrl(url: string) {
  return url.replace("x.com", "twitter.com")
}
