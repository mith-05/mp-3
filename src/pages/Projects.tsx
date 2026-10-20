import Main from "../components/main";
import Calculator from "../components/Calculator.tsx";

export default function Projects() {
    return (
        <Main>
            <div id="projects">
                <h2>Projects</h2>

                <h3>Proximity Ligation Assay Optimization</h3>
                <p>Boston University Pratt Laboratory</p>
                <p>
                    Investigating methods to improve proximity ligation assays
                    through optimization of antibody-DNA conjugation and linker
                    chemistry. I use digital droplet PCR (ddPCR) to quantify
                    ligation products and evaluate assay performance.
                </p>

                <h3>Pancreatic Cancer ddPCR Assay</h3>
                <p>
                    Worked on the development and optimization of a multiplex
                    ddPCR assay for detecting cancer-associated KRAS and GNAS
                    mutations. My work included preparing samples, performing
                    ddPCR experiments, and analyzing droplet fluorescence data.
                </p>

                <h3>Ligation Reaction Optimization</h3>
                <p>
                    Studied how experimental variables including ligase
                    concentration, reaction time, temperature, and
                    probe-to-template ratio affect DNA ligation efficiency.
                    ddPCR was used to quantify the results of each experimental
                    condition.
                </p>
                <h3>JavaScript Calculator</h3>
                <p>
                    An interactive calculator developed using HTML, CSS, and
                    JavaScript. The calculator performs addition, subtraction,
                    multiplication, division, and exponentiation.
                </p>
                <Calculator />
            </div>
        </Main>
    );
}
