import { steps } from '../assets/GuideData'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Loader } from 'lucide-react'

const Guide = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

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

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        How to Download Instagram Data 📱
      </h1>

      {/* Image Slider */}
      <div className="relative glass-effect rounded-xl shadow-2xl p-8 mb-8">
        <div className="flex items-center justify-center min-h-[70vh]">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            className="absolute left-4 z-10 p-3 rounded-full bg-gray-900/70 text-white hover:bg-gray-900/90 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-3xl mx-auto">
            {/* Loading Indicator */}
            {(!imageLoaded || isLoading) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 rounded-lg backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-4">
                  <Loader className="w-8 h-8 text-purple-400 animate-spin" />
                  <span className="text-gray-300">Loading image...</span>
                </div>
              </div>
            )}

            {/* Main Image */}
            <img
              src={steps[currentStep].image}
              alt={`Step ${steps[currentStep].id}`}
              className={`w-full h-auto max-h-[70vh] mx-auto object-contain rounded-lg transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
            />

            {/* Progress Dots */}
            <div className="absolute -bottom-6 left-0 right-0">
              <div className="flex justify-center gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-3 h-3 rounded-full transition-all transform ${
                      currentStep === index
                        ? 'bg-purple-500 scale-110'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextStep}
            className="absolute right-4 z-10 p-3 rounded-full bg-gray-900/70 text-white hover:bg-gray-900/90 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Step Description */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-3 text-gray-100">
            Step {steps[currentStep].id}: {steps[currentStep].title}
          </h2>
          <p className="text-gray-300 text-lg">{steps[currentStep].description}</p>
        </div>
      </div>

      {/* All Steps Overview */}
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          All Steps Overview
        </h3>
        <div className="glass-effect rounded-xl shadow-xl p-8">
          <ol className="space-y-6">
            {steps.map((step) => (
              <li
                key={step.id}
                className={`flex items-start space-x-4 p-6 rounded-lg transition-all cursor-pointer glass-effect hover:bg-gray-800/50 ${
                  currentStep === step.id - 1 ? 'bg-gray-800/50 scale-[1.02]' : ''
                }`}
                onClick={() => setCurrentStep(step.id - 1)}
              >
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-purple-900/50 text-purple-400 font-bold text-lg border border-purple-500/30">
                  {step.id}
                </span>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-100 mb-2">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Guide