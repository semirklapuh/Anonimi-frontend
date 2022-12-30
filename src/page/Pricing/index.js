import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

export const Pricing = () => {
  return (
    <div id="pricing">
      <div>
        <h2 className="pricing-section-title">Choose your Anonimi plan</h2>
      </div>
      <div className="pricing-row">
        <div className="pricing-card">
          <div className="card-header">
            <p className="card-title">Basic</p>
            <p className="card-subtitle">Get familiar with Anonimi</p>
          </div>
          <div className="card-body">
            <Button>Try for free</Button>
            <p className="body-title">Included features</p>
            <p className="body-p">Deep natural</p>
            <p className="body-p">Face anonymization</p>
            <p className="body-p">Licence plates anonymization</p>
            <p className="body-p">Pictures</p>
            <p className="body-p">Video</p>
            <p className="body-p">20 MB max file size</p>
            <p className="body-p">100 MB monthly limit</p>
          </div>
        </div>

        <div className="pricing-card">
          <div className="card-header">
            <p className="card-title">Standard</p>
            <p className="card-subtitle">Perfect for day-to-day users</p>
          </div>
          <div className="card-body-paid">
            <div className="price-row">
              <p>$</p>
              <p className="price">69</p>
              <p>/mo</p>
            </div>

            <Button>Let started</Button>
            <p className="body-title">Included features</p>
            <p className="body-p">Deep natural</p>
            <p className="body-p">Face anonymization</p>
            <p className="body-p">Licence plates anonymization</p>
            <p className="body-p">Pictures</p>
            <p className="body-p">Video</p>
            <p className="body-p">4K</p>
            <p className="body-p">8K</p>
            <p className="body-p">Zip folder</p>
            <p className="body-p">REST API</p>
            <p className="body-p">
              <b>Over 8K</b>
            </p>
            <p className="body-p">
              <b>Unlimited max file size</b>
            </p>
            <p className="body-p">
              <b>Unlimited monthly consumption</b>
            </p>
            <p className="body-p">
              <b>On demand support</b>
            </p>
            <p className="body-p">
              <b>6-months contract</b>
            </p>
          </div>
        </div>
        <div className="pricing-card">
          <div className="card-header">
            <p className="card-title">Premium</p>
            <p className="card-subtitle">Perfect for day-to-day users</p>
          </div>
          <div className="card-body-paid">
            <div className="price-row">
              <p>$</p>
              <p className="price">99</p>
              <p>/mo</p>
            </div>

            <Button>Let started</Button>
            <p className="body-title">Included features</p>
            <p className="body-p">Deep natural</p>
            <p className="body-p">Face anonymization</p>
            <p className="body-p">Licence plates anonymization</p>
            <p className="body-p">Pictures</p>
            <p className="body-p">Video</p>
            <p className="body-p">4K</p>
            <p className="body-p">8K</p>
            <p className="body-p">Zip folder</p>
            <p className="body-p">REST API</p>
            <p className="body-p">
              <b>Over 8K</b>
            </p>
            <p className="body-p">
              <b>Unlimited max file size</b>
            </p>
            <p className="body-p">
              <b>Unlimited monthly consumption</b>
            </p>
            <p className="body-p">
              <b>On demand support</b>
            </p>
            <p className="body-p">
              <b>6-months contract</b>
            </p>
          </div>
        </div>
        <div className="pricing-card">
          <div className="card-header">
            <p className="card-title">Enterprise</p>
            <p className="card-subtitle">Perfect for large companies</p>
          </div>
          <div className="card-body">
            <Button>Let started</Button>
            <p className="body-title">Included features</p>
            <p className="body-p">Deep natural</p>
            <p className="body-p">Face anonymization</p>
            <p className="body-p">Licence plates anonymization</p>
            <p className="body-p">Pictures</p>
            <p className="body-p">Video</p>
            <p className="body-p">4K</p>
            <p className="body-p">8K</p>
            <p className="body-p">Zip folder</p>
            <p className="body-p">REST API</p>
            <p className="body-p">
              <b>Over 8K</b>
            </p>
            <p className="body-p">
              <b>Unlimited max file size</b>
            </p>
            <p className="body-p">
              <b>Unlimited monthly consumption</b>
            </p>
            <p className="body-p">
              <b>On demand support</b>
            </p>
            <p className="body-p">
              <b>6-months contract</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
