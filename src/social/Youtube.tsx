
function getYoutubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url)

    // youtu.be/VIDEO_ID
    if (parsedUrl.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`
    }

    // youtube.com/watch?v=VIDEO_ID
    const videoId = parsedUrl.searchParams.get("v")
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }

    // youtube.com/shorts/VIDEO_ID
    if (parsedUrl.pathname.includes("/shorts/")) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.split("/shorts/")[1]}`
    }

    return ""
  } catch {
    return ""
  }
}


type YoutubeProps = {
  link: string
}

function Youtube({ link }: YoutubeProps) {
  const embedUrl = getYoutubeEmbedUrl(link)

  if (!embedUrl) {
    return <p className="text-red-500">Invalid YouTube link</p>
  }

  return (
    <iframe
      src={embedUrl}
      title="YouTube video player"
      className="w-full aspect-video rounded-lg"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}

export default Youtube
