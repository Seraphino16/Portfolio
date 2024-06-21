export default function Navbar() {
    return(
        <div className="flex items-center justify-around p-8 absolute top-0 w-full">
            <h4 className="text-2xl md:text-5xl w-6/ text-center">Portfolio</h4>
            <div className="hidden md:flex justify-between w-4/12 text-xl">
                <a href="#">À propos</a>
                <a href="#projects">Projets</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}