interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <div className="h-56">
      <iframe
        src={props.src}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        allow="autoplay; fullscreen"
        className="w-full aspect-video"
      ></iframe>
      {/* <video controls className="aspect-video w-full h-full">
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}
