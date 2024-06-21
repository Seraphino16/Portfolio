export default function Navbar() {
    return(
        <div className="flex items-center justify-around p-8">
            <h4 className="text-5xl w-6/12">Portfolio</h4>
            <div className="flex justify-between w-4/12 text-xl">
                <a href="#">À propos</a>
                <a href="#">Projets</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}