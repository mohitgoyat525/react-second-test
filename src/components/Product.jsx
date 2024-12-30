import React from 'react'

const Product = () => {
  return (
      <div className="min-vh-100 py-5 common-bg d-flex justify-content-center align-items-center">
          <div className="custom-container">
              <div className="d-flex flex-column flex-xl-row gap-3">
                  <div className="product-parent">
                      <h1 className="text-white custom-heading">Product</h1>
                      <p className="m-0 text-white custom-text fw-normal">
                          Due to the confusing nature of tax, the lack of awareness of the
                          tax deduction system and the complicated tax refund process, we
                          have experienced exceptional demand from the public for our
                          service. From release in 2015, our original tax product has
                          achieved 60x growth, bringing in over £5m revenue in 2022.
                      </p>
                      <p className="m-0 mt-2 text-white custom-text fw-normal">
                          With over 8 years of industry experience, we have listened to
                          our clients to evolve our app into a whole-of-market product
                          that will also meet the needs of the tax return market as well
                          as the tax refund market. The App is packed with all the
                          features users need to meet the requirements of the upcoming
                          switch to Making Tax Digital.
                      </p>
                      <p className="m-0 mt-2 text-white custom-text fw-normal">
                          Once we establish the ourself in the UK, we plan to expand into
                          other territories to take advantage of the £500 billion global
                          market
                      </p>
                      <p className="m-0 mt-2 text-white custom-text fw-normal">
                          We have highlighted some of our key features that will be the
                          cornerstone of our product launch in April 23.
                      </p>
                  </div>
                  <div className="d-flex grid-container justify-content-center align-items-center w-100 h-100">
                      <div className="d-grid grid-box h-100">
                          <div className="grid-item-1 d-flex">
                              <img className="small-img" src='/assets/images/png/connect-to-self-img.png' alt="products-img" />
                              <img className="large-img" src='/assets/images/png/connect-to-bank-img.png' alt="products-img" />
                          </div>
                          <div className="grid-item-2 d-flex">
                              <img className="small-img" src='/assets/images/png/key-texs-img.png' alt="products-img" />
                              <img className="large-img" src='/assets/images/png/get-insights-img.png' alt="products-img" />
                          </div>
                          <div className="grid-item-3 d-flex">
                              <img className="large-img" src='/assets/images/png/add-multiple-img.png' alt="products-img" />
                              <img className="small-img" src='/assets/images/png/track-your-return-img.png' alt="products-img" />
                          </div>
                          <div className="grid-item-4 d-flex">
                              <img className="large-img" src='/assets/images/png/multiple-bank-img.png' alt="products-img" />
                              <img className="small-img" src='/assets/images/png/filling-hmrc-img.png' alt="products-img" />
                          </div>
                          <div className="grid-item-5 d-flex">
                              <img className="small-img" src='/assets/images/png/book-keeping-img.png' alt="products-img" />
                              <img className="large-img" src='/assets/images/png/invoicing-img.png' alt="products-img" />
                          </div>
                          <div className="grid-item-6 d-flex">
                              <img className="small-img" src='/assets/images/png/real-time-tax-img.png' alt="products-img" />
                              <img className="large-img" src='/assets/images/png/dedicated-tax-img.png' alt="products-img" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Product