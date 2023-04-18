import { useForm } from "react-hook-form";
import CaseWines from "./caseWines"
import Shipping from "./shipping";
import Payment from './payment';
import Order from './order';
import Sidebar from './sideBar';

function Content() {

    return (
        <div class="container">
            <div class="row">

                <div class="col-md-7 col-sm-7 col-xs-12">

                    {/* Content-Container */}
                    <div class="content">
                        <h1 class="content__header">These are the dozen wines you need to taste...</h1>

                        <p class="content__paragraph">
                            Many of our Top 12 wines have won major awards. Others have been recorded as a favorite by thousands of wine fans online. Uncork them all for ONLY $89.99, and try the WSJwine Discovery Club with this fantastic welcome offer. That’s $105 savings and shipping is included.
                        </p>
                        <p class="content__paragraph">
                            <b>It gets better...</b>
                            you’ll also enjoy two bonus bottles of a top-vintage, double-gold-medal Bordeaux and a pair of lovely Dartington Crystal stemless glasses (total value $62.97).
                        </p>
                        <p class="content__paragraph">
                            <b>The rewards continue...</b>
                            Discovery Club members earn credits for bonus bottles, upgrades to a 1.5-liter magnum and a luxury bottle (worth $40+) plus exclusive offers throughout the year.
                        </p>
                    </div>

                    {/* Section-Header */}
                    <div class="section">
                        {/* Step--1 */}

                        <CaseWines />

                        {/* Step--2 */}

                        <Shipping />


                        {/* Step--3 */}

                        <Payment />

                        {/* step--4 */}

                        <Order />

                    </div>

                </div>

                {/* sidebar__header */}
                <div class="col-md-5 col-sm-5 hidden-xs">

                    <Sidebar />
                    
                </div>

            </div>
        </div >

    );
}

export default Content;