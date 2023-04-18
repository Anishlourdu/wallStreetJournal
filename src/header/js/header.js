function Header() {
    return (
        <div>
            <div class="container">
                <div class="row">
                   
                        <div class="clearfix">

                            <div id="header-logo" class="col-xs-5">
                                <a href="#">
                                    <img src="https://www.wsjwine.com/images/us/wsj/offers/temp6/common/wsj-logo-rb.png" class="img-responsive pull-left" alt="wall street journal" />
                                </a>
                            </div>
                            <div id="header-slogan" class="col-xs-7">
                                <a href="#">
                                    <img src="https://www.wsjwine.com/images/us/wsj/offers/temp6/endorsements/master_button.png" class="img-responsive pull-right" alt="special offer" />
                                </a>
                            </div>

                        </div>

                        <div class="col-xs-12">

                            <img class="img-fluid" src="https://www.wsjwine.com/images/us/wsj/offers/temp6/fy23/header/top12_food_updates_89_105_fs_desktop.jpg" alt="Top 12 wines" width="100%" />

                        </div>



                        <div class="hidden-xs">
                            <img src="https://www.wsjwine.com/images/us/wsj/offers/temp6/fy22/q3/fy22_q3_Featured_desktop.png" class="img-responsive img-fluid" alt="as featured" width="100%" />
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Header;