import React from 'react'
import './index.css'

export default class Pricing extends React.Component {
  constructor() {
    super()
    this.state = {
      pricingItems: [
        {
          title: "BASIC PLAN",
          content: "Item 1",
          button: "现在购买有优惠"
        },
        {
          title: "MEDIUM PLAN",
          content: "Item 1",
          button: "只要3块5"
        },
        {
          title: "HUGE PLAN",
          content: "Item 1",
          button: "oh my god"
        },
        {
          title: "HUGE PLAN",
          content: "Item 1",
          button: "oh my god"
        },
        {
          title: "HUGE PLAN",
          content: "Item 1",
          button: "oh my god"
        }
      ]
    }
  }

  render() {
    return (
      <div className="pricing-section">
        {
          this.state.pricingItems.map((item, index) =>
            <PricingItem
              key={index}
              title={item.title}
              content={item.content}
              button={item.button}
            />
          )
        }
      </div>
    )
  }
}

class PricingItem extends React.Component {
  render() {
    return (
      <div className="pricing-item">
        <div className="pricing-item-title">
          <span className="center">{this.props.title}</span>
        </div>
        <div className="pricing-item-content center">
          <span>{this.props.content}</span>
        </div>
        <div className="pricing-item-button">
          <button className="center">{this.props.button}</button>
        </div>
      </div>
    )
  }
}
