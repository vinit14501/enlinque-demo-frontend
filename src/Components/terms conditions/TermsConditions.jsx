import React from "react"
import { motion } from "framer-motion"
import { FaCalendar } from "react-icons/fa"
import { termsData } from "./TermsConditionData"

export default function TermsConditions() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12"
      >
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#000048]">
            {termsData.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#0b60a0]">
            <div className="flex items-center gap-2">
              <FaCalendar className="text-[#0b60a0]" />
              <span>Effective Date: {termsData.metadata.effectiveDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-[#0b60a0]" />
              <span>Last Updated: {termsData.metadata.lastUpdated}</span>
            </div>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="prose max-w-none mb-12"
        >
          <p className="text-[#0b60a0] whitespace-pre-line text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {termsData.introduction}
          </p>
        </motion.div>

        {termsData.sections.map((section) => (
          <motion.section
            key={section.id}
            variants={itemVariants}
            className="space-y-4 mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-[#000048] border-b border-gray-200 pb-2">
              {section.id}. {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((item, index) => (
                <p
                  key={index}
                  className="text-[#0b60a0] text-base sm:text-lg leading-relaxed tracking-normal"
                >
                  {item.includes("contact@enlinque.com") ? (
                    <>
                      {item.split("contact@enlinque.com")[0]}
                      <a
                        href="mailto:contact@enlinque.com"
                        className="text-[#0b60a0] hover:text-[#000048] underline transition-colors duration-300"
                      >
                        contact@enlinque.com
                      </a>
                    </>
                  ) : (
                    item
                  )}
                </p>
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </div>
  )
}
