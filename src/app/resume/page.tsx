import { Metadata } from 'next';
import * as ogLayout from '../layout';

export const metadata: Metadata = {
  ...ogLayout.metadata,
  title: "Eli Cardoso's Resume",
  description: "Eli Cardoso's Resume",
}

export default function Page() {
  return <>
    <section className="p-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Eli Cardoso</h1>
          <p className="text-lg">Software Developer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <ul className="list-disc list-inside">
              <li>
                <h3 className="text-xl font-bold">Free Geek Newmarket</h3>
                <p className="text-sm">
                  Computer Specialist (2023 - 2023, 50 hour Volunteer)
                </p>
                <p>
                  Worked on computers to fix them, clean them, and install
                  GNU/Linux on them.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">KAPLAY Open Source Repository</h3>
                <p className="text-sm">Software Maintainer (2024 - Present)</p>
                <p>
                  Developed and maintained the KAPLAY JavaScript library as a
                  maintainer of its open-source community.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="list-disc list-inside">
              <li>
                <h3 className="text-xl font-bold">High School</h3>
                <p className="text-sm">
                  Computer Science / Mathematics Majority (2023 - Present)
                </p>
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>JavaScript, React, Next.JS</li>
              <li>HTML, CSS, Tailwind CSS</li>
              <li>Git, Docker, Node.js</li>
              <li>KAPLAY, C#, Java</li>
              <li>Linux, MacOS, Redot/Godot</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
}