interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <>
      <iframe
        src={props.src}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        allow="autoplay; fullscreen"
        className="w-full h-full"
      ></iframe>
      {/* <video controls className="aspect-video w-full h-full">
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </>
  );
}
