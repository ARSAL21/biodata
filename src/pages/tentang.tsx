import Menubawah from "@/component/menu_bawah"
import MenuAtas from "@/component/menuatas"
import Sile from "@/component/silde";


const tentang = () => {
  return (
    <>
      <MenuAtas color="#8DD8FF" title="ini adalah menu atas" fontcolor="black"/>
      <Menubawah />
      <Sile/>
      <center>
        <h1>ini adalah tentang</h1>
        <br />
        <center>
          nama : arsal 
          nim : 23650035
        </center>
      </center>
    </>
  );
};

export default tentang;