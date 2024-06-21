import { promises as fs }  from 'fs';
import Image from 'next/image';

function Project({ project }) {

    const technos = project.technologies.join(', ');

    return(
        <div className='p-2 my-4 md:mx-4 rounded bg-violet-800 w-full md:max-w-2xl' >
            <h3 className='text-2xl mb-4'>{project.title}</h3>
            <div className='max-w-2xl overflow-hidden relative'>
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    objectFit='contain'
                    layout='responsive'
                    width={1000}
                    height={1000}
                    className='rounded'
                />
            </div>
            <p className='my-4'>{project.description}</p>
            {technos && <p>Technologies: {technos}</p>}
            {project.skills && (
                <div className='mt-4'>
                    <h4>Compétences: </h4>
                    <ul className='list-disc ml-4'>
                        {project.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default async function ProjectSection() {

    const file = await fs.readFile(process.cwd() + '/src/data/projects.json', 'utf-8');
    const data = await JSON.parse(file);

    return(
        <section id='projects' className="p-8 bg-sky-500 min-h-screen w-full">
            <h2 className="text-4xl">Projects</h2>
            <div className='block flex flex-col justify-center items-center md:flex-row  md:items-start'>
                {data && data.map((project) => (
                    <Project project={project} key={project.title}/>
                ))}
            </div>
        </section>
    )
}