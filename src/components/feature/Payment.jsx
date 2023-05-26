

const Payment = () => {
    return (
        <div className="container mx-auto py-5 ">
            <div><h1 className="text-center font-black text-3xl">Pay can deferent from other modes of payment likes</h1></div>
            <div className=" mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-3  gap-5 justify-center items-center ">
                <div>
                    <div className="card w-full h-60  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Certified Bank Notes</h2>
                            <hr />
                            <p>No risk of fake bank notes as pay car protects you from fake bank notes</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full h-60 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Bank Transfer</h2>
                            <hr />
                            <p>you can cancel a bank transfer. But a pay car transfer is irrevocable (you can not cancel it)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full h-60 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Notes</h2>
                            <hr />
                            <p>You need to go to the bank or carry excess cash around as pay car enables you hassle-free online transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;