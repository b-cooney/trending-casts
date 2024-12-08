const Hero = () => {
  // Sample comic images - in a real app, these would be your actual comic images
  const images = [
    'https://raw.githubusercontent.com/b-cooney/trending-casts/refs/heads/main/src/components/1.png',
    'https://raw.githubusercontent.com/b-cooney/trending-casts/refs/heads/main/src/components/2.png',
    'https://raw.githubusercontent.com/b-cooney/trending-casts/refs/heads/main/src/components/3.png',
    'https://raw.githubusercontent.com/b-cooney/trending-casts/refs/heads/main/src/components/4.png',
    'https://raw.githubusercontent.com/b-cooney/trending-casts/refs/heads/main/src/components/5.png',
    'https://raw.githubusercontent.com/b-cooney/trending-casts/refs/heads/main/src/components/6.png',
  ]

  return (
    <div className="mb-16">
      <div className="relative overflow-hidden h-[400px] mb-8 rounded-lg">
        <div 
          className="flex gap-4 absolute animate-scroll"
          style={{
            width: `${images.length * 400}px`,
          }}
        >
          {/* Duplicate the images once for seamless scrolling */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Comic panel ${index + 1}`}
              className="w-[400px] h-[400px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      <h1 className="text-8xl font-bold text-center">
        TRENDING CASTS
      </h1>
    </div>
  )
}

export default Hero
