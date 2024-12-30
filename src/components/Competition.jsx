import React from 'react'
import { COMPETITION_LIST } from '../utils/helper'

const Competition = () => {
  return (
      <div className='bg-offBlack'>
          <div className='container'>
              <div className='row'>
                  <div className='col-12 col-lg-6'>
                      <h2 className='text-white second-heading'>Competition</h2>   
                      <p className='custom-text custom-max-w'>Given our best in class offering, we need to cut through by opting for penetration pricing.</p>
                      <p className='custom-text custom-max-w'>This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.</p>
                      <p className='custom-text custom-max-w'>The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.</p>
                      <p className='custom-text custom-max-w'>As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.</p>
                  </div>
                  <div className='col-12 col-lg-6 table-bg'>
                      <div className='bg-white'>
                      {COMPETITION_LIST.map((obj, i) => (
                         
                              <div key={i} className=''>
                                  <div className='flex'>
                                  <div className='d-flex align-items-center border-b table-parent'>
                                          <h4>{obj.brand}</h4>
                                              <p>{obj.rift}</p>
                                              <p>{obj.taxscout}</p>
                                              <p>{obj.coconut}</p>
                                              <p>{obj.pie}</p>
                                          </div>
                                  </div>
                            </div>
                          
                      ))}
                          </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Competition