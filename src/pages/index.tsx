import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const[ukuran, setUkuran] = useState(400)
  return (
    <>
     <h1>selamat asdojsanjoanjosaoj di web</h1>
     <img width={ukuran} src="/grammarly.webp" alt="" />
     <br />
     {ukuran}
     <br />
     <button onClick={()=>{
      setUkuran(ukuran + 10)
     }}>ubah ukuran</button>
     <button onClick={()=>{
      setUkuran(ukuran - 10)}}> set ukuran</button>
      <Link href="/bio">biodata</Link>
      
    </>
  );
}
