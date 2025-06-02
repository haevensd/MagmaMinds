import './Refunds.style.css'

const Refunds = () => {
    return (
        <div className='Refunds block' id="money-back-guarantee">
            <div className='Refunds-content block-content'>
                <div className='Refunds-inner'>
                    <img alt="dollar bills visual" src={require('../../asset/image/money.png')} height={50}  width={50}  />
                    {/* style={{marginTop: '-50px', marginBottom: '30px'}} */}
                    <h2>Money-Back Guarantee</h2>{/* Pulse animation on reveal */}
                    <p>If your product does not receieve any sales within 30 days from 24 hours after the first video posting, you will receieve full refund of your money back (refunded to original payment method).</p>
                </div>
            </div>
        </div>
    )
}

export default Refunds;