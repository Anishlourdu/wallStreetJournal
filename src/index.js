import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/js/header'
import './header/sass/header.scss';
import Content from './content/js/contentContainer'
import './content/scss/contentContainer.scss'

import './content/scss/caseWines.scss';
import './content/scss/shipping.scss';
import './content/scss/payment.scss';
import './content/scss/order.scss';
import './content/scss/sideBar.scss';
import Footer from './footer/js/footer'
import './footer/scss/footer.scss';


class Index extends React.Component {
    render() {
        return (
            <div>
               
                <Header />
              
                <Content />
           
                <Footer />
              
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));