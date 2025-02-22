import demo from "../../../../assets/digitalmarketinghero.webp"

const SocialMediaDesktop = () => {
  const panels = [
    {
      title: "Social media platforms",
      image: demo,
      alt: "Corporate Branding",
    },
    {
      title: "SEO",
      image: demo,
      alt: "Hotel Branding",
    },
    {
      title: "Content writing",
      image: demo,
      alt: "eCommerce Branding",
    },
    {
      title: "Analytics",
      image: demo,
      alt: "Healthcare Branding",
    },
    {
      title: "Branding",
      image: demo,
      alt: "Construction Company Branding",
    },
  ]

  return (
    <div className="relative w-full hidden md:block">
      <div
        className="relative w-full"
        style={{
          clipPath: "url(#wave-clip)",
        }}
      >
        <div className="flex flex-row">
          {panels.map((panel, index) => (
            <div
              key={index}
              className="w-1/5 relative"
            >
              <div className="h-[500px] lg:h-[600px] xl:h-[700px] relative">
                <img
                  src={panel.image}
                  alt={panel.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-32">
                    {panel.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <svg className="absolute -bottom-1 w-0 h-0">
        <defs>
          <clipPath
            id="wave-clip"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0,0.1 L0,0.1 Q0.5,0.2 1,0.1 L1,0.9 Q0.5,0.8 0,0.9 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default SocialMediaDesktop
