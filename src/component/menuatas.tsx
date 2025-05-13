const  MenuAtas:React.FC<{
    title : string
    color: string
    fontcolor: string
}> = ({title, color, fontcolor}) => {

    return<>
    <div style={{
        padding: "15px",
        background: color,
        color: fontcolor,
        fontWeight: "bold"}}> 
        {title}
    </div>
    </>
}
 
export default MenuAtas;