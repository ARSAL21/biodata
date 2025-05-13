import { useRouter } from "next/router";

const Menubawah = ()=>{
    const link = useRouter();
    return <>
    <div style={{
    position:"fixed",
    bottom:0,
    width:"100%",
    left:0,
    borderTop:"2px solid black",
    padding:"10px"
    }}>
    <table width={"100%"}>
        <tbody>
            <tr>
                <td
                    onClick={()=> link.push("/")} 
                    width={"33,3%"} align="center">
                    <img src="/app.png" width={40} />
                    <div>beranda</div>
                </td>
                <td
                    onClick={()=> link.push("/profil")} 
                    width={"33,3%"} align="center">
                    <img src="/pf.png" width={40} />
                    <div>profil</div>
                </td>
                <td 
                    onClick={()=> link.push("/tentang")} 
                    width={"33,3%"} align="center">
                    <img src="/in.png" width={40} />
                    <div>tentang</div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    </>
}
export default Menubawah;