import { useNavigate } from "react-router-dom"


const OrderConfirm = () => {
  const navigate=useNavigate()
  return (
    <div>
      Order Confermed
      <br />
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default OrderConfirm;
