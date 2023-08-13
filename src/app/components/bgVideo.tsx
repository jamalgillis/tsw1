"use client";

import { usePathname } from "next/navigation";

interface videoProps {
  videoSrc?: string;
  overlayColor?: string;
}

// const videoBlock = <video autoplay loop muted class="fullscreen-bg__video">
// <source src="your-video.mp4" type="video/mp4">
// Your browser does not support the video tag.
// </video>

// const showVideo = () => {
//   return (
//     {videoSrc ? <video></video>}
//   );
// }

function video() {}

export default function BgVideo(props: videoProps) {
  const pathname = usePathname();

  const renderVideo = pathname === "/";

  if (renderVideo) {
    return (
      <>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
          <div className=" bg-slate-800 w-full h-full object-cover"></div>
        </div>
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 z-10 bg-opacity-60 ${props.overlayColor}`}
        ></div>
      </>
    );
  } else return <></>;
}
