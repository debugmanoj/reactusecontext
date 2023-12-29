import React, { useContext } from 'react';
import { Cardcontext } from '../utils/CardContext';



function Card() {
    let {price}=useContext(Cardcontext)
  return <>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img src="https://m.media-amazon.com/images/I/71UDOYHrAhL._SY342_.jpg" className="img-thumbnail" alt="..." />
            <div className="d-flex">
              <div className="mx-5 fw-bold">
                WOLF SO GRIM AND MANGY <br/>
                <span className="fw-light">Details & Co</span>
                <span className="w-auto fw-light">
                  <br/>
                  <br/>
                  <p className="w-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsa dolores voluptas explicabo mollitia facilis cum aut earum cupiditate id maiores esse nostrum, voluptatum in sint doloribus fugiat, aliquam voluptatem.
                    <br/>
                    <br/>
                    <span><h6>Sustainability</h6></span>
                  </p>
                </span>
              </div>
              <div className="me-auto">
                <input value="1" className="w-25" type="number"/>&nbsp; &nbsp;
                <span className="fw-bold">{data.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">

        <div class="row">
            <div class="mt-5 col-12">
                <div class="d-flex justify-content-around">
                    <div>Subtotal:</div>
                    <div class="fw-bold">{data.price}</div>
                </div>
                

            </div>
            <div class="mt-3 col-12">
                <div class="d-flex justify-content-around">
                    <div >Shipping:</div>
                    <div class="fw-bold">FREE</div>
                </div>
                

            </div>
            <hr class="mt-4"/>
            <div class="mt-5 col-12">
                <div class="d-flex justify-content-around">
                    <div class="fw-bold">Total</div>
                    <div><h6 class="fw-bold">{data.price}</h6></div>
                </div>
                

            </div>
        </div>
    </div>
  </>
}



export default Card;
