import Invert from "./Invert";
import Vert from "./Vert";

function Header() {
  return (

    <table border={2}>
      <tr>
        <td>
          <h2><center>Invertebrates</center></h2>
          <img src="https://images.slideplayer.com/14/4428120/slides/slide_2.jpg" width={200} alt="Invertebrates"/>
        </td>
        <td>
          <h2><center>Vertebrates</center></h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTmbV7ghD28IH09uDRXuidpQfcJ0bot6gFg&usqp=CAU"
               width={200} alt="Vertebrates"/>
        </td>
      </tr>

      <tr>
        <td><Invert/></td>
        <td><Vert/></td>
      </tr>
    </table>
  )
}

export default Header;