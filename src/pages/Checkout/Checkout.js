import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function Checkout() {
  const [billingValues, setBillingValues] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setBillingValues({
        ...billingValues,
        fname: "",
        lname: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
      });
    }
  };

  return (
    <>
      <Container>

        <Row>
          <h1>Checkout</h1>
          <Col id="Shipping">
            <form>
              <fieldset>
                <legend>Shipping Address</legend>

                <label htmlFor="shipping-fname">First Name</label>
                <input type='text' id='shipping-fname' name="fname" required /><br />

                <label for="lname">Last Name:</label>
                <input type="text" id="shipping-lname" name="lname" required /><br />

                <label for="address">Address:</label>
                <input type="text" id="shipping-address" name="address" required /><br />

                <label for="city">City:</label>
                <input type="text" id="shipping-city" name="city" required /><br />

                <label for="state">State/Province:</label>
                <select id="shipping-state" name="state" required>
                  <option value="">Select a state/province</option>
                  <option value="AL">Alabama</option>

                </select> <br />

                <label for="zipcode">Zip Code:</label>
                <input type="text" id="shipping-zipcode" name="zipcode" required /><br />

                <label for="country">Country:</label>
                <select id="shipping-country" name="country" required>
                  <option value="US">United States</option>
                </select>
                <br />

                <label for="phone">Phone:</label>
                <input type="tel" id="shipping-phone" name="phone" required /><br />
              </fieldset>
            </form>
          </Col>

          <Col id="Billing">
            <form>
              <fieldset>
                <legend>Billing Address</legend>
                <label htmlFor="fname">First Name</label>
                <input
                  type='text'
                  id='fname'
                  name="fname"
                  required
                  value={billingValues.fname}
                  onChange={(e) => setBillingValues({ ...billingValues, fname: e.target.value })}
                /><br />

                <label htmlFor="lname">Last Name:</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  required
                  value={billingValues.lname}
                  onChange={(e) => setBillingValues({ ...billingValues, lname: e.target.value })}
                /><br />

                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={billingValues.address}
                  onChange={(e) => setBillingValues({ ...billingValues, address: e.target.value })}
                /><br />

                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={billingValues.city}
                  onChange={(e) => setBillingValues({ ...billingValues, city: e.target.value })}
                /><br />

                <label htmlFor="state">State/Province:</label>
                <select
                  id="state"
                  name="state"
                  required
                  value={billingValues.state}
                  onChange={(e) => setBillingValues({ ...billingValues, state: e.target.value })}
                >
                  <option value="">Select a state/province</option>
                  <option value="AL">Alabama</option>
                </select> <br />

                <label htmlFor="zipcode">Zip Code:</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  required
                  value={billingValues.zipcode}
                  onChange={(e) => setBillingValues({ ...billingValues, zipcode: e.target.value })}
                /><br />

                <label htmlFor="country">Country:</label>
                <select
                  id="country"
                  name="country"
                  required
                  value={billingValues.country}
                  onChange={(e) => setBillingValues({ ...billingValues, country: e.target.value })}
                >
                  <option value="">Select a country</option>
                  <option value="US">United States</option>
                </select>
                <br />

                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={billingValues.phone}
                  onChange={(e) => setBillingValues({ ...billingValues, phone: e.target.value })}
                /><br />

                <input type="checkbox" id="billingChange" name="billingChange" onClick={handleCheckboxChange} />
                <label>Same as Shipping</label>

              </fieldset>
            </form>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Checkout;