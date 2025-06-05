# React Web App with Tailwind CSS

This is a simple web application built with **React** and **Tailwind CSS**. It includes a navigation bar, footer with social media links, and a main body that displays:

## Features

- Responsive design for all screen sizes
- Interactive project portfolio
- About section with Bio and Skills
- Resume/CV download
- Contact form integration with EmailJS

## Reference Website

<https://yashkapure.netlify.app/#>
<https://v2.brittanychiang.com/>
<https://www.hostinger.in/tutorials/web-developer-portfolio>
<https://www.kelseyohalloran.com/about>

## Colour

Website background - bg-[#191f14]
Animated card background - bg-[#242e1c]

## Home page animation code - Square Image

{/*Left: Animated Image Section*/ }
<article className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
    <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPositionX: '10%', scale: 0.95 }}
        animate={{ backgroundPositionX: '90%', scale: 1.05 }}
        whileHover={{ scale: 1.1 }}
        transition={{
            backgroundPositionX: { duration: 10, repeat: Infinity, ease: 'linear' },
            scale: { duration: 0.5, ease: 'easeInOut' },
        }}
        style={{
            backgroundImage: "url('/assets/home.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat-x',
        }}
    />

    <div className="relative z-10 w-full sm:w-[90%] md:w-[85%] aspect-[16/9] rounded-xl overflow-hidden border-2 border-red-600">
        <img
            src="/assets/landscape.png"
            alt="Foreground"
            className="w-full h-full object-cover"
        />
    </div>
</article>





## Home page animation code - Circular Image

<div className="relative w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-[80vh] overflow-hidden">
  {/* Background GIF */}
  <div className="absolute inset-0 z-10">
    <img
      src="/assets/home.gif"
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Foreground Image */}
  <div className="relative z-20 flex justify-center items-center h-full">
    <div className="group transition duration-300 ease-in-out transform hover:scale-120">
      <img
        src="/assets/landscape.png"
        alt="My Image"
        className="w-50 h-50 sm:w-65 sm:h-65 md:w-75 md:h-75 lg:w-80 lg:h-80 rounded-full border-4 border-yellow-400 shadow-lg group-hover:ring-4 group-hover:ring-cyan-600 transition-all duration-300"
      />
    </div>
  </div>

  {/* Optional overlay for better contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-30 z-5" />
</div>;
