import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      // Fetch payment status from backend
      fetch(
        `${process.env.REACT_APP_BASE_URL}/api/payment/complete?session_id=${sessionId}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Payment Successful!") {
            setPaymentStatus(data.message);
          } else {
            setPaymentStatus(data.message || "Payment failed.");
          }
          setLoading(false);
        })
        .catch((error) => {
          setError("Payment verification failed.");
          setLoading(false);
        });
    }
  }, [sessionId]);

  if (loading)
    return <p className="text-center text-xl">⏳ Processing payment...</p>;
  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-8 rounded-lg shadow-xl border border-gray-300"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center text-2xl font-semibold text-gray-900 mb-4"
          >
            ⏳ Processing success...
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 border-4 border-t-4 border-gray-900 rounded-full animate-spin"
          />
        </motion.div>
      </div>
    );
};

export default PaymentSuccess;