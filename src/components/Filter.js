import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Shop.module.css";
import "../css/Pure.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import { loadByFilterAsync } from "../redux/reducers/products/products.thunks";
import { getProductByFilter } from "../redux/reducers/getterReducer/product/product.thunk";

function Filter(props) {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const catId = match.params.catId;
    const {isLoading,products,errorMessage} = useSelector(
        (state) => state.products
    );

    // useSelector(state => console.log(state))
    // useSelector(state => console.log(state.newOfferData))
  const [cats, setCats] = useState([]);
  const [id, setId] = useState([]);
  const [value, setValue] = useState([1, 1000]);
  const [params, setParams] = useState({
    // mcategory : '',
    // price: `${value}`,
    // orderp: `${sort}`,
  });
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    params.price = `${newValue[0]},${newValue[1]}`;
    dispatch({
      type: "SET_PRICE",
      payload: params.price,
    });
  };
  function handleChangeValue(e) {
    if (!id.includes(e.target.value)) {
      id.push(e.target.value);
    } else {
      for (var i = 0; i < id.length; i++) {
        if (id[i] == e.target.value) {
          id.splice(i, 1);
        }
      }
    }
    params.mcategory = id.toString()
    dispatch({
      type: "SET_CATEGORY",
      payload: params.mcategory,
    });
  }
//   function handleSort(){
//       dispatch({
//         type: 'SORT_ELAVE_ET',
//         payload: 
//       })
//   }
//   console.log(params);
//   useEffect(() => {
//     dispatch(loadByFilterAsync(catId,params));
// }, [params]);

function handleSubmitFilter(){
//   console.log(params)
  dispatch(getProductByFilter(catId,params));
}

  const handleAddClass = (e) => {
    if (e.target.tagName == "A") {
      if (e.target.nextSibling.classList.contains("closeDrop")) {
        e.target.nextSibling.classList.remove("closeDrop");
        e.target.nextSibling.classList.add("openDrop");
        if (e.target.querySelector("span").classList.contains("notRotate")) {
          e.target.querySelector("span").classList.remove("notRotate");
          e.target.querySelector("span").classList.add("rotate");
        }
      } else if (e.target.nextSibling.classList.contains("openDrop")) {
        e.target.nextSibling.classList.remove("openDrop");
        e.target.nextSibling.classList.add("closeDrop");
        if (e.target.querySelector("span").classList.contains("rotate")) {
          e.target.querySelector("span").classList.remove("rotate");
          e.target.querySelector("span").classList.add("notRotate");
        }
      }
    }
  };
// console.log(products)
  // if (paramsHeader.mcategory) {
  //   const strArray = paramsHeader.mcategory.split(",");
  //   for (let i = 0; i < input.length; i++) {
  //     if (strArray.includes(input[i].value)) {
  //       // input[i].checked = true;
  //       input[i].setAttribute("checked", "checked");
  //     }
  //   }
  // }
function idCheck(catid){
  for(let i=0;i<id.length;i++){
    if(catid==id[i]){
      return 'checked';
    }
  }
}

return (
    <div className={styles.filter}>
        <div className={styles.filterClean}>
            <label>Filterlər:</label>
            <button type="reset">Filterləri sıfırla</button>
        </div>
        <div style={{ transition: ".4s" }} className={styles.openFilter}>
            <a onClick={(e) => handleAddClass(e)}>
            {" "}
            Kateqoriya
            <span className={"notRotate"}>
                <MdOutlineKeyboardArrowDown />
            </span>
            </a>
            <div id={"no1"} className={"closeDrop"}>
            <ul>
                {props.cats && props.cats.data.map((item) => (
                    <li>
                    <input onClick={(e) => handleChangeValue(e)} value={item.id} type="checkbox"/>
                    <Link key={item.id} to={item.id}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            </div>
        </div>
      {/* <div className={styles.openFilter}>
                    <a onClick={(e)=>handleAddClass(e)}>Ölçü<span className={'notRotate'}><MdOutlineKeyboardArrowDown/></span></a>
                    <div id={'no2'} className={'closeDrop'}>
                        <ul>
                            <li><input type='checkbox'/><span>Çox kiçik</span></li>
                            <li><input type='checkbox'/><span>Kiçik</span></li>
                            <li><input type='checkbox'/><span>Orta</span></li>
                            <li><input type='checkbox'/><span>Böyük</span></li>
                            <li><input type='checkbox'/><span>Çox böyük</span></li>
                        </ul>
                    </div>
                </div> */}
      {/* <div className={styles.openFilter}>
                    <a onClick={()=>handleAddClass()}>Rəng<span className={isActive ? 'notRotate' : 'rotate'}><MdOutlineKeyboardArrowDown/></span></a>
                    <div className={isActive ? 'openDrop' : 'closeDrop'}>
                        <ul>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                        </ul>
                    </div>
                </div> */}
      <div className={styles.openFilter}>
        <a onClick={(e) => handleAddClass(e)}>
          Qiymət
          <span className={"notRotate"}>
            <MdOutlineKeyboardArrowDown />
          </span>
        </a>
        <div id={"no2"} className={"closeDrop"}>
          <div>
            Qiymət aralığı:{" "}
            <span className={styles.range}>{value[0]} azn - {value[1]} azn</span>
          </div>
          <div style={{ margin: "auto", display: "block", padding: "1rem 0" }}>
            <Typography id="range-slider" gutterBottom>Aralığı seçin:</Typography>
            <Slider step={1} max={1000} min={0} value={value} onChange={rangeSelector} valueLabelDisplay="auto"/>
          </div>
        </div>
      </div>
      <div className={styles.filterDo}>
        <button onClick={()=>handleSubmitFilter()} type="submit">Filteri tətbiq et</button>
      </div>
    </div>
  );
}

export default Filter;
