import React from 'react';
import PropTypes from 'prop-types';

//required accept and reject functions

const CookieBanner = ({ isVisible, onClick }) => {

    return isVisible ? (<>
        <div className="cookiemessage-modal" role="region" aria-label="cookie banner">
            <div id="cookietextwrapper">
                <div className="cookiemessage">
                    <h2>Cookies on Open Referral UK</h2>
                    <p>We use some essential cookies to make this service work.</p>

                    <p>We'd also like to use analytics cookies so we can understand how you use the service and make improvements.</p>
                    <div className="cookiemessage-buttons">
                        <button className="button button-primary button-small button-light" onClick={onClick.accept}>Accept analytics cookies</button>
                        <button id="rejectTracking" className="button button-primary button-small" onClick={onClick.reject}>Reject analytics cookies</button>
                    </div>
                    <p><a href="/privacy-policy">View cookies</a></p>
                </div>
            </div>
        </div>

    </>) : null
}

CookieBanner.propTypes = {
    onClick: PropTypes.shape({
        accept: PropTypes.func.isRequired,
        reject: PropTypes.func.isRequired,

    })
}
export default CookieBanner;