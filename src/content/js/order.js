

const Order = () => {
    return (
        <div>
            <div class="section__header4">
                <h2><span class="section__step">Step 4: </span>Complete Your Order</h2>

                <label class="header4--label1"><input type="checkbox" class="form-check-input" name="checkbox" value="checkbox" /> My first wine club case will be delivered for today’s special introductory price. I’ll receive a new 12-bottle selection every 3 months, and will soon be eligible for 2 extra-special seasonal cases, each only $169.99, plus $19.99 shipping &amp; tax. I will get a reminder before the above payment method is automatically charged – and will always have at least 10 days’ notice to skip, change or delay selections (online or by phone). I can also cancel my membership anytime at 1-877-975-9463 or by clicking <a href="#">here</a>.</label>

                <label class="header4--label2"><input type="checkbox" class="form-check-input" name="checkbox" value="checkbox" /> I have read and agree to the <a href="#"> Terms & Conditions </a>and<a href="#"> Privacy Policy </a> </label>
                <br />
                <button class="btn-placeorder" type="submit">PLACE ORDER</button>
                <br />
                <span class="header4--cancel">You can cancel any time</span>
            </div>
        </div>
    )
}

export default Order;