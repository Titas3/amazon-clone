import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../state/StateProvider.js';
import { getBasketTotal } from '../../content/reducer';

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal {basket.length} items: <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
