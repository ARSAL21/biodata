import Menubawah from "@/component/menu_bawah"
import MenuAtas from "@/component/menuatas"
import Sile from "@/component/silde";


const Beranda = () => {
  return (
    <>
      <MenuAtas color="#8DD8FF" title="ini adalah menu atas" fontcolor="black"/>
      <Menubawah />
      <Sile/>
      <center>
        <h1>ini adalah beranda</h1>
      </center>
    </>
  );
};

export default Beranda;