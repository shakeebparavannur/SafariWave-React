import axios from "axios";
import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import { AccessTime } from "@mui/icons-material";
import Groups2Icon from "@mui/icons-material/Groups2";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import "./PackageDetails.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { userContext } from "../App";


const PackageDetails = () => {
  const [packages, setPackage] = useState([]);
  const [facilities, setFacilities] = useState("");
  const [count, setCount] = useState(0);
  const [cost, setCost] = useState();
  const [review, setReview] = useState([]);
  const [date,setDate] = useState()
  const { id } = useParams();
  const { isUserLoggedIn } = useContext(userContext);
  const naviagate = useNavigate()
  
  const bookindDetails = {
    date:date,
    numOfPerson:count,
    totalamount:cost,
    packId:id,
    minPerson:packages.minNoOfPerson,
    price:packages.offerPrice
  }

  const handleDateChange =(e)=>{
    setDate(e.target.value);
  }
  console.log(date,"date");
  const handleBooking=()=>{
    if(date==null|date==undefined){
      window.alert("please select a date")
    }
    else{
      if(isUserLoggedIn){
        naviagate(`/confirmBooking/${id}`,{state:{bookindDetails}});
      }
      else{
        naviagate("/login",{ state: { originalPath: `/productdetails/${id}` } })
      }
    }
  }
  

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/Packages/package/${id}`
      );
      setPackage(response.data);
      setFacilities(response.data.facilities);
      setCount(response.data.minNoOfPerson);
      setCost(response.data.offerPrice * response.data.minNoOfPerson);
      setReview(response.data.reviews);
    } catch (error) {
      console.error("Error fetching package details:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  useEffect(() => {
    setCost(count * packages.offerPrice);
  }, [count, packages.offerPrice]);
  const handleInrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    if (count <= packages.minNoOfPerson) {
      window.alert(`Minimum No of person is ${packages.minNoOfPerson}`);
    } else {
      setCount((count) => count - 1);
    }
  };
  console.log(packages, "packages");
  console.log(review, "reviews");
  console.log(facilities);
  console.log(count, "count");
  return (
    <div className="package-details-container container-fluid">
      <div className="cover-image">
        <img
          src={`${import.meta.env.VITE_APP_URL}/coverImage/${
            packages.coverImage
          }`}
          alt="SafariWave"
        />
      </div>
      <div className="package-title">
        <h1>{packages.packageName}</h1>
      </div>
      <div className="image-row row">
        <img
          className="col-lg-3 col-md-6 col-sm-12"
          src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image1}`}
          alt=""
        />
        <img
          className="col-lg-3 col-md-6 col-sm-12"
          src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image2}`}
          alt=""
        />
        <img
          className="col-lg-3 col-md-6 col-sm-12"
          src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image3}`}
          alt=""
        />
        <img
          className="col-lg-3 col-md-6  col-sm-12"
          src={`${import.meta.env.VITE_APP_URL}/Image/${packages.image4}`}
          alt=""
        />
      </div>
      <div className="pack-desc">
        <h1>About this tour</h1>
        <p>{packages.describtion}</p>
      </div>

      <div className="details-row row">
        <div className="duration col-md-3 mt-2 col-sm-6">
          <div className="item d-flex ">
            <div className="icon">
              <AccessTime />
            </div>
            <div className="info">
              <div className="info-name">Duration</div>
              <div className="info-value">{packages.duration} days</div>
            </div>
          </div>
        </div>
        <div className="package-type col-md-3 mt-2 col-sm-6 ">
          <div className="item d-flex ">
            <div className="icon">
              <CardTravelIcon />
            </div>
            <div className="info">
              <div className="info-name">Type</div>
              <div className="info-value">{packages.type}</div>
            </div>
          </div>
        </div>
        <div className="min-person col-md-3 mt-2 col-sm-6 ">
          <div className="item d-flex ">
            <div className="icon">
              <Groups2Icon />
            </div>
            <div className="info">
              <div className="info-name">Group Size</div>
              <div className="info-value">{packages.minNoOfPerson}</div>
            </div>
          </div>
        </div>
        <div className="min-person col-md-3 mt-2 col-sm-6">
          <div className="item d-flex ">
            <div className="icon">
              <MyLocationIcon />
            </div>
            <div className="info">
              <div className="info-name">Location</div>
              <div className="info-value">{packages.location}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-info row">
        <div className="facilities col-md-3 col-sm-12">
          <div className="info-name">
            <h1>Includes:</h1>
          </div>
          <div className="info-value">
            <ul>
              {facilities.split(",").map((fac, id) => (
                <li className="facility-list" key={id}>
                  <CheckBoxIcon />
                  {fac}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" reviews col-md-5 col-sm-12">
          <div className="info-name">
            <h1>Reviews</h1>
          </div>
          <div className="info-value">
            {review.map((rw) => (
              <div className="d-flex justify-content-between">
                <figure class="text-center">
                  <blockquote class="blockquote">
                    <span className="review">
                      {rw.review1}
                    </span>
                    
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    {rw.userName}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div div className="book-form col-md-4">
          <div className="booking-price d-flex align-self-end">
            <span className="align-self-end">From: </span>
            <span className="price d-flex align-content-end flex-column">
              <span className="text-lg">
                &nbsp;&nbsp;${packages.offerPrice}/person
              </span>
            </span>
          </div>
          <div className="form-div">
            <div className="form-date d-flex align-item-center justify-content-between">
              <div className="form-info-title">Choose the date</div>
              <div className="info-action">
                <input type="date" min={new Date().toISOString().split('T')[0]} onChange={handleDateChange} />
              </div>
            </div>
            <div className="form-person d-flex align-item-center justify-content-between">
              <div className="form-info-title">No of person</div>
              <div className="info-action">
                <button onClick={() => handleInrement()}>+</button>
                {count}
                <button onClick={() => handleDecrement()}>-</button>
              </div>
            </div>
            <div className="total-price d-flex align-item-center justify-content-between">
              <div className="form-info-title">Total Amount</div>
              <div className="info-action">{cost}</div>
            </div>
            <div className="form-submit d-flex align-item-center justify-content-center">
              <button className="book-btn" onClick={()=>handleBooking()}>Book the Tour</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
