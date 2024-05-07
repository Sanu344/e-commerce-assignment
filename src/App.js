import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [datalist, setDatalist] = useState([{}]);
  const [page, setPage] = useState(0);
  const [hover, setHover] = useState(false);
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image2, setImage2] = useState();
  const [title2, setTitle2] = useState();
  const [description2, setDescription2] = useState();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("list"))) {
      setDatalist(JSON.parse(localStorage.getItem("list")));
    } else {
      axios("https://fakestoreapi.com/products").then((data) => {
        localStorage.setItem("list", JSON.stringify(data.data));
        setDatalist(JSON.parse(localStorage.getItem("list")));
        console.table(data.data);
        console.log(data.data.length);
      });
    }
  }, []);

  const handleHover = (data) => {
    setHover(true);
    setTitle(data.title);
    setImage(data.image);
    setDescription(data.description);
    //console.log(data);
  };

  const handleChange = (e) => {
    const items = JSON.parse(localStorage.getItem("list"));
    const value = e.target.value;
    console.log(value);
    let arr = [];
    switch (value) {
      case "all":
        setDatalist(items);
        break;
      case "men's clothing":
        arr = items.filter((item) => item.category == value);
        setDatalist(arr);
        break;
      case "women's clothing":
        arr = items.filter((item) => item.category == value);
        setDatalist(arr);
        break;
      case "jewelery":
        arr = items.filter((item) => item.category == value);
        setDatalist(arr);
        break;
      case "electronics":
        arr = items.filter((item) => item.category == value);
        setDatalist(arr);
        break;
    }
    setPage(0);
  };

  const handleClick = (data) => {
    setClick(true);

    setTitle2(data.title);
    setImage2(data.image);
    setDescription2(data.description);
  };

  return (
    <>
      <div className="main">
        <div className="select">
          <select onChange={handleChange}>
            <option value="all">All</option>
            <option value="men's clothing">Mens Clothing</option>
            <option value="women's clothing">Womens Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="top">Products Available</div>
        <div className="second">
          {datalist[page + 0] && (
            <img
              className="image"
              src={datalist[page + 0].image}
              alt=""
              onClick={() => handleClick(datalist[page + 0])}
              onMouseEnter={() => handleHover(datalist[page + 0])}
              onMouseLeave={() => setHover(false)}
            />
          )}
          {datalist[page + 1] && (
            <img
              className="image"
              src={datalist[page + 1].image}
              alt=""
              onClick={() => handleClick(datalist[page + 1])}
              onMouseEnter={() => handleHover(datalist[page + 1])}
              onMouseLeave={() => setHover(false)}
            />
          )}
          {datalist[page + 2] && (
            <img
              className="image"
              src={datalist[page + 2].image}
              alt=""
              onClick={() => handleClick(datalist[page + 2])}
              onMouseEnter={() => handleHover(datalist[page + 2])}
              onMouseLeave={() => setHover(false)}
            />
          )}
          {datalist[page + 3] && (
            <img
              className="image"
              src={datalist[page + 3].image}
              alt=""
              onClick={() => handleClick(datalist[page + 3])}
              onMouseEnter={() => handleHover(datalist[page + 3])}
              onMouseLeave={() => setHover(false)}
            />
          )}
          {datalist[page + 4] && (
            <img
              className="image"
              src={datalist[page + 4].image}
              alt=""
              onClick={() => handleClick(datalist[page + 4])}
              onMouseEnter={() => handleHover(datalist[page + 4])}
              onMouseLeave={() => setHover(false)}
            />
          )}
        </div>
        <div className="third">
          {datalist[page + 5] && (
            <img
              className="image"
              src={datalist[page + 5].image}
              alt=""
              onClick={() => handleClick(datalist[page + 5])}
              onMouseEnter={() => handleHover(datalist[page + 5])}
              onMouseLeave={() => setHover(false)}
            />
          )}
          {datalist[page + 6] && (
            <img
              className="image"
              src={datalist[page + 6].image}
              alt=""
              onClick={() => handleClick(datalist[page + 6])}
              onMouseEnter={() => handleHover(datalist[page + 6])}
              onMouseLeave={() => setHover(false)}
            />
          )}
          {datalist[page + 7] && (
            <img
              className="image"
              src={datalist[page + 7].image}
              alt=""
              onClick={() => handleClick(datalist[page + 7])}
              onMouseEnter={() => handleHover(datalist[page + 7])}
              onMouseLeave={() => setHover(false)}
            />
          )}
          {datalist[page + 8] && (
            <img
              className="image"
              src={datalist[page + 8].image}
              alt=""
              onClick={() => handleClick(datalist[page + 8])}
              onMouseEnter={() => handleHover(datalist[page + 8])}
              onMouseLeave={() => setHover(false)}
            />
          )}
          {datalist[page + 9] && (
            <img
              className="image"
              src={datalist[page + 9].image}
              alt=""
              onClick={() => handleClick(datalist[page + 9])}
              onMouseEnter={() => handleHover(datalist[page + 9])}
              onMouseLeave={() => setHover(false)}
            />
          )}
        </div>
        {datalist.length > 10 && (
          <div className="pageswitch">
            <div className="nextpage">
              <button className="nextpage" onClick={() => setPage(0)}>
                Previous Page
              </button>
            </div>
            <div className="previous">
              <button className="previous" onClick={() => setPage(10)}>
                Next Page
              </button>
            </div>
          </div>
        )}

        {hover && (
          <div
            className="hover"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="imagebox">
              <div className="product">{title && title}</div>
              <div className="imageView">
                {image && <img className="img" src={image} alt="image" />}
              </div>
            </div>
            <div className="description">
              Description: {description && description}
            </div>
          </div>
        )}

        {click && (
          <div className="click">
            <div className="imagebox2">
              <div className="product2">{title2 && title2}</div>
              <div className="imageView2">
                {image2 && <img className="img2" src={image2} alt="image2" />}
              </div>
            </div>
            <div className="description2">
              <button className="close" onClick={() => setClick(false)}>
                Close
              </button>
              <p>Description: {description2 && description2}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
