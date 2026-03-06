import Image from "next/image";
import 'animate.css'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate__animated animate__flipInY">
        <Image src="/bz.png" alt="loading" width={100} height={100} />
      </div>
    </div>
  );
}