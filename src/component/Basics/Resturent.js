import React, {useState} from 'react'
import "./style.css"
import MenuApi from './MenuApi'
import MenuCard from "./MenuCard"
import Navbar from './Navbar'

const uniqueList = [...new Set(MenuApi.map((curElem)=> {
  return curElem.category;
})
),
"All",
];
console.log(uniqueList);




const Resturent = () => {
        // const [menuData, setMenuData] = React.useState(MenuApi);
        const [menuData, setMenuData] = useState(MenuApi);
        const [menuList] = useState(uniqueList);
        // console.log(menuData);
        const filterItem = (category) => {
              if (category === "All"){
                setMenuData(MenuApi);
                return;
              }

          const updatedList = MenuApi.filter((curElem) => {
          return curElem.category === category;
          });

        setMenuData(updatedList);
        };
    return (
      <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData= {menuData}/>
      </>
    )
  }
  export default Resturent;
























// function Resturent() {
//   return (
//     <div>
//       <h1>hello resturant</h1>
//     </div>
//   )
// }

// export default Resturent;