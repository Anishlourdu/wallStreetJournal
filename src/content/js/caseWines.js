

const CaseWines = () => {
    return (
        <div>
            <div class="section__header1">
                <h2><span class="section__step">Step 1: </span>Which Case Would You Like?</h2>
                <p>The complete package—worth $257.96—is yours for ONLY $89.99 with shipping included (plus applicable tax).</p>

                <span class="section__input1"> <input type="radio" class="form-check-input" id="radio" name="radio" value="radio" />
                    <label for=""><span><b class="form__content">Top 12 Reds + BONUS GIFTS $89.99</b></span></label>
                    <a href="#" class="form__link">view wines</a>
                </span>
                <br />
                <span class="section__input2">
                    <input type="radio" class="form-check-input " id="radio" name="radio" value="radio" />
                    <label for=""><span><b class="form__content">Top 12 Mix + BONUS GIFTS $89.99</b></span></label>
                    <a href="#" class="form__link">view wines</a>
                </span>
                <br />
                <span class="section__input3">
                    <input type="radio" class="form-check-input" id="radio" name="radio" value="radio" />
                    <label for=""><span><b class="form__content">Top 12 Whites + BONUS GIFTS $89.99</b></span></label>
                    <a href="#" class="form__link">view wines</a>
                </span>
            </div>
        </div>
    )
}

export default CaseWines;