import { useEffect, useState, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import {
  IoPersonOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCheckmarkCircleOutline,
  IoRefreshOutline,
  IoRocketOutline,
} from "react-icons/io5"
import { GrSend } from "react-icons/gr"
import axios from "axios"

// Memoized SuccessMessage component to prevent unnecessary re-renders
const SuccessMessage = memo(({ onReset }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white shadow-2xl rounded-lg p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] w-full max-w-xl mx-auto space-y-4 sm:space-y-6"
  >
    <IoCheckmarkCircleOutline className="text-4xl sm:text-5xl md:text-6xl text-green-600" />
    <h2 className="text-xl sm:text-2xl font-bold text-[#000048] text-center">
      Thank you for subscribing!
    </h2>
    <p className="text-base sm:text-lg text-[#000048]/80 text-center max-w-md px-2">
      Your subscription request has been successfully received. We will get back
      to you shortly.
    </p>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onReset}
      className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-auto"
    >
      <IoRefreshOutline className="text-lg sm:text-xl" />
      <span>Subscribe to Another Plan</span>
    </motion.button>
  </motion.div>
))

SuccessMessage.displayName = "SuccessMessage"

// Memoized Form Input component
const FormInput = memo(({ field, value, onChange, isSubmitting }) => (
  <div className="relative flex flex-col group">
    <div className="flex items-center w-full">
      <field.icon className="absolute left-0 top-1/2 -translate-y-1/2 text-[#000048] text-lg sm:text-xl group-focus-within:text-[#0b60a0] transition-colors duration-300" />
      <input
        type={field.type}
        name={field.name}
        value={value}
        onChange={onChange}
        placeholder={field.placeholder}
        disabled={isSubmitting}
        required
        className="w-full h-11 pl-7 sm:pl-8 text-sm sm:text-base text-[#000048] placeholder-[#000048]/60 border-b-2 border-gray-200 focus:border-[#0b60a0] focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
      />
    </div>
  </div>
))

FormInput.displayName = "FormInput"

const PlanModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/forms/plan`,
        {
          ...formData,
          selectedPlan: {
            ...selectedPlan,
            isStartingPrice: selectedPlan.name === "Advanced",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.data.success) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", phone: "" })
      }
    } catch (error) {
      console.error("Submission error:", error)
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to submit plan subscription"
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    })
    setIsSuccess(false)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setIsSuccess(false)
    }, 200)
  }

  if (!selectedPlan) return null

  const formFields = [
    {
      icon: IoPersonOutline,
      name: "name",
      type: "text",
      placeholder: "Name *",
    },
    {
      icon: IoMailOutline,
      name: "email",
      type: "email",
      placeholder: "Email *",
    },
    {
      icon: IoPhonePortraitOutline,
      name: "phone",
      type: "tel",
      placeholder: "Phone Number *",
    },
  ]

  const isAdvancedPlan = selectedPlan.name === "Advanced"

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/40 backdrop-blur-[2px] overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-6xl bg-gradient-to-br from-[#000048] to-[#0b60a0] rounded-lg shadow-xl overflow-hidden my-2 sm:my-4"
          >
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="fixed sm:absolute right-4 top-4 text-white z-20 transition-all disabled:opacity-50 bg-black/30 hover:bg-black/40 p-2.5 rounded-full"
              aria-label="Close modal"
            >
              <IoClose className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 max-h-[90vh] lg:max-h-[85vh] overflow-y-auto">
              {/* Left Column - Form */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-7/12 flex-shrink-0"
              >
                {isSuccess ? (
                  <SuccessMessage onReset={resetForm} />
                ) : (
                  <div className="bg-white shadow-2xl rounded-lg p-4 sm:p-6 lg:p-8">
                    <div className="mb-6 sm:mb-8">
                      <h2 className="text-base sm:text-lg font-light text-[#000048] mb-1.5">
                        Subscribe to Our Services
                      </h2>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#000048] tracking-tight">
                        Complete your subscription
                      </h3>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5 sm:space-y-6"
                    >
                      {formFields.map((field) => (
                        <FormInput
                          key={field.name}
                          field={field}
                          value={formData[field.name]}
                          onChange={handleChange}
                          isSubmitting={isSubmitting}
                        />
                      ))}

                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto min-w-[200px] bg-blue-600 text-white px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>
                          {isSubmitting ? "Processing..." : "Subscribe Now"}
                        </span>
                        <GrSend
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            isSubmitting ? "animate-pulse" : ""
                          }`}
                        />
                      </motion.button>
                    </form>
                  </div>
                )}
              </motion.div>

              {/* Right Column - Plan Info */}
              <div className="w-full lg:w-5/12 space-y-4 sm:space-y-6 py-2 sm:py-4 px-2 sm:px-4 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <IoRocketOutline className="text-3xl sm:text-4xl text-white" />
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-light text-white tracking-wide">
                      Ready to Launch?
                    </h1>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-4xl font-black text-white leading-tight">
                        {selectedPlan.name} Plan
                      </h2>
                      <p className="text-white/80 mt-2 text-sm sm:text-base lg:text-lg">
                        {selectedPlan.description ||
                          "Description not available"}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6">
                      {isAdvancedPlan && (
                        <span className="block text-white/80 text-sm mb-1">
                          Starting at
                        </span>
                      )}
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                          ${selectedPlan.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default memo(PlanModal)
