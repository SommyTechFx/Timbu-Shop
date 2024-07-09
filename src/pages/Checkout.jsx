import { CgProfile } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./../components/Styles/Checkout.css";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import pic6 from "./../images/productimages/pic6.png";
function checkout() {
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

          <Link to="/shopping-cart">
            <IoIosArrowRoundBack className="icon" />
          </Link>
        </div>
      </section>
      <section className="total-form-details">
        <section>
          <div className="total-name-email">
            <label
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Contact Information
            </label>
            <br />
            <div className="name-email">
              <div className="name-tag">
                <CgProfile className="name-tag-img" />
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="name-tag">
                <BsTelephone className="name-tag-img" />
                <input type="text" placeholder="Enter your phone number" />
              </div>
            </div>
          </div>
          <div>
            <label
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Shipping Address
            </label>
            <br />
            <div className="name-tag2">
              <CiLocationOn className="name-tag-img" />
              <input type="text" placeholder="Enter your house address" />
            </div>
            <div className="div-flex">
              <div className="name-tag">
                <CiLocationOn className="name-tag-img" />
                <input type="text" placeholder="Enter your house address" />
              </div>
              <div className="name-tag">
                <CiLocationOn className="name-tag-img" />
                <input type="text" placeholder="Enter your house address" />
              </div>
            </div>
            <div className="tickboxs">
              <label>
                <input type="checkbox" name="subscribe" value="newsletter" />
                Ship to another address
              </label>
              <label>
                <input type="checkbox" name="subscribe" value="newsletter" />
                Save this address
              </label>
            </div>
            <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
              <label
                style={{
                  fontSize: "2rem",
                  fontweight: "400",
                  fontFamily: "PT Serif",
                }}
              >
                <input type="checkbox" name="subscribe" value="newsletter" />
                Pay with card
              </label>
              <label
                style={{
                  fontSize: "2rem",
                  fontweight: "400",
                  fontFamily: "PT Serif",
                }}
              >
                <input type="checkbox" name="subscribe" value="newsletter" />
                Save this address
              </label>
            </div>
          </div>
          <Link
            to="/thank-you"
            className="
          links"
          >
            <button className="click-proceed">Proceed</button>
          </Link>
        </section>
        <section className="on-the">
          <h3>Your Order</h3>
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
      </section>
    </section>
  );
}

export default checkout;
