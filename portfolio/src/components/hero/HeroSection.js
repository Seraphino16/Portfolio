import Image from "next/image"

function Description() {
    return(
        <div className="w-full md:w-full lg:h-9/12 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Séraphin Benoit</h1>
            <div className="h-2 w-6/12 bg-black rounded-md my-8"></div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat tortor augue, ac ullamcorper dolor fringilla porta. Ut fringilla tristique porttitor. Nunc et elementum nulla. Curabitur sed dignissim velit. Aliquam condimentum ac purus ac pharetra. Morbi dignissim, erat sed consequat varius, justo erat tempus lacus, non luctus erat massa eget lacus. Etiam aliquet mi ut dapibus pellentesque. Nulla eget dictum risus.
            </p>
        </div>
    )
}

export default function HeroSection() {
    return(
        <div className="w-full h-screen flex justify-center items-center md:-mt-28">
            <div className="w-10/12 lg:w-8/12 lg:h-4/6 bg-red-400 p-12 block lg:flex justify-evenly items-center">
            <div className="relative w-6/12 sm:w-6/12 md:w-4/12 lg:p-4 aspect-square mb-4 md:mb-0 md:mr-4">
                <Image
                    src='/photo_myself.png'
                    layout='fill'
                    className="object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
                <Description />                
            </div>
        </div>
    )
}