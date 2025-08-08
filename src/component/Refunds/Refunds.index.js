import './Refunds.style.css'

const Refunds = () => {
    return (
        <div className='Refunds block' id="money-back-guarantee">
            <div className='Refunds-content block-content'>
                <div className='Refunds-inner'>
                    <img alt="dollar bills visual" src={require('../../asset/image/money.png')} height={50}  width={50}  />
                    {/* style={{marginTop: '-50px', marginBottom: '30px'}} */}
                    <h2>Money Back Guarantee</h2>{/* Pulse animation on reveal */}
                    <p>If your product does not receive an increase in sales after 30 days from the initial campaign launch, you will receive a full refund of your money back.</p>
                </div>
            </div>
        </div>
    )
}

export default Refunds;
