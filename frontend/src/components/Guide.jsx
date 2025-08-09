import { steps, downloadHelp, faqData } from '../assets/GuideData'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Loader, Download, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react'

const Guide = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)

  // Preload images for smoother transitions
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const promises = steps.map((step) => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            img.src = step.image
            img.onload = resolve
            img.onerror = reject
          })
        })
        await Promise.all(promises)
        setIsLoading(false)
      } catch (error) {
        console.error('Error preloading images:', error)
        setIsLoading(false)
      }
    }
    preloadImages()
  }, [])

  const nextStep = () => {
    setImageLoaded(false)
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
  }

  const prevStep = () => {
    setImageLoaded(false)
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Download className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            How to Download Instagram Data
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Follow this step-by-step guide to export your Instagram followers and following data. 
            The process takes a few minutes to set up and up to 48 hours for Instagram to prepare your data.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Image Slider */}
        <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 mb-12">
          <div className="flex items-center justify-center min-h-[70vh]">
            {/* Previous Button */}
            <button
              onClick={prevStep}
              className="absolute left-4 z-10 p-3 rounded-full bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-200 dark:border-slate-600"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-4xl mx-auto">
              {/* Loading Indicator */}
              {(!imageLoaded || isLoading) && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <div className="flex flex-col items-center space-y-4">
                    <Loader className="w-8 h-8 text-blue-600 animate-spin" aria-hidden="true" />
                    <span className="text-slate-600 dark:text-slate-300 font-medium">Loading image...</span>
                  </div>
                </div>
              )}

              {/* Main Image */}
              <img
                src={steps[currentStep].image}
                alt={steps[currentStep].altText || `Step ${steps[currentStep].id}: ${steps[currentStep].title}`}
                className={`w-full h-auto max-h-[70vh] mx-auto object-contain rounded-lg transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                loading={currentStep === 0 ? "eager" : "lazy"}
                width="800" 
                height="600"
              />

              {/* Navigation Dots */}
              <div className="absolute -bottom-6 left-0 right-0">
                <div className="flex justify-center gap-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentStep === index
                          ? 'bg-blue-600 scale-125'
                          : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                      aria-pressed={currentStep === index}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextStep}
              className="absolute right-4 z-10 p-3 rounded-full bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-200 dark:border-slate-600"
              aria-label="Next step"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Step Description */}
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                {steps[currentStep].id}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              {steps[currentStep].title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 mr-2 text-slate-600 dark:text-slate-300" />
            <span className="font-medium text-slate-900 dark:text-white">Previous</span>
          </button>
          
          <div className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <span className="font-medium text-blue-900 dark:text-blue-100">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="font-medium text-slate-900 dark:text-white">Next</span>
            <ChevronRight className="w-5 h-5 ml-2 text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* All Steps Overview */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Complete Step Overview
          </h3>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-start space-x-4 p-6 rounded-xl transition-all cursor-pointer border ${
                    currentStep === index 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 shadow-md' 
                      : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg ${
                    currentStep === index
                      ? 'bg-blue-600 text-white'
                      : index < currentStep
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Help Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                  {downloadHelp.title}
                </h3>
                <ul className="space-y-3">
                  {downloadHelp.steps.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-green-800 dark:text-green-200">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-expanded={expandedFaq === index}
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedFaq === index ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide