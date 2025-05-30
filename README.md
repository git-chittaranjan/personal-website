# React Web App with Tailwind CSS

This is a simple web application built with **React** and **Tailwind CSS**. It includes a navigation bar, footer with social media links, and a main body that displays:


## Features
- Responsive design for all screen sizes
- Interactive project portfolio
- About section with Bio and Skills
- Resume/CV download
- Contact form integration with EmailJS


## Reference Website
https://yashkapure.netlify.app/#
https://v2.brittanychiang.com/
https://www.hostinger.in/tutorials/web-developer-portfolio
https://www.kelseyohalloran.com/about



## Colour
Website background - bg-[#191f14]
Animated card background - bg-[#242e1c]



## Home page animation code - Background motion
{/* Left: Animated Image Section */ }
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

