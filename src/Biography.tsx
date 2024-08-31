import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Biography: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Duration of animation in ms
            once: true, // Ensure the animation happens only once when the user scrolls to the section
        });
    }, []);

    return (
        <section className="p-8">
            <div className="max-w-7xl md:pt-56 mx-auto flex flex-col md:flex-row items-center justify-center">

                {/* Left Side */}
                <div
                    className="flex flex-col items-center md:items-center md:w-1/3 mb-6 md:mb-0"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <img
                        src="your-image-url-here"
                        className="rounded-full w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-black shadow-lg"
                    />
                    <h1 className="text-4xl font-jetbrains font-semibold mt-4">
                        Syed Mustafa Umar
                    </h1>
                    <h2 className="text-2xl font-jetbrains mt-2 text-gray-600">
                        Software Engineer
                    </h2>
                </div>

                {/* Right Side */}
                <div
                    className="md:w-2/3 md:pl-6 max-w-md lg:max-w-lg xl:max-w-xl"
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    <h2 className="text-2xl font-jetbrains mb-4 text-gray-600">
                        Biography
                    </h2>
                    <p className="text-ellipsis font-jetbrains leading-relaxed text-white">
                        Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing. Testing.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Biography;
