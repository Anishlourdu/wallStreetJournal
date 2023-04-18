
const Payment = () => {
    return (
        <div>
            <div class="section__header3">
                <h2><span class="section__step">Step 3: </span>How Would You Like To Pay?</h2>

                <div class="header3__radio">
                    <div class="row">
                        <div class="col">
                            <input type="radio" class="radio btn1" />
                            <label>Credit Card</label>
                        </div>
                        <div class="col">
                            <input type="radio" class="radio btn2" />
                            <label>Paypal</label>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-5">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Credit Card Number" />
                            <label for="floatingInput">Credit Card Number</label>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Exp. Date (MM/YY)" />
                            <label for="floatingInput">Exp. Date (MM/YY)</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="CVV" />
                            <label for="floatingInput">CVV</label>
                        </div>
                    </div>
                </div>

                <input type="checkbox" class="checkbox" />
                <label class="checkbox-label">Billing address is the same as shipping address</label>
                <br />
                <input type="checkbox" class="checkbox" />
                <label class="chackbox-label">Save my details and create an online account. <a href="#">Why?</a></label>

            </div>
        </div>
    )
}

export default Payment;