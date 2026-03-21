import React from "react";
import Section from "./Section";

const topSections = [
  {
    title: "Account Opening",
    icon: "fa fa-plus-circle",
    items: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa fa-user",
    items: [
      "Login Credentials",
      "Account Modification and Segment Addition",
      "DP ID and bank details",
      "Your Profile",
      "Transfer and conversion of shares",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa fa-bar-chart",
    items: [
      "Margin/leverage, Product and Order types",
      "Kite Web and Mobile",
      "Trading FAQs",
      "Corporate Actions",
      "Sentinel",
      "Kite API",
      "Pi and other platforms",
      "Stockreports+",
      "GTT",
    ],
  },
];

const bottomSections = [
  {
    title: "Funds",
    icon: "fa fa-credit-card",
    items: [
      "Adding Funds",
      "Fund Withdrawal",
      "eMandates",
      "Adding Bank Accounts",
    ],
  },
  {
    title: "Console",
    icon: "fa fa-desktop",
    items: [
      "Reports",
      "Ledger",
      "Portfolio",
      "60 Day Challenge",
      "IPO",
      "Referral Program",
    ],
  },
  {
    title: "Coin",
    icon: "fa fa-circle",
    items: [
      "Understanding Mutual Funds",
      "About Coin",
      "Buying and Selling",
      "Starting an SIP",
      "Managing your Portfolio",
      "Coin App",
      "Moving to Coin",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-5 mt-5">
        <h1 className="fs-2 mb-5">
          To create a ticket, select a relevant topic
        </h1>

        {topSections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>

      {/* Bottom Sections */}
      <div className="row p-5">
        {bottomSections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
