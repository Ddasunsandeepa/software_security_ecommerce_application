import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const Paymentsuccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "200px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "20px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
          <CheckCircle
            sx={{
              fontSize: "60px",
              color: "#28a745", // Green color to indicate success
              marginBottom: "10px",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#2d2d2d", // Darker color for the text
          }}
        >
          Payment Successful! 🎉
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            fontSize: "14px",
            color: "#3c763d", // Greenish color for secondary text
          }}
        >
          Thank you for your purchase. You can now proceed to your orders.
        </motion.p>
      </Box>
    </motion.div>
  );
};

export default Paymentsuccess;
