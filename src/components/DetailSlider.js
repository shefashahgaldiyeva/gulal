import React,{ useState } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { useSelector } from 'react-redux'

function App(props) {

    // console.log(props.data.image)
    // console.log(props.data)
    // const selector = useSelector(state=>state.newOfferData)
    // console.log(selector[0].img)
    // const [state, setstate] = useState([])
    // selector.forEach((item)=>{
        // console.log(item)
        // setstate(item.img)
    // })

    
 const data = [
    {
      image: props.data.photo
    }
  ];
  if(props.data.image){
    props.data.image.map((img)=>{
        data.push(img)
    })
  }
  console.log(data)

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;