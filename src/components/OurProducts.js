import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import { Hot, OnSale, TrendingNow, NewArrival } from "./data/DataProducts";

// const styles = [(title = `capitalize text-3xl`)];
export class OurProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Hot,
    };

    this.OnSale = this.OnSale.bind(this);
    this.TrendingNow = this.TrendingNow.bind(this);
    this.Hot = this.Hot.bind(this);
    this.NewArrival = this.NewArrival.bind(this);
  }

  OnSale() {
    this.setState({
      data: OnSale,
    });
  }

  Hot() {
    this.setState({
      data: Hot,
    });
  }

  TrendingNow() {
    this.setState({
      data: TrendingNow,
    });
  }

  NewArrival() {
    this.setState({
      data: NewArrival,
    });
  }

  render() {
    return (
      <section className="py-10 lg:px-16">
        <div className="container mx-auto text-center sm:space-y-8 space-y-5">
          <h1 className="font-bold text-3xl">Our Products</h1>
          <ul className="uppercase flex justify-center space-x-7">
            <li
              className={
                this.state.data === Hot ? `border-b-2 border-second` : ""
              }
            >
              <button onClick={this.Hot} className="font-semibold">
                Hot
              </button>
            </li>
            <li
              className={
                this.state.data === OnSale ? `border-b-2 border-second` : ""
              }
            >
              <button onClick={this.OnSale} className="font-semibold">
                on sale
              </button>
            </li>
            <li
              className={
                this.state.data === TrendingNow
                  ? `border-b-2 border-second`
                  : ""
              }
            >
              <button onClick={this.TrendingNow} className="font-semibold">
                trending now
              </button>
            </li>
            <li
              className={
                this.state.data === NewArrival ? `border-b-2 border-second` : ""
              }
            >
              <button onClick={this.NewArrival} className="font-semibold">
                new arrival
              </button>
            </li>
          </ul>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-7 gap-5 px-6 md:px-0">
            {this.state.data.map((d, index) => {
              return (
                <div
                  key={index}
                  className="md:h-64 max-h-max sm:space-y-3 space-y-2 sm:mt-10 sm:mb-16 my-3"
                >
                  <img
                    className="sm:h-full sm:w-full h-3/4 object-cover"
                    src={d.img}
                    alt={d.title}
                  />
                  <div className="flex justify-center space-x-1">
                    <AiFillStar color="yellow" />
                    <AiFillStar color="yellow" />
                    <AiFillStar color="yellow" />
                    <AiFillStar color="yellow" />
                    <AiFillStar color="yellow" />
                  </div>
                  <p className="capitalize font-semibold">{d.title}</p>
                  <p className=" space-x-5">
                    <span className="opacity-60 line-through">
                      {d.firstPrice}
                    </span>
                    <span className="font-semibold">{d.afterPrice}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default OurProducts;
