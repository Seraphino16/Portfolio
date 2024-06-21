import Image from "next/image";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

function Description() {
    return(
        <div className="w-full md:w-full lg:h-9/12 flex flex-col justify-center items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Séraphin Benoit</h1>
            <div className="h-2 w-6/12 bg-black rounded-md my-8"></div>
            <p className="text-center">
                {`Actuellement étudiant à Epitech, je suis passionné par les nouvelles
                technologies et je suis spécialisé dans le web. Polyvalent, je m'adapte
                aussi bien sur des technologies back-end que sur le développement
                front-end. Motivé, curieux et aimant le travail d'équipe , je recherche une
                alternance afin de contribuer à des projets innovants au sein d'une
                équipe dynamique.`}
            </p>
            <a href="/CV_BENOIT_Seraphin.pdf" download="CV_Benoit_Séraphin.pdf"
             className="bg-slate-300 text-black hover:bg-slate-500 hover:text-white font-bold mt-6 lg:mt-16 py-2 px-4 rounded flex items-center">
                <ArrowDownTrayIcon className="w-6 h-6 mr-2" />
                <p>Télécharger mon CV</p>
            </a>
        </div>
    )
}

export default function HeroSection() {
    return(
        <div className="w-full min-h-screen flex justify-center items-center py-4">
            <div className="w-10/12 lg:w-8/12 bg-red-400 p-8 mt-8 flex flex-col lg:flex-row justify-center lg:justify-evenly items-center min-h-[36rem]">
                <div className="relative w-6/12 sm:w-6/12 md:w-4/12 lg:p-4 aspect-square mb-4 md:mb-0 md:mr-4">
                    <Image
                        src='/photo_myself.png'
                        alt='Portrait'
                        layout='fill'
                        className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <Description />                
            </div>
        </div>
    )
}