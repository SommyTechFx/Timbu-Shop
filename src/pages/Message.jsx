import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./../components/Styles/message.css";
import pic6 from "./../images/productimages/pic6.png";

function Message() {
  return (
    <section>
      <section className="product-direction">
        <div className="pd1">
          <h3>Home</h3>
          <MdOutlineArrowRight className="icon" />
          <p>Check out</p>
        </div>
        <div className="pd2">
          <p>Back</p>

          <Link to="/form-details">
            <IoIosArrowRoundBack className="icon" />
          </Link>
        </div>
      </section>

      <section className="goodbybe-message">
        <h3>Thank you for shopping at Lasom</h3>
        <h4 id="bingo">
          Your order confirmation and receipt have been sent to xyz@gmail.com
        </h4>

        <section className="sub-goodbye-message">
          <h1>Receipt</h1>
          <section id="on-the-way-out-price-list">
            <div id="each-price-x">
              <h4>Transaction Date</h4>
              <p>05-07-2024</p>
            </div>
            <div id="each-price-x">
              <h4>Transaction ID</h4>
              <p>4356789200ASDRE</p>
            </div>
            <div id="each-price-x">
              <h4>Arrival Date</h4>
              <p>10-07-2024</p>
            </div>
          </section>
          <hr id="underline2" />
          <div className="on-the-way-out">
            <img src={pic6} alt="" />
            <div className="on-the-way-out-price">
              <h2>Diamond cut Ring</h2>
              <p>$2,500</p>
            </div>
          </div>
          <hr id="underline2" />
          <section id="on-the-way-out-price-list">
            <div id="each-price-x">
              <h4>Subtotal</h4>
              <p>$2,500.00</p>
            </div>
            <div id="each-price-x">
              <h4>Delivery Fee</h4>
              <p>$10.00</p>
            </div>
            <div id="each-price-x">
              <h4>Discount</h4>
              <p>-$5.00</p>
            </div>
          </section>
          <hr id="underline2" />
          <div id="each-price-x">
            <h4>TOTAL</h4>
            <p>$2,505.00</p>
          </div>
        </section>
        <Link to="/">
          <button className="click-proceed2">Continue shopping</button>
        </Link>
      </section>
    </section>
  );
}

export default Message;
