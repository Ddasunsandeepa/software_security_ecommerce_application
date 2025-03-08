import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import Paymentsuccess from "../../Components/paymentsuccess";

const PaymentSuccess = () => {
  const [paymentStatus, setPaymentStatus] = useState("loading");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching payment status
    setTimeout(() => {
      // Mock success response (you can customize this with your logic)
      const isPaymentSuccessful = true; // Change this based on your logic
      if (isPaymentSuccessful) {
        setPaymentStatus("success");
      } else {
        setPaymentStatus("failed");
        setError("Payment failed. Please try again.");
      }
    }, 2000); // Simulating API response delay
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        {paymentStatus === "loading" ? (
          <div className="flex flex-col items-center">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <p className="mt-4 text-gray-700 text-lg">Processing payment...</p>
          </div>
        ) : paymentStatus === "success" ? (
          <div className="flex flex-col items-center text-green-500">
            <br />
            <br />
            <Paymentsuccess />
          </div>
        ) : (
          <div className="flex flex-col items-center text-red-500">
            <XCircle className="w-14 h-14" />
            <p className="mt-4 text-lg font-semibold">{error}</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
