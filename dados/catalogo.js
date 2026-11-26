// Gerado por gerar-paginas.js — NÃO editar à mão.
// Edite dados/softwares.json e dados/detalhes.json, depois rode: node gerar-paginas.js
const CATALOGO = [
  {
    "id": 1,
    "name": "Gaussian",
    "area": "quimica-quantica",
    "applicability": [
      "desktop",
      "hpc"
    ],
    "price": "paid",
    "description": "Pacote completo de química quântica para cálculos de estrutura eletrônica, amplamente usado em pesquisa acadêmica e industrial.",
    "tags": [
      "DFT",
      "Hartree-Fock",
      "CCSD",
      "Estrutura Eletrônica"
    ],
    "license": "Comercial (Pago)",
    "website": "https://gaussian.com",
    "arquivo": "softwares/software-1-gaussian.html",
    "recursos": [
      "Hartree-Fock (HF)",
      "DFT",
      "MP2 e métodos de cluster acoplado (CCSD)",
      "CASSCF",
      "Métodos semiempíricos (AM1/PM3/PM6/PDDG)",
      "ONIOM (métodos multinível)",
      "Análise vibracional (IR/Raman/VCD/ROA)"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows",
      "Unix"
    ],
    "links": {
      "site": "https://gaussian.com/",
      "download": null,
      "documentacao": "https://gaussian.com/man/",
      "tutorial": null,
      "suporte": "https://gaussian.com/techsupport/",
      "codigo": null,
      "publicacao": "https://gaussian.com/citation/"
    }
  },
  {
    "id": 2,
    "name": "ORCA",
    "area": "quimica-quantica",
    "applicability": [
      "desktop",
      "hpc"
    ],
    "price": "academic",
    "description": "Programa de química quântica moderno e eficiente, especializado em química computacional de moléculas e materiais.",
    "tags": [
      "DFT",
      "Molecular Properties",
      "Spectroscopy"
    ],
    "license": "Grátis Acadêmico / Pago Comercial",
    "website": "https://www.faccts.de/orca/",
    "arquivo": "softwares/software-2-orca.html",
    "recursos": [
      "Métodos semiempíricos",
      "DFT",
      "Perturbação de muitos corpos (MPn)",
      "Cluster acoplado (CC)",
      "Métodos multirreferenciais",
      "Propriedades espectroscópicas de sistemas de camada aberta"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.faccts.de/orca/",
      "download": "https://www.faccts.de/docs/orca/6.1/manual/",
      "documentacao": "https://www.faccts.de/docs/orca/6.1/manual/",
      "tutorial": "https://www.faccts.de/docs/orca/6.0/tutorials/first_steps/install.html",
      "suporte": "https://orcaforum.kofo.mpg.de/",
      "codigo": null,
      "publicacao": "https://doi.org/10.1002/wcms.81"
    }
  },
  {
    "id": 3,
    "name": "Psi4",
    "area": "quimica-quantica",
    "applicability": [
      "desktop",
      "hpc",
      "cli"
    ],
    "price": "free",
    "description": "Pacote de química quântica open source com foco em métodos de estrutura eletrônica ab initio e DFT.",
    "tags": [
      "Open Source",
      "Ab Initio",
      "Python API"
    ],
    "license": "GNU LGPL",
    "website": "https://psicode.org",
    "arquivo": "softwares/software-3-psi4.html",
    "recursos": [
      "DFT",
      "MP2",
      "SAPT",
      "Acoplado de cluster (CCSD(T))",
      "DLPNO e métodos com correlação explícita (F12)",
      "Density fitting",
      "Execução multi-core com driver Python"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://psicode.org/",
      "download": "https://psicode.org/installs/latest/",
      "documentacao": "https://psicode.org/psi4manual/master/index.html",
      "tutorial": "http://psicode.org/psi4manual/master/index_tutorials.html",
      "suporte": "http://forum.psicode.org",
      "codigo": "https://github.com/psi4/psi4/",
      "publicacao": "https://doi.org/10.1063/5.0006002"
    }
  },
  {
    "id": 4,
    "name": "GAMESS",
    "area": "quimica-quantica",
    "applicability": [
      "desktop",
      "hpc"
    ],
    "price": "academic",
    "description": "General Atomic and Molecular Electronic Structure System, usado para cálculos de estrutura eletrônica ab initio.",
    "tags": [
      "Ab Initio",
      "DFT",
      "Semiempirical"
    ],
    "license": "Grátis Acadêmico",
    "website": "https://www.msg.chem.iastate.edu/gamess",
    "arquivo": "softwares/software-4-gamess.html",
    "recursos": [
      "SCF/Hartree-Fock (RHF/ROHF/UHF)",
      "DFT",
      "MP2",
      "Métodos CI e CCSD",
      "CASSCF",
      "Semiempíricos (AM1/PM3/PM6/PDDG)",
      "Teoria do vínculo de valência (VB)"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.msg.chem.iastate.edu/gamess/",
      "download": "https://www.msg.chem.iastate.edu/gamess/download.html",
      "documentacao": "https://www.msg.chem.iastate.edu/gamess/GAMESS_Manual/intro.pdf",
      "tutorial": "https://www.msg.chem.iastate.edu/tutorials/gamessintro.pdf",
      "suporte": "https://www.msg.chem.iastate.edu/gamess/",
      "codigo": null,
      "publicacao": "https://www.msg.chem.iastate.edu/gamess/references.html"
    }
  },
  {
    "id": 5,
    "name": "Q-Chem",
    "area": "quimica-quantica",
    "applicability": [
      "desktop",
      "hpc"
    ],
    "price": "paid",
    "description": "Pacote de química quântica comercial de alta performance para cálculos de moléculas e materiais.",
    "tags": [
      "DFT",
      "CC",
      "Solvation",
      "Excited States"
    ],
    "license": "Comercial",
    "website": "https://q-chem.com",
    "arquivo": "softwares/software-5-q-chem.html",
    "recursos": [
      "DFT com mais de 200 funcionais",
      "MP2 de escala linear e DFT dupla-híbrida",
      "Estados excitados (CIS/TDDFT, MRSF-TDDFT)",
      "Espectroscopia de raios-X e RMN",
      "Modelos de solvatação e QM/MM",
      "ALMO-EDA e XSAPT",
      "Sólidos periódicos (QC-PBC)"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://q-chem.com/",
      "download": "https://www.q-chem.com/try",
      "documentacao": "https://manual.q-chem.com/",
      "tutorial": "https://www.q-chem.com/learn/start",
      "suporte": "https://talk.q-chem.com/",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 6,
    "name": "VASP",
    "area": "dft-solidos",
    "applicability": [
      "hpc"
    ],
    "price": "paid",
    "description": "Vienna Ab initio Simulation Package para cálculos de DFT de sólidos, superfícies e materiais cristalinos.",
    "tags": [
      "DFT",
      "Sólidos",
      "Superfícies",
      "Materiais"
    ],
    "license": "Comercial",
    "website": "https://www.vasp.at",
    "arquivo": "softwares/software-6-vasp.html",
    "recursos": [
      "DFT com base de ondas planas",
      "Pseudopotenciais PAW e ultrasuaves",
      "Dinâmica molecular ab initio",
      "Funcionais de troca-correlação incluindo meta-GGA e híbridos",
      "Espectroscopia many-body (GW, BSE, XAS)",
      "Fónons e RMN de estado sólido",
      "Machine-learned force fields"
    ],
    "plataformas": [],
    "links": {
      "site": "https://www.vasp.at",
      "download": "https://www.vasp.at/sign_in/registration_form/",
      "documentacao": "https://www.vasp.at/wiki/",
      "tutorial": "https://www.vasp.at/tutorials/latest/",
      "suporte": "https://www.vasp.at/forum/",
      "codigo": null,
      "publicacao": "https://www.vasp.at/learn/papers/"
    }
  },
  {
    "id": 7,
    "name": "Quantum ESPRESSO",
    "area": "dft-solidos",
    "applicability": [
      "hpc",
      "cli"
    ],
    "price": "free",
    "description": "Suíte open source de códigos para simulações de estrutura eletrônica de materiais usando DFT e planos de onda.",
    "tags": [
      "Open Source",
      "DFT",
      "Planos de Onda",
      "Materiais"
    ],
    "license": "GNU GPL",
    "website": "https://www.quantum-espresso.org",
    "arquivo": "softwares/software-7-quantum-espresso.html",
    "recursos": [
      "DFT com ondas planas",
      "Pseudopotenciais (com banco de dados oficial)",
      "Modelagem de materiais na nanoescala",
      "Versões habilitadas para GPU",
      "Ecossistema de módulos e ferramentas integradas"
    ],
    "plataformas": [],
    "links": {
      "site": "https://www.quantum-espresso.org",
      "download": "https://www.quantum-espresso.org/download-page/",
      "documentacao": "https://www.quantum-espresso.org/documentation/",
      "tutorial": "https://www.quantum-espresso.org/learn/",
      "suporte": "https://www.quantum-espresso.org/forum/",
      "codigo": "https://gitlab.com/QEF/q-e",
      "publicacao": "https://www.quantum-espresso.org/cite/"
    }
  },
  {
    "id": 8,
    "name": "CP2K",
    "area": "dft-solidos",
    "applicability": [
      "hpc",
      "desktop"
    ],
    "price": "free",
    "description": "Programa para simulações de estado sólido, líquido e molecular usando DFT e métodos de força.",
    "tags": [
      "DFT",
      "Mixed Quantum-Classical",
      "Materiais"
    ],
    "license": "GNU GPL",
    "website": "https://www.cp2k.org",
    "arquivo": "softwares/software-8-cp2k.html",
    "recursos": [
      "DFT com abordagem mista Gaussianas/plano de onda (GPW e GAPW)",
      "DFTB, LDA, GGA, MP2, RPA e semiempíricos (AM1, PM3, PM6, MNDO)",
      "Campos de força clássicos (AMBER, CHARMM)",
      "Dinâmica molecular ab initio, metadinâmica e Monte Carlo",
      "QM/MM (componentes Quickstep e FIST)",
      "Análise vibracional e otimização de estado de transição (NEB/dimer)",
      "Paralelismo com multithreading, MPI, CUDA e HIP"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.cp2k.org",
      "download": "https://www.cp2k.org/download",
      "documentacao": "http://manual.cp2k.org",
      "tutorial": "https://www.cp2k.org/exercises",
      "suporte": "https://github.com/cp2k/cp2k/issues",
      "codigo": "https://github.com/cp2k/cp2k",
      "publicacao": "https://doi.org/10.1063/5.0007045"
    }
  },
  {
    "id": 9,
    "name": "SIESTA",
    "area": "dft-solidos",
    "applicability": [
      "hpc"
    ],
    "price": "free",
    "description": "Spanish Initiative for Electronic Simulations with Thousands of Atoms, método DFT com orbitals de base local.",
    "tags": [
      "DFT",
      "Orbitais Locais",
      "Materiais"
    ],
    "license": "GNU GPL v3",
    "website": "https://siesta-project.org/siesta",
    "arquivo": "softwares/software-9-siesta.html",
    "recursos": [
      "DFT de Kohn-Sham (LDA-LSD e GGA, com van der Waals)",
      "Pseudopotenciais norm-conserving não locais (Kleinman-Bylander)",
      "Orbitais atômicos localizados de suporte finito (múltiplos zeta, polarização)",
      "Escalonamento O(N)",
      "Dinâmica molecular com termostato de Nosé e célula de Parrinello-Rahman",
      "Fónons e TDDFT em tempo real",
      "TranSIESTA para transporte quântico em nanoescala"
    ],
    "plataformas": [],
    "links": {
      "site": "https://siesta-project.org/siesta",
      "download": "https://siesta-project.org/siesta/CodeAccess/",
      "documentacao": "https://siesta-project.org/siesta/Documentation/",
      "tutorial": null,
      "suporte": "https://siesta-project.org/siesta/support/",
      "codigo": "https://gitlab.com/siesta-project/siesta",
      "publicacao": "https://doi.org/10.1088/0953-8984/14/11/302"
    }
  },
  {
    "id": 10,
    "name": "CASTEP",
    "area": "dft-solidos",
    "applicability": [
      "hpc"
    ],
    "price": "academic",
    "description": "Código de DFT para simulações de estrutura eletrônica de materiais periódicos usando planos de onda.",
    "tags": [
      "DFT",
      "Planos de Onda",
      "Sólidos Periódicos"
    ],
    "license": "Gratuito para acadêmicos (STFC) / Comercial via BIOVIA",
    "website": "https://www.castep.org",
    "arquivo": "softwares/software-10-castep.html",
    "recursos": [
      "DFT com ondas planas e pseudopotenciais",
      "Espectroscopia vibracional (IR/Raman)",
      "RMN de estado sólido",
      "Espectroscopias ópticas e de core-loss",
      "Propriedades estruturais e dinâmica",
      "Solucionadores eletrônicos e paralelismo"
    ],
    "plataformas": [],
    "links": {
      "site": "https://www.castep.org",
      "download": "https://licences.stfc.ac.uk/product/castep",
      "documentacao": "https://castep-docs.github.io/castep-docs",
      "tutorial": "https://castep-docs.github.io/castep-docs/",
      "suporte": "http://www.jiscmail.ac.uk/lists/CASTEP.html",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 11,
    "name": "GROMACS",
    "area": "dinamica-molecular",
    "applicability": [
      "desktop",
      "hpc",
      "cli"
    ],
    "price": "free",
    "description": "Pacote de dinâmica molecular de alta performance para simulações de proteínas, lipídios e moléculas.",
    "tags": [
      "MD",
      "Proteínas",
      "Biomoléculas",
      "Open Source"
    ],
    "license": "GNU LGPL",
    "website": "https://www.gromacs.org",
    "arquivo": "softwares/software-11-gromacs.html",
    "recursos": [
      "Dinâmica molecular de alto desempenho",
      "Análise de saída e trajetórias",
      "Aceleração por GPU com CUDA, OpenCL e SYCL",
      "Otimização por SIMD em CPU",
      "Paralelismo MPI e Thread MPI",
      "Simulações em larga escala em supercomputadores"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.gromacs.org",
      "download": "https://manual.gromacs.org/current/download.html",
      "documentacao": "https://manual.gromacs.org/current/index.html",
      "tutorial": "https://tutorials.gromacs.org/md-intro-tutorial.html",
      "suporte": "http://forums.gromacs.org",
      "codigo": "https://gitlab.com/gromacs/gromacs",
      "publicacao": "https://doi.org/10.1016/j.softx.2015.06.001"
    }
  },
  {
    "id": 12,
    "name": "AMBER",
    "area": "dinamica-molecular",
    "applicability": [
      "desktop",
      "hpc"
    ],
    "price": "academic",
    "description": "Suite de simulação de dinâmica molecular de biomoléculas com campos de força bem estabelecidos.",
    "tags": [
      "MD",
      "Proteínas",
      "Campos de Força"
    ],
    "license": "Grátis Acadêmico / Pago Comercial",
    "website": "https://ambermd.org",
    "arquivo": "softwares/software-12-amber.html",
    "recursos": [
      "Campos de força para biomoléculas (ff19SB, OL24, OL3, GLYCAM_06j, lipids21, gaff2)",
      "Dinâmica molecular com sander e pmemd",
      "Aceleração por GPU (pmemd.cuda)",
      "Energia livre alquímica (potenciais softcore, Jarzynski/Crooks)",
      "Solvente implícito por Poisson-Boltzmann/GB",
      "REMD de temperatura e Hamiltoniano",
      "AmberTools com antechamber, tleap, cpptraj e sqm"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://ambermd.org",
      "download": "https://ambermd.org/GetAmber.php",
      "documentacao": "https://ambermd.org/Manuals.php",
      "tutorial": "https://ambermd.org/tutorials/",
      "suporte": "https://ambermd.org/MailingLists.php",
      "codigo": null,
      "publicacao": "https://ambermd.org/CiteAmber.php"
    }
  },
  {
    "id": 13,
    "name": "NAMD",
    "area": "dinamica-molecular",
    "applicability": [
      "desktop",
      "hpc"
    ],
    "price": "free",
    "description": "Programa de dinâmica molecular paralelo para simulações de grandes sistemas biomoleculares.",
    "tags": [
      "MD",
      "Paralelo",
      "Biomoléculas",
      "NAMD"
    ],
    "license": "Grátis",
    "website": "https://www.ks.uiuc.edu/Research/namd",
    "arquivo": "softwares/software-13-namd.html",
    "recursos": [
      "Dinâmica molecular paralela de grandes sistemas biomoleculares",
      "Paralelismo Charm++ com balanceamento de carga",
      "Compilações aceleradas por GPU (CUDA e AMD HIP/ROCm)",
      "Eletrostática Particle Mesh Ewald",
      "Termostato Langevin e controle de pressão",
      "Replica exchange, umbrella sampling e energia livre alquímica",
      "Solvente implícito Generalized Born e campo coarse-grain MARTINI"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.ks.uiuc.edu/Research/namd",
      "download": "https://www.ks.uiuc.edu/Development/Download/download.cgi?PackageName=NAMD",
      "documentacao": "https://www.ks.uiuc.edu/Research/namd/current/ug/",
      "tutorial": "https://www.ks.uiuc.edu/Training/Tutorials/",
      "suporte": "https://www.ks.uiuc.edu/Research/namd/mailing_list/",
      "codigo": "https://gitlab.com/tcbgUIUC/namd",
      "publicacao": "https://doi.org/10.1063/5.0014475"
    }
  },
  {
    "id": 14,
    "name": "LAMMPS",
    "area": "dinamica-molecular",
    "applicability": [
      "hpc",
      "cli"
    ],
    "price": "free",
    "description": "Large-scale Atomic/Molecular Massively Parallel Simulator para simulações de materiais e partículas.",
    "tags": [
      "MD",
      "Materiais",
      "Parallel",
      "Open Source"
    ],
    "license": "GNU GPL",
    "website": "https://www.lammps.org",
    "arquivo": "softwares/software-14-lammps.html",
    "recursos": [
      "Dinâmica molecular clássica para modelagem de materiais",
      "Potenciais para sólidos (metais, semicondutores) e matéria mole",
      "Paralelismo com message-passing e decomposição espacial",
      "Desempenho acelerado em CPU e GPU",
      "Simulação em escala atômica, meso e continuum",
      "Arquitetura extensível por packages",
      "LAMMPS-GUI interativa multiplataforma"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.lammps.org",
      "download": "https://www.lammps.org/download/",
      "documentacao": "https://docs.lammps.org/Manual.html",
      "tutorial": "https://www.lammps.org/documentation/tutorials/",
      "suporte": "https://matsci.org/lammps",
      "codigo": "https://github.com/lammps/lammps",
      "publicacao": "https://www.lammps.org/about/citing/"
    }
  },
  {
    "id": 15,
    "name": "OpenMM",
    "area": "dinamica-molecular",
    "applicability": [
      "python",
      "desktop"
    ],
    "price": "free",
    "description": "Biblioteca Python para simulações de dinâmica molecular com aceleração por GPU.",
    "tags": [
      "Python",
      "GPU",
      "Biblioteca MD"
    ],
    "license": "GNU LGPL",
    "website": "https://openmm.org",
    "arquivo": "softwares/software-15-openmm.html",
    "recursos": [
      "Dinâmica molecular de alta performance, especialmente em GPU",
      "Plataformas CUDA, OpenCL, HIP, CPU e Reference",
      "Forças e integradores customizáveis",
      "Camada de aplicação e biblioteca de APIs",
      "APIs em Python, C++ e Fortran",
      "Potenciais de machine learning (OpenMM 8) e forças polarizáveis AMOEBA"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://openmm.org",
      "download": "https://docs.openmm.org/latest/userguide/application/01_getting_started.html",
      "documentacao": "https://docs.openmm.org/latest/userguide/",
      "tutorial": "https://openmm.github.io/openmm-cookbook/",
      "suporte": "https://github.com/openmm/openmm/discussions",
      "codigo": "https://github.com/openmm/openmm",
      "publicacao": "https://doi.org/10.1021/acs.jpcb.3c06662"
    }
  },
  {
    "id": 16,
    "name": "RDKit",
    "area": "quimioinformatica",
    "applicability": [
      "python",
      "desktop",
      "cli"
    ],
    "price": "free",
    "description": "Biblioteca open source de quimioinformática para processamento de moléculas, fingerprinting e similaridade.",
    "tags": [
      "Python",
      "SMILES",
      "Fingerprinting",
      "Quimioinformática"
    ],
    "license": "BSD",
    "website": "https://www.rdkit.org",
    "arquivo": "softwares/software-16-rdkit.html",
    "recursos": [
      "Núcleo de quimioinformática em C++",
      "Wrapper para Python 3.x",
      "Wrappers Java e C# gerados com SWIG",
      "Wrapper JavaScript (emscripten) e CFFI",
      "Cartucho para PostgreSQL",
      "Nós de quimioinformática para KNIME",
      "Instalação via pip e conda-forge"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.rdkit.org",
      "download": "https://pypi.org/project/rdkit/",
      "documentacao": "https://www.rdkit.org/docs/index.html",
      "tutorial": "https://rdkit.org/docs/GettingStartedInPython.html",
      "suporte": "https://github.com/rdkit/rdkit/discussions",
      "codigo": "https://github.com/rdkit/rdkit",
      "publicacao": null
    }
  },
  {
    "id": 17,
    "name": "Open Babel",
    "area": "quimioinformatica",
    "applicability": [
      "desktop",
      "cli"
    ],
    "price": "free",
    "description": "Ferramenta de linha de comando e biblioteca para conversão de formatos químicos e manipulação de estruturas moleculares.",
    "tags": [
      "CLI",
      "Conversão de Formato",
      "Open Source"
    ],
    "license": "GNU GPL",
    "website": "https://openbabel.org",
    "arquivo": "softwares/software-17-open-babel.html",
    "recursos": [
      "Leitura, escrita e conversão de mais de 110 formatos químicos",
      "Filtragem e busca de arquivos moleculares com SMARTS",
      "Programas prontos e toolkit para programadores",
      "Suporte a modelagem molecular, quimioinformática e bioinformática",
      "Cobertura de química orgânica, inorgânica e materiais de estado sólido"
    ],
    "plataformas": [
      "Windows",
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://openbabel.org",
      "download": "https://github.com/openbabel/openbabel/releases",
      "documentacao": "https://openbabel.org/docs/",
      "tutorial": null,
      "suporte": "https://sourceforge.net/p/openbabel/mailman/openbabel-discuss/",
      "codigo": "https://github.com/openbabel/openbabel",
      "publicacao": "https://doi.org/10.1186/1758-2946-3-33"
    }
  },
  {
    "id": 18,
    "name": "ChemDraw",
    "area": "quimioinformatica",
    "applicability": [
      "desktop",
      "web"
    ],
    "price": "paid",
    "description": "Software comercial para desenho de estruturas químicas e reações, amplamente usado em publicações acadêmicas.",
    "tags": [
      "Desenho Químico",
      "Reações",
      "Publicações"
    ],
    "license": "Comercial",
    "website": "https://revvitysignals.com/products/research/chemdraw",
    "arquivo": "softwares/software-18-chemdraw.html",
    "recursos": [
      "Ferramentas de desenho e edição de estruturas e reações",
      "Name-to-Structure e Structure-to-Name",
      "Previsão de RMN de 1H e 13C e de pKa (edições Professional)",
      "Análise e checagem de estruturas com percepção estereoquímica",
      "Ferramentas de fragmentação por massas",
      "Coleções de moléculas e reações na nuvem",
      "Conexão do canvas a bases científicas como SciFinder e Reaxys"
    ],
    "plataformas": [
      "Windows",
      "macOS"
    ],
    "links": {
      "site": "https://revvitysignals.com/products/research/chemdraw",
      "download": "https://connect.revvitysignals.com/sitesubscription/",
      "documentacao": "https://support.revvitysignals.com/hc/en-us/articles/9130327027220-ChemDraw-Where-can-I-find-the-User-Guide-for-ChemDraw",
      "tutorial": "https://support.revvitysignals.com/hc/en-us/articles/39632645717396-How-to-get-started-with-ChemDraw-as-a-University-Student",
      "suporte": "https://support.revvitysignals.com/hc/en-us/sections/360010804431-ChemDraw-ChemOffice-Products",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 19,
    "name": "MarvinSketch",
    "area": "quimioinformatica",
    "applicability": [
      "desktop",
      "web"
    ],
    "price": "academic",
    "description": "Ferramenta de desenho de estruturas químicas com versão gratuita para uso acadêmico.",
    "tags": [
      "Desenho",
      "Quimioinformática",
      "Web"
    ],
    "license": "Comercial (gratuito para acadêmicos)",
    "website": "https://www.certara.com/marvin/",
    "arquivo": "softwares/software-19-marvinsketch.html",
    "recursos": [
      "Editor químico avançado e com consciência química",
      "Desenho de estruturas, queries e reações",
      "Visualização de múltiplas estruturas com MarvinView",
      "Conversão entre formatos químicos via Molconvert",
      "Suporte aos plugins de cálculo da ChemAxon",
      "Importação/exportação nos formatos químicos mais comuns e no CXN",
      "Execução em desktop e como componente web (Marvin JS)"
    ],
    "plataformas": [
      "Windows",
      "macOS",
      "Linux"
    ],
    "links": {
      "site": "https://www.certara.com/marvin/",
      "download": "https://download.chemaxon.com/marvin-sketch",
      "documentacao": "https://docs.chemaxon.com/latest/marvin_marvin-desktop-suite.html",
      "tutorial": "https://www.certara.com/video/clean-to-scaffold-how-to-marvin/",
      "suporte": "https://certara.atlassian.net/servicedesk/customer/portals/",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 20,
    "name": "AutoDock Vina",
    "area": "docking",
    "applicability": [
      "desktop",
      "cli"
    ],
    "price": "free",
    "description": "Programa de docking molecular para predição de ligação de ligantes a proteínas e descoberta de fármacos.",
    "tags": [
      "Docking",
      "Descoberta de Fármacos",
      "Open Source"
    ],
    "license": "Apache 2.0",
    "website": "https://vina.scripps.edu",
    "arquivo": "softwares/software-20-autodock-vina.html",
    "recursos": [
      "Docking molecular proteína-ligante",
      "Cadeias laterais flexíveis no receptor",
      "Compatível com o formato PDBQT do AutoDock",
      "Não requer grid maps, arquivos GPF/DPF nem cargas atômicas",
      "Sem viés estatístico conformacional",
      "Ordens de magnitude mais rápido que o AutoDock 4",
      "Suporte a múltiplas CPUs/núcleos"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://vina.scripps.edu",
      "download": "https://vina.scripps.edu/downloads/",
      "documentacao": "https://vina.scripps.edu/manual/",
      "tutorial": "https://vina.scripps.edu/tutorial/",
      "suporte": "https://vina.scripps.edu/questions/",
      "codigo": "https://github.com/ccsb-scripps/AutoDock-Vina",
      "publicacao": "https://doi.org/10.1002/jcc.21334"
    }
  },
  {
    "id": 21,
    "name": "Schrödinger Suite",
    "area": "docking",
    "applicability": [
      "desktop",
      "web"
    ],
    "price": "paid",
    "description": "Suíte comercial completa para descoberta de fármacos, modelagem molecular e simulações avançadas.",
    "tags": [
      "Fármacos",
      "Modelagem",
      "Comercial"
    ],
    "license": "Comercial",
    "website": "https://www.schrodinger.com",
    "arquivo": "softwares/software-21-schrodinger-suite.html",
    "recursos": [
      "Modelagem e docking de moléculas pequenas (Glide)",
      "Cálculos de energia livre de ligação (FEP+)",
      "Dinâmica molecular (Desmond)",
      "Química quântica (Jaguar)",
      "Ambiente unificado Maestro",
      "API em Python para automação de fluxos de trabalho",
      "Predição de propriedades e toxicidade"
    ],
    "plataformas": [
      "Linux",
      "Windows",
      "macOS"
    ],
    "links": {
      "site": "https://www.schrodinger.com/platform/",
      "download": "https://www.schrodinger.com/release-download/",
      "documentacao": "https://learn.schrodinger.com/private/edu/release/current/Documentation/html/Home.htm",
      "tutorial": "https://www.schrodinger.com/life-science/resources/?type=tutorial",
      "suporte": "https://my.schrodinger.com/support",
      "codigo": null,
      "publicacao": "https://www.schrodinger.com/citations/"
    }
  },
  {
    "id": 22,
    "name": "Discovery Studio",
    "area": "docking",
    "applicability": [
      "desktop"
    ],
    "price": "paid",
    "description": "Plataforma comercial para simulações moleculares e descoberta de fármacos com interface gráfica avançada.",
    "tags": [
      "Simulação Molecular",
      "Fármacos",
      "Interface Gráfica"
    ],
    "license": "Comercial",
    "website": "https://www.3ds.com/products/biovia/discovery-studio",
    "arquivo": "softwares/software-22-discovery-studio.html",
    "recursos": [
      "Modelagem molecular e dinâmica molecular (CHARMm, NAMD, OpenMM)",
      "Design baseado em estrutura com docking CDOCKER",
      "Design baseado em ligante e farmacóforos (Catalyst)",
      "Modelagem de bioterapêuticos e anticorpos, incluindo humanização",
      "Modelos QSAR, ADMET e toxicologia preditiva",
      "Visualização 3D com imagens de qualidade de publicação",
      "Fluxos de trabalho automatizados na plataforma 3DEXPERIENCE"
    ],
    "plataformas": [
      "Windows",
      "Linux"
    ],
    "links": {
      "site": "https://www.3ds.com/products/biovia/discovery-studio",
      "download": "https://discover.3ds.com/discovery-studio-visualizer-download",
      "documentacao": "https://www.3ds.com/support/documentation/resource-library",
      "tutorial": "https://www.3ds.com/products/biovia/training",
      "suporte": "https://www.3ds.com/products/biovia/user-communities",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 23,
    "name": "PyMOL",
    "area": "visualizacao",
    "applicability": [
      "desktop"
    ],
    "price": "academic",
    "description": "Sistema de visualização de estruturas moleculares 3D, amplamente usado para proteínas e moléculas pequenas.",
    "tags": [
      "Visualização 3D",
      "Proteínas",
      "Rendering"
    ],
    "license": "Open Source (Educação) / Pago",
    "website": "https://pymol.org",
    "arquivo": "softwares/software-23-pymol.html",
    "recursos": [
      "Renderização com ray tracing de qualidade de publicação",
      "Criação de filmes com timeline e interpolação de cenas",
      "Filmes multi-estado, incluindo estruturas de RMN e trajetórias de MD",
      "Seleções, estilos e análise de bolso de ligação",
      "Importação de cenas do Maestro",
      "Scripts e plugins em Python",
      "Arquivos de sessão para salvar e compartilhar cenários"
    ],
    "plataformas": [
      "Windows",
      "macOS",
      "Linux"
    ],
    "links": {
      "site": "https://pymol.org/",
      "download": "https://pymol.org/2/",
      "documentacao": "https://pymol.org/dokuwiki/",
      "tutorial": "https://pymol.org/dokuwiki/doku.php?id=tutorials",
      "suporte": "https://pymol.org/support.html",
      "codigo": "https://github.com/schrodinger/pymol-open-source",
      "publicacao": "https://pymol.org/support.html"
    }
  },
  {
    "id": 24,
    "name": "VMD",
    "area": "visualizacao",
    "applicability": [
      "desktop"
    ],
    "price": "free",
    "description": "Visual Molecular Dynamics para visualização e animação de simulações de dinâmica molecular e biomoléculas.",
    "tags": [
      "Visualização",
      "MD",
      "Animação",
      "Biomoléculas"
    ],
    "license": "Grátis",
    "website": "https://www.ks.uiuc.edu/Research/vmd",
    "arquivo": "softwares/software-24-vmd.html",
    "recursos": [
      "Representações moleculares e biblioteca de plugins",
      "Leitura de ampla variedade de formatos moleculares",
      "Computação acelerada em GPU",
      "Dinâmica molecular interativa (IMD)",
      "Análise e visualização paralelas para simulações em escala celular",
      "Plugins de preparo e análise (QwikMD, ParseFEP, MDFF, ffTK, NMWiz)",
      "Ray tracing interativo e renderização de filmes 360º"
    ],
    "plataformas": [
      "macOS",
      "Unix",
      "Windows"
    ],
    "links": {
      "site": "https://www.ks.uiuc.edu/Research/vmd/",
      "download": "https://www.ks.uiuc.edu/Development/Download/download.cgi?PackageName=VMD",
      "documentacao": "https://www.ks.uiuc.edu/Research/vmd/current/ug/",
      "tutorial": "https://www.ks.uiuc.edu/Research/vmd/current/docs.html",
      "suporte": "https://www.ks.uiuc.edu/Research/vmd/mailing_list/",
      "codigo": null,
      "publicacao": "https://www.ks.uiuc.edu/Research/vmd/allversions/cite.html"
    }
  },
  {
    "id": 25,
    "name": "ChimeraX",
    "area": "visualizacao",
    "applicability": [
      "desktop"
    ],
    "price": "academic",
    "description": "Programa de visualização de estruturas moleculares para pesquisa, com suporte a grandes estruturas.",
    "tags": [
      "Visualização",
      "Proteínas",
      "Estruturas Grandes"
    ],
    "license": "Grátis Acadêmico",
    "website": "https://www.rbvi.ucsf.edu/chimeraX",
    "arquivo": "softwares/software-25-chimerax.html",
    "recursos": [
      "Sobreposição de estruturas (matchmaker) e morphing para animação",
      "Análise de interfaces entre cadeias por área superficial soterrada",
      "Identificação de cavidades e canais (KVFinder, MOLE)",
      "Visualização de mapas de densidade e cryo-EM",
      "Carregamento de predições do AlphaFold com coloração por confiança",
      "Renderização de imagens e filmes com exportação GLTF",
      "Suporte a realidade virtual (SteamVR) e sessões colaborativas"
    ],
    "plataformas": [
      "Windows",
      "macOS",
      "Linux"
    ],
    "links": {
      "site": "https://www.rbvi.ucsf.edu/chimerax/",
      "download": "https://www.rbvi.ucsf.edu/chimerax/download.html",
      "documentacao": "https://www.rbvi.ucsf.edu/chimerax/docs/index.html",
      "tutorial": "https://www.rbvi.ucsf.edu/chimerax/tutorials.html",
      "suporte": "https://mail.cgl.ucsf.edu/mailman/mailman3/lists/chimerax-users.cgl.ucsf.edu/",
      "codigo": "https://github.com/RBVI/ChimeraX/",
      "publicacao": "https://doi.org/10.1002/pro.3943"
    }
  },
  {
    "id": 26,
    "name": "Rosetta",
    "area": "bioquimica",
    "applicability": [
      "desktop",
      "hpc"
    ],
    "price": "academic",
    "description": "Suíte de software para predição de estrutura e design de proteínas e macromoléculas.",
    "tags": [
      "Proteínas",
      "Design de Proteínas",
      "Dobramento"
    ],
    "license": "Grátis Acadêmico",
    "website": "https://www.rosettacommons.org",
    "arquivo": "softwares/software-26-rosetta.html",
    "recursos": [
      "Predição de estrutura de proteínas",
      "Design de novo de proteínas",
      "Design de enzimas",
      "Docking de ligantes",
      "Modelagem de complexos macromoleculares",
      "PyRosetta (scripting em Python)",
      "RosettaScripts (scripting em XML)"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://www.rosettacommons.org",
      "download": "https://downloads.rosettacommons.org/software/academic/",
      "documentacao": "https://docs.rosettacommons.org",
      "tutorial": "https://www.rosettacommons.org/demos/latest/Home#tutorials",
      "suporte": "https://forum.rosettacommons.org/forum/",
      "codigo": "https://github.com/RosettaCommons/rosetta",
      "publicacao": "https://doi.org/10.1038/s41592-020-0848-2"
    }
  },
  {
    "id": 27,
    "name": "Molpro",
    "area": "quimica-quantica",
    "applicability": [
      "hpc"
    ],
    "price": "paid",
    "description": "Pacote de química quântica ab initio focado em métodos de alta precisão para moléculas pequenas e médias.",
    "tags": [
      "Ab Initio",
      "CCSD(T)",
      "Alta Precisão"
    ],
    "license": "Comercial",
    "website": "https://www.molpro.net",
    "arquivo": "softwares/software-27-molpro.html",
    "recursos": [
      "CASPT2-F12, MRCI-F12 e CCSD(T)-F12",
      "PNO-LCCSD(T)-F12 para moléculas com 100-200 átomos",
      "DFT e TD-DFT com grande número de funcionais",
      "Gradientes analíticos e propriedades para estados fundamentais e excitados",
      "Efeitos relativísticos: Douglas-Kroll-Hess, Breit-Pauli e ECP",
      "Embedding WF-in-DFT e métodos QM/MM",
      "Interfaces gráficas iMolpro e gmolpro"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://www.molpro.net",
      "download": "https://www.molpro.net/licensee/login.php",
      "documentacao": "https://www.molpro.net/manual/doku.php",
      "tutorial": "https://www.molpro.net/manual/doku.php?id=quickstart",
      "suporte": "https://groups.google.com/d/forum/molpro-user",
      "codigo": null,
      "publicacao": "https://www.molpro.net/manual/doku.php?id=references"
    }
  },
  {
    "id": 28,
    "name": "Materials Studio",
    "area": "dft-solidos",
    "applicability": [
      "desktop"
    ],
    "price": "paid",
    "description": "Suíte comercial para simulação de materiais, catálise e nanotecnologia com interface gráfica integrada.",
    "tags": [
      "Materiais",
      "Catálise",
      "Nanotecnologia"
    ],
    "license": "Comercial",
    "website": "https://www.3ds.com/products/biovia/materials-studio",
    "arquivo": "softwares/software-28-materials-studio.html",
    "recursos": [
      "Solvers quânticos CASTEP, DMol3, DFTB+, ONETEP e VAMP",
      "Simulação clássica e Monte Carlo com Forcite, GULP, Mesocite e MesoDyn",
      "Dinâmica molecular reativa por Monte Carlo cinético (ReactionFinder)",
      "DFT-D4, bibliotecas ReaxFF e busca de estado de transição (FlexTS)",
      "Modelos de campo de fases e dinâmica granular",
      "Execução acelerada em GPUs NVIDIA e suporte a clusters Linux"
    ],
    "plataformas": [
      "Windows",
      "Linux"
    ],
    "links": {
      "site": "https://www.3ds.com/products/biovia/materials-studio",
      "download": "https://software.3ds.com",
      "documentacao": "https://www.3ds.com/support/documentation/resource-library/t61-2025-materials-studio-2026",
      "tutorial": "https://www.3ds.com/products/biovia/training",
      "suporte": "https://www.3ds.com/support/",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 29,
    "name": "NWChem",
    "area": "quimica-quantica",
    "applicability": [
      "hpc",
      "cli"
    ],
    "price": "free",
    "description": "Código de química computacional open source para simulações de escala molecular e de materiais.",
    "tags": [
      "Open Source",
      "HPC",
      "Química Quântica"
    ],
    "license": "Educational Community License (ECL) 2.0",
    "website": "https://nwchemgit.github.io",
    "arquivo": "softwares/software-29-nwchem.html",
    "recursos": [
      "Hartree-Fock e DFT para moléculas",
      "TD-DFT, CIS/TDHF e real-time TDDFT",
      "MP2, CCSD, MCSCF e GW",
      "DFT com ondas planas e DFTB/XTB",
      "Cálculos QM/MM e híbridos com ONIOM",
      "Modelos de solvatação (PCM, 1D-RISM) e efeitos relativísticos",
      "Dinâmica molecular, NEB e estados de transição"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://nwchemgit.github.io",
      "download": "https://github.com/nwchemgit/nwchem/releases",
      "documentacao": "https://nwchemgit.github.io/nwchemusermanual.pdf",
      "tutorial": "https://nwchemgit.github.io/Tutorials.html",
      "suporte": "https://groups.google.com/g/nwchem-forum",
      "codigo": "https://github.com/nwchemgit/nwchem",
      "publicacao": "https://nwchemgit.github.io/Citation.html"
    }
  },
  {
    "id": 30,
    "name": "Dalton",
    "area": "quimica-quantica",
    "applicability": [
      "hpc",
      "cli"
    ],
    "price": "free",
    "description": "Programa de química quântica ab initio para propriedades moleculares e espectroscopia.",
    "tags": [
      "Ab Initio",
      "Propriedades Moleculares",
      "Espectroscopia"
    ],
    "license": "GNU LGPL v2.1",
    "website": "https://gitlab.com/dalton/dalton",
    "arquivo": "softwares/software-30-dalton.html",
    "recursos": [
      "Teoria de resposta dependente de frequência linear, quadrática e cúbica",
      "Propriedades de RMN (blindagens e parâmetros magnéticos)",
      "RHF/ROHF e DFT com correções de dispersão DFT-D2/D3/D3BJ",
      "MCSCF/CASSCF, FCI e NEVPT2 para sistemas multirreferenciais",
      "MP2, SCS-MP2, SOS-MP2 e modelos R12",
      "Gradientes, hessianos, estados de transição e análise vibracional",
      "Modelos multiescala: SCRF/PCM, polarizable embedding (PE), QM/MM"
    ],
    "plataformas": [],
    "links": {
      "site": "https://gitlab.com/dalton/dalton",
      "download": "https://gitlab.com/dalton/dalton/-/releases",
      "documentacao": "https://daltonproject.readthedocs.io/en/latest/",
      "tutorial": "https://daltonproject.readthedocs.io/en/latest/tutorials/spectrum/spectrum_tutorial.html",
      "suporte": "https://gitlab.com/dalton/user-support",
      "codigo": "https://gitlab.com/dalton/dalton",
      "publicacao": "https://doi.org/10.1002/wcms.1172"
    }
  },
  {
    "id": 31,
    "name": "PySCF",
    "area": "quimica-quantica",
    "applicability": [
      "python",
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Pacote aberto de química quântica escrito em Python, para moléculas e sólidos periódicos.",
    "tags": [
      "Python",
      "DFT",
      "CCSD(T)",
      "CASSCF",
      "Open Source"
    ],
    "license": "Apache-2.0",
    "website": "https://pyscf.org/",
    "arquivo": "softwares/software-31-pyscf.html",
    "recursos": [
      "RHF/UHF/DHF e DKS relativístico",
      "RKS/UKS, TDDFT",
      "MP2, CCSD e CCSD(T)",
      "CASSCF/CASCI com DMRG e FCIQMC",
      "SC-NEVPT2",
      "Sólidos periódicos em k-ponto",
      "Propriedades NMR e EPR"
    ],
    "plataformas": [],
    "links": {
      "site": "https://pyscf.org/",
      "download": null,
      "documentacao": "https://pyscf.org/features.html",
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/pyscf/pyscf",
      "publicacao": "https://doi.org/10.1063/5.0337441"
    }
  },
  {
    "id": 32,
    "name": "xtb",
    "area": "quimica-quantica",
    "applicability": [
      "cli",
      "hpc",
      "desktop"
    ],
    "price": "free",
    "description": "Programa semiempirico de extended tight-binding (GFN-xTB) e campo de força GFN-FF do grupo Grimme.",
    "tags": [
      "GFN-xTB",
      "Semiempírico",
      "GFN-FF",
      "Solvatação implícita",
      "DFT-D4"
    ],
    "license": "LGPL-3.0-or-later",
    "website": "https://github.com/grimme-lab/xtb",
    "arquivo": "softwares/software-32-xtb.html",
    "recursos": [
      "GFN0-xTB, GFN1-xTB e GFN2-xTB",
      "Força de campo GFN-FF",
      "Correções de dispersão DFT-D4",
      "GBSA/ALPB e ddCOSMO/CPCM-X",
      "sTDA-xTB",
      "Metadinâmica e ONIOM"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://github.com/grimme-lab/xtb",
      "download": "https://github.com/grimme-lab/xtb/releases/latest",
      "documentacao": "https://xtb-docs.readthedocs.io/en/latest/",
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/grimme-lab/xtb",
      "publicacao": "https://doi.org/10.1002/wcms.1493"
    }
  },
  {
    "id": 33,
    "name": "TURBOMOLE",
    "area": "quimica-quantica",
    "applicability": [
      "desktop",
      "cli",
      "hpc"
    ],
    "price": "paid",
    "description": "Pacote ab initio comercial para moléculas, clusters e sistemas periódicos, desenvolvido pela TURBOMOLE GmbH.",
    "tags": [
      "DFT",
      "Coupled Cluster",
      "TDDFT",
      "COSMO",
      "RI"
    ],
    "license": "Comercial; licenças perpétuas para academias, organizações sem fins lucrativos e indústria, e licença educacional gratuita para estudantes",
    "website": "https://www.turbomole.org/",
    "arquivo": "softwares/software-33-turbomole.html",
    "recursos": [
      "RI-DFT (GGA, híbridos, double hybrids, D3/D4)",
      "MP2, CC2, CCSD(T), F12 e PNO",
      "TDDFT e ADC(2)",
      "GW/BSE",
      "Relativística X2C e spin-órbita",
      "COSMO",
      "Dinâmica ab initio"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.turbomole.org/",
      "download": "https://downloadcenter.turbomole.org/",
      "documentacao": "https://manual.turbomole.org/",
      "tutorial": null,
      "suporte": "https://forum.turbomole.org/",
      "codigo": null,
      "publicacao": "https://doi.org/10.1021/acs.jctc.3c00347"
    }
  },
  {
    "id": 34,
    "name": "ADF (Amsterdam Modeling Suite)",
    "area": "quimica-quantica",
    "applicability": [
      "desktop",
      "cli",
      "hpc"
    ],
    "price": "paid",
    "description": "Suíte comercial da SCM cujo núcleo é o ADF, código DFT molecular com base de orbitais atômicos.",
    "tags": [
      "DFT",
      "Orbitais Locais",
      "DFTB",
      "ReaxFF",
      "BAND"
    ],
    "license": "Comercial; licenças acadêmicas anuais pagas e avaliação gratuita",
    "website": "https://www.scm.com/",
    "arquivo": "softwares/software-34-adf-amsterdam-modeling-suite.html",
    "recursos": [
      "ADF: DFT molecular com orbital base",
      "BAND: DFT periódico",
      "DFTB e módulo MOPAC",
      "Potenciais ReaxFF",
      "Interface AMSinput",
      "Análise de energia de ligação e fragmentos"
    ],
    "plataformas": [
      "Windows",
      "macOS",
      "Linux"
    ],
    "links": {
      "site": "https://www.scm.com/",
      "download": "https://www.scm.com/downloads/",
      "documentacao": "https://www.scm.com/doc/",
      "tutorial": null,
      "suporte": "https://www.scm.com/contact-us/",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 35,
    "name": "MRCC",
    "area": "quimica-quantica",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "academic",
    "description": "Suíte ab initio e DFT de alta acurácia do grupo de M. Kállay, conhecida pelos métodos CC e CI de alto nível.",
    "tags": [
      "Coupled Cluster",
      "Multirreferência",
      "CCSD(T)",
      "Relativístico",
      "Correlação Local"
    ],
    "license": "Gratuito para uso acadêmico mediante registro com e-mail institucional e aceite do acordo de licença; uso comercial sob termos próprios",
    "website": "https://www.mrcc.hu/",
    "arquivo": "softwares/software-35-mrcc.html",
    "recursos": [
      "CCSDT e CCQPR em referência simples",
      "CC multirreferência",
      "Derivadas de energia e funções de resposta",
      "Métodos perturbativos",
      "Hamiltonianas relativísticas",
      "Correlação local (pNO e afins)"
    ],
    "plataformas": [],
    "links": {
      "site": "https://www.mrcc.hu/",
      "download": "https://www.mrcc.hu/index.php/getting-started/download",
      "documentacao": "https://www.mrcc.hu/index.php/documentation/manual",
      "tutorial": null,
      "suporte": "https://www.mrcc.hu/index.php/support",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 36,
    "name": "TeraChem",
    "area": "quimica-quantica",
    "applicability": [
      "cli",
      "hpc",
      "desktop"
    ],
    "price": "paid",
    "description": "Pacote de estrutura eletrônica e dinâmica ab initio projetado para GPUs NVIDIA, desenvolvido pelo grupo Martínez.",
    "tags": [
      "GPU",
      "CUDA",
      "Dinâmica ab initio",
      "TDDFT",
      "DFT"
    ],
    "license": "Proprietário, licença anual por máquina (valores acadêmicos e industriais publicados na página de preços)",
    "website": "http://www.petachem.com/",
    "arquivo": "softwares/software-36-terachem.html",
    "recursos": [
      "Cálculos em GPU NVIDIA/CUDA",
      "Dinâmica ab initio",
      "Estrutura eletrônica de moléculas e biomoléculas",
      "Distribuição on-the-fly de dados de treinamento",
      "Versão de avaliação"
    ],
    "plataformas": [
      "Linux"
    ],
    "links": {
      "site": "http://www.petachem.com/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1002/wcms.1494"
    }
  },
  {
    "id": 37,
    "name": "MOPAC",
    "area": "quimica-quantica",
    "applicability": [
      "cli",
      "python",
      "desktop"
    ],
    "price": "free",
    "description": "Pacote semiempírico histórico (AM1, PM6, PM7), hoje distribuído como projeto open source.",
    "tags": [
      "Semiempírico",
      "PM7",
      "AM1",
      "COSMO",
      "MOZYME"
    ],
    "license": "Apache-2.0 (versão open source atual, mantida com o MolSSI)",
    "website": "https://openmopac.net/",
    "arquivo": "softwares/software-37-mopac.html",
    "recursos": [
      "Modelos AM1, PM6 e PM7",
      "Solvatação implícita COSMO",
      "Solver MOZYME",
      "Tratamento periódico 1D-3D no ponto gama",
      "API e uso via linha de comando"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://openmopac.net/",
      "download": "https://openmopac.net/download/",
      "documentacao": "https://openmopac.net/Manual",
      "tutorial": "https://openmopac.net/guides/",
      "suporte": null,
      "codigo": "https://github.com/openmopac/mopac",
      "publicacao": null
    }
  },
  {
    "id": 38,
    "name": "ABINIT",
    "area": "dft-solidos",
    "applicability": [
      "cli",
      "hpc",
      "python"
    ],
    "price": "free",
    "description": "Suíte de DFT com pseudopotenciais/PAW e ondas planas para moléculas, nanoestruturas e sólidos.",
    "tags": [
      "DFT",
      "Ondas Planas",
      "PAW",
      "DFPT",
      "GW",
      "DFT+U"
    ],
    "license": "GNU GPL v3",
    "website": "https://www.abinit.org/",
    "arquivo": "softwares/software-38-abinit.html",
    "recursos": [
      "DFT com pseudopotenciais e PAW em ondas planas",
      "DFPT: fônons, cargas de Born, dielétricos",
      "GW e equação de Bethe-Salpeter",
      "DFT+U e DMFT",
      "TDDFT linear e em tempo real",
      "Dinâmica molecular ab initio",
      "Biblioteca Python AbiPy e interface Wannier90"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://www.abinit.org/",
      "download": "https://github.com/abinit/abinit/releases/latest",
      "documentacao": "https://docs.abinit.org/",
      "tutorial": "https://docs.abinit.org/tutorial/",
      "suporte": "https://discourse.abinit.org/",
      "codigo": "https://github.com/abinit/abinit",
      "publicacao": "https://docs.abinit.org/theory/acknowledgments/"
    }
  },
  {
    "id": 39,
    "name": "WIEN2k",
    "area": "dft-solidos",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "paid",
    "description": "Pacote all-electron de estrutura eletrônica de sólidos pelo método FP-(L)APW mais orbitais locais.",
    "tags": [
      "FP-LAPW",
      "All-electron",
      "DFT",
      "Sólidos",
      "Estrutura de Bandas"
    ],
    "license": "Software não gratuito, disponível por taxa única de licença de grupo (valores distintos para academia, laboratório governamental e indústria), com código-fonte e atualizações",
    "website": "http://susi.theochem.tuwien.ac.at/",
    "arquivo": "softwares/software-39-wien2k.html",
    "recursos": [
      "Método FP-(L)APW com local orbitals",
      "Tratamento all-electron e relativístico",
      "Estruturas de bandas e densidade de estados",
      "Paralelização por k-ponto, MPI e OpenMP",
      "Licença de grupo com código-fonte"
    ],
    "plataformas": [
      "Linux"
    ],
    "links": {
      "site": "http://susi.theochem.tuwien.ac.at/",
      "download": "https://susi.theochem.tuwien.ac.at/order/index.html",
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://susi.theochem.tuwien.ac.at/papers/index.html"
    }
  },
  {
    "id": 40,
    "name": "Elk",
    "area": "dft-solidos",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Código FP-LAPW all-electron de estrutura eletrônica de sólidos, distribuído livremente sob a GPL.",
    "tags": [
      "FP-LAPW",
      "All-electron",
      "TDDFT",
      "LDA+U",
      "Magnetismo",
      "DFPT"
    ],
    "license": "GNU GPL v3 ou posterior",
    "website": "https://elk.sourceforge.io/",
    "arquivo": "softwares/software-40-elk.html",
    "recursos": [
      "FP-LAPW com core pela equação radial de Dirac",
      "LDA+U e meta-GGA variacional (Libxc)",
      "Magnetismo não colinear e spin-órbita",
      "TDDFT em resposta linear e tempo real",
      "GW e BSE",
      "DFPT e fônons em supercélula",
      "Interface Wannier90"
    ],
    "plataformas": [],
    "links": {
      "site": "https://elk.sourceforge.io/",
      "download": "https://sourceforge.net/projects/elk/files/",
      "documentacao": null,
      "tutorial": null,
      "suporte": "https://sourceforge.net/p/elk/discussion/",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 41,
    "name": "Octopus",
    "area": "dft-solidos",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Pacote de DFT e TDDFT em malha no espaço real para sistemas finitos e periódicos sob campos dependentes do tempo.",
    "tags": [
      "TDDFT",
      "Espaço Real",
      "Tempo Real",
      "GW",
      "Floquet",
      "Ondas Planas"
    ],
    "license": "GNU GPL v3 com exceções para bibliotecas externas",
    "website": "https://www.octopus-code.org/",
    "arquivo": "softwares/software-41-octopus.html",
    "recursos": [
      "Malhas no espaço real e propagação em tempo real",
      "TDDFT linear por Casida e Sternheimer",
      "Controle ótimo e dinâmica de Floquet",
      "DFT+U, spin-órbita e exchange exato",
      "Fônons e modos vibracionais",
      "Acoplamento Maxwell-matéria",
      "Utilitários oct-wannier90 e oct-photoelectron_spectrum"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.octopus-code.org/",
      "download": "https://www.octopus-code.org/documentation/16/releases",
      "documentacao": "https://www.octopus-code.org/documentation/16/manual/",
      "tutorial": "https://www.octopus-code.org/documentation/16/tutorial/",
      "suporte": null,
      "codigo": "https://gitlab.com/octopus-code/octopus",
      "publicacao": null
    }
  },
  {
    "id": 42,
    "name": "OpenMX",
    "area": "dft-solidos",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Pacote open source de cálculos de primeira princípio com pseudopotenciais de conservação de norma e bases pseudo-atômicas.",
    "tags": [
      "DFT",
      "Bases Locais",
      "NEGF",
      "DFT+U",
      "O(N)",
      "NEB"
    ],
    "license": "GNU GPL v3",
    "website": "https://www.openmx-square.org/",
    "arquivo": "softwares/software-42-openmx.html",
    "recursos": [
      "Pseudopotenciais de conservação de norma e bases pseudo-atômicas",
      "Método O(N) e low-order scaling",
      "DFT+U, LDA/LSDA e GGA",
      "DFT não colinear com momentos orbitais",
      "Transporte por NEGF",
      "Dinâmica molecular NVE/NVT/NPT e NEB",
      "Wannier functions e interface Wannier90"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://www.openmx-square.org/",
      "download": "https://www.openmx-square.org/download.html",
      "documentacao": "https://www.openmx-square.org/openmx_man4.0/index.html",
      "tutorial": "https://www.openmx-square.org/video_lec/video_lec.html",
      "suporte": "https://www.openmx-square.org/forum/patio.cgi",
      "codigo": null,
      "publicacao": "https://www.openmx-square.org/publications.html"
    }
  },
  {
    "id": 43,
    "name": "GPAW",
    "area": "dft-solidos",
    "applicability": [
      "python",
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Código Python de DFT baseado no método projector-augmented wave e no ambiente de simulação ASE.",
    "tags": [
      "PAW",
      "DFT",
      "Python",
      "ASE",
      "RPA",
      "TDDFT"
    ],
    "license": "GNU GPL v3 ou posterior",
    "website": "https://gpaw.readthedocs.io/",
    "arquivo": "softwares/software-43-gpaw.html",
    "recursos": [
      "Método PAW com modos pw, lcao e fd",
      "Scripting em Python via ASE",
      "RPA e energia de correlação RPA",
      "Resposta dielétrica linear e TDDFT",
      "MPI com ScaLAPACK e suporte a GPU",
      "Bibliotecas de setups PAW incluindo lantanídeos"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://gpaw.readthedocs.io/",
      "download": "https://pypi.org/project/gpaw/",
      "documentacao": "https://gpaw.readthedocs.io/documentation/documentation.html",
      "tutorial": "https://gpaw.readthedocs.io/tutorialsexercises/tutorialsexercises.html",
      "suporte": null,
      "codigo": "https://gitlab.com/gpaw/gpaw",
      "publicacao": "https://doi.org/10.1063/5.0182685"
    }
  },
  {
    "id": 44,
    "name": "Wannier90",
    "area": "dft-solidos",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Programa aberto para gerar funções de Wannier maximamente localizadas e interpolar propriedades eletrônicas.",
    "tags": [
      "MLWF",
      "Funções de Wannier",
      "Berry Phase",
      "Transporte",
      "Pós-processamento"
    ],
    "license": "GNU LGPL v2.1 ou posterior (versões até 3.1.0 sob GNU GPL v2)",
    "website": "https://wannier.org/",
    "arquivo": "softwares/software-44-wannier90.html",
    "recursos": [
      "MLWF pelo esquema de Marzari-Vanderbilt",
      "Desentrelaçamento de Souza-Marzari-Vanderbilt",
      "Projeções iniciais por SCDM",
      "Wannier adaptadas a simetria e spinor",
      "Interpolação de bandas, DOS e superfícies de Fermi",
      "Curvatura de Berry, Hall anômalo e magnetização orbital",
      "Transporte de Boltzmann (BoltzWann)"
    ],
    "plataformas": [],
    "links": {
      "site": "https://wannier.org/",
      "download": "https://wannier.org/download/",
      "documentacao": "https://wannier.org/documentation/",
      "tutorial": null,
      "suporte": "https://wannier.org/support/",
      "codigo": "https://github.com/wannier-developers/wannier90",
      "publicacao": "https://wannier.org/papers/"
    }
  },
  {
    "id": 45,
    "name": "Yambo",
    "area": "dft-solidos",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Código de ondas planas para estados excitados de sólidos em many-body perturbation theory (GW, BSE) e TDDFT.",
    "tags": [
      "GW",
      "BSE",
      "Éxcitons",
      "MBPT",
      "TDDFT",
      "Elétron-Fônon"
    ],
    "license": "Código aberto sob GNU GPL",
    "website": "https://www.yambo-code.eu/",
    "arquivo": "softwares/software-45-yambo.html",
    "recursos": [
      "Aproximação GW para a autoenergia",
      "Equação de Bethe-Salpeter para éxcitons",
      "ALDA/TDDFT e dinâmica em tempo real",
      "Screening plasmon-pole, multipolo e full-frequency",
      "Correções elétron-fônicas",
      "Óptica não linear com Berry phase",
      "YAMBOPY e plugins AiiDA"
    ],
    "plataformas": [],
    "links": {
      "site": "https://www.yambo-code.eu/",
      "download": "https://www.yambo-code.eu/download/",
      "documentacao": "https://yambo-code.github.io/yambo-wiki/",
      "tutorial": "https://www.yambo-code.eu/learn/#learn-tutorials",
      "suporte": "https://www.yambo-code.eu/forum/",
      "codigo": "https://github.com/yambo-code",
      "publicacao": "https://doi.org/10.1002/wcms.1634"
    }
  },
  {
    "id": 46,
    "name": "ASE",
    "area": "dft-solidos",
    "applicability": [
      "python",
      "cli"
    ],
    "price": "free",
    "description": "Ambiente Python para configurar, executar, visualizar e analisar simulações atomísticas com múltiplos calculadores.",
    "tags": [
      "Python",
      "DFT",
      "Potenciais Interatômicos",
      "NEB",
      "Fônons"
    ],
    "license": "GNU LGPL v2.1 ou posterior",
    "website": "https://ase-lib.org/",
    "arquivo": "softwares/software-46-ase.html",
    "recursos": [
      "Objeto Atoms para construir e manipular sistemas",
      "Interface com dezenas de calculadoras externas",
      "Cadeias de NEB, bandas e fônons",
      "Otimizadores e dinâmica molecular",
      "Visualização e leitura/escrita de trajetórias",
      "Catálogo de estruturas e bibliotecas de potenciais"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://ase-lib.org/",
      "download": null,
      "documentacao": "https://docs.ase-lib.org/",
      "tutorial": "https://docs.ase-lib.org/",
      "suporte": null,
      "codigo": "https://gitlab.com/ase/ase",
      "publicacao": "https://doi.org/10.1088/1361-648X/aa680e"
    }
  },
  {
    "id": 47,
    "name": "pymatgen",
    "area": "dft-solidos",
    "applicability": [
      "python",
      "cli"
    ],
    "price": "free",
    "description": "Biblioteca Python para análise de materiais: estruturas cristalinas, diagramas de fase, defects e interface com o Materials Project.",
    "tags": [
      "Python",
      "Cristais",
      "Phase Diagram",
      "VASP",
      "Materials Project"
    ],
    "license": "MIT",
    "website": "https://pymatgen.org/",
    "arquivo": "softwares/software-47-pymatgen.html",
    "recursos": [
      "Classes Element, Site, Molecule e Structure",
      "Importação/exportação de VASP, ABINIT, CIF, XYZ",
      "Diagramas de fase, Pourbaix e reações",
      "Análise de DOS e estrutura de bandas",
      "Integração com Materials Project e COD",
      "CLI pmg e complementos custodian/pymatgen-db"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://pymatgen.org/",
      "download": null,
      "documentacao": "https://pymatgen.org/",
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/materialsproject/pymatgen",
      "publicacao": "https://doi.org/10.1016/j.commatsci.2012.10.028"
    }
  },
  {
    "id": 48,
    "name": "HOOMD-blue",
    "area": "dinamica-molecular",
    "applicability": [
      "desktop",
      "hpc",
      "python"
    ],
    "price": "free",
    "description": "Pacote Python de dinâmica molecular e Monte Carlo de partículas rígidas executado em CPU e GPU.",
    "tags": [
      "MD",
      "GPU",
      "Monte Carlo",
      "Matéria Mole",
      "Python"
    ],
    "license": "BSD-3-Clause",
    "website": "https://github.com/glotzerlab/hoomd-blue",
    "arquivo": "softwares/software-48-hoomd-blue.html",
    "recursos": [
      "Monte Carlo de partículas rígidas (HPMC)",
      "Potenciais de par, ligação e ângulo",
      "Execução em CPU e GPU com MPI",
      "Formato de trajetória GSD",
      "Integradores NVT e termostatos",
      "Distribuição via conda-forge, Docker e Singularity"
    ],
    "plataformas": [],
    "links": {
      "site": "https://github.com/glotzerlab/hoomd-blue",
      "download": null,
      "documentacao": "https://hoomd-blue.readthedocs.io/en/stable/",
      "tutorial": null,
      "suporte": "https://github.com/glotzerlab/hoomd-blue/discussions",
      "codigo": "https://github.com/glotzerlab/hoomd-blue",
      "publicacao": "https://hoomd-blue.readthedocs.io/en/stable/citing.html"
    }
  },
  {
    "id": 49,
    "name": "DL_POLY",
    "area": "dinamica-molecular",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "academic",
    "description": "Código Fortran/MPI de dinâmica molecular clássica paralela desenvolvido no Daresbury Laboratory.",
    "tags": [
      "MD",
      "MPI",
      "Fortran",
      "Paralelismo",
      "Sólidos"
    ],
    "license": "Gratuito para uso acadêmico e em pesquisa, distribuído como código-fonte pelo STFC Daresbury Laboratory mediante cadastro",
    "website": "https://dl-sdg.github.io/",
    "arquivo": "softwares/software-49-dl-poly.html",
    "recursos": [
      "Dinâmica molecular clássica Fortran90 + MPI2",
      "Otimização por gradiente conjugado",
      "Propriedades termodinâmicas em execução",
      "Paralelismo por decomposição de domínios",
      "Exercícios e tutoriais oficiais"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://dl-sdg.github.io/",
      "download": null,
      "documentacao": "https://dl-sdg.github.io/RESOURCES/dl_poly_intro.html",
      "tutorial": "https://dl-sdg.github.io/RESOURCES/EXERCISES/exercises_dlpoly.html",
      "suporte": null,
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 50,
    "name": "CHARMM",
    "area": "dinamica-molecular",
    "applicability": [
      "cli",
      "hpc",
      "desktop"
    ],
    "price": "academic",
    "description": "Programa de simulação molecular para sistemas de muitas partículas, com foco em biomoléculas e métodos multinível.",
    "tags": [
      "MD",
      "QM/MM",
      "Amostragem Aprimorada",
      "Proteínas",
      "GPU"
    ],
    "license": "Versão acadêmica gratuita para instituições de ensino, governo e sem fins lucrativos; uso comercial pela versão CHARMm licenciada",
    "website": "https://academiccharmm.org/",
    "arquivo": "softwares/software-50-charmm.html",
    "recursos": [
      "Funções de energia abrangentes com campos de força CHARMM",
      "Amostragem aprimorada (REMD e afins)",
      "QM/MM, MM/CG e solvente implícito",
      "Ferramentas de construção de modelos e análise",
      "pyCHARMM em Python",
      "Paralelismo MPI/OpenMP e GPU"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://academiccharmm.org/",
      "download": "https://brooks.chem.lsa.umich.edu/register/",
      "documentacao": "https://academiccharmm.org/documentation",
      "tutorial": null,
      "suporte": "https://forums-academiccharmm.org/",
      "codigo": null,
      "publicacao": "https://doi.org/10.1021/acs.jpcb.4c04100"
    }
  },
  {
    "id": 51,
    "name": "Tinker",
    "area": "dinamica-molecular",
    "applicability": [
      "cli",
      "hpc",
      "desktop"
    ],
    "price": "academic",
    "description": "Pacote de mecânica molecular e dinâmica com múltiplos campos de força, incluindo os polarizáveis AMOEBA e HIPPO.",
    "tags": [
      "Campos de Força",
      "AMOEBA",
      "Polarizável",
      "Proteínas",
      "Fortran"
    ],
    "license": "Gratuito para grupos acadêmicos de pesquisa, laboratórios governamentais e organizações sem fins lucrativos; uso comercial exige licença",
    "website": "https://dasher.wustl.edu/tinker/",
    "arquivo": "softwares/software-51-tinker.html",
    "recursos": [
      "Campos polarizáveis AMOEBA, AMOEBA+ e HIPPO",
      "Eletrostática de multipolos e GB/SA",
      "Otimização TNCG e dinâmica RESPA com PME",
      "Paralelização OpenMP e versão Tinker-GPU",
      "Conjuntos de parâmetros e guia do usuário publicados"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://dasher.wustl.edu/tinker/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/TinkerTools",
      "publicacao": null
    }
  },
  {
    "id": 52,
    "name": "MDAnalysis",
    "area": "dinamica-molecular",
    "applicability": [
      "python"
    ],
    "price": "free",
    "description": "Biblioteca Python para analisar trajetórias de simulações de dinâmica molecular em vários formatos.",
    "tags": [
      "Análise de Trajetórias",
      "Python",
      "NumPy",
      "Seleção de Átomos"
    ],
    "license": "GNU LGPL v3 ou posterior (alguns componentes LGPL v2.1+)",
    "website": "https://www.mdanalysis.org/",
    "arquivo": "softwares/software-52-mdanalysis.html",
    "recursos": [
      "Leitura e escrita de múltiplos formatos de trajetória",
      "Coordenadas como arrays NumPy",
      "Linguagem de seleção de átomos",
      "Transformações e ajuste a referência",
      "Extensões via MDAKits"
    ],
    "plataformas": [],
    "links": {
      "site": "https://www.mdanalysis.org/",
      "download": null,
      "documentacao": "https://www.mdanalysis.org/documentation/",
      "tutorial": "https://www.mdanalysis.org/learning_MDAnalysis/",
      "suporte": "https://github.com/MDAnalysis/mdanalysis",
      "codigo": "https://github.com/MDAnalysis/mdanalysis",
      "publicacao": "https://www.mdanalysis.org/citations/"
    }
  },
  {
    "id": 53,
    "name": "MDTraj",
    "area": "dinamica-molecular",
    "applicability": [
      "python",
      "cli"
    ],
    "price": "free",
    "description": "Ferramentas Python para ler, escrever e analisar trajetórias de dinâmica molecular.",
    "tags": [
      "Análise de Trajetórias",
      "Python",
      "RMSD",
      "Estrutura Secundária"
    ],
    "license": "GNU LGPL v2.1 ou posterior",
    "website": "https://github.com/mdtraj/mdtraj",
    "arquivo": "softwares/software-53-mdtraj.html",
    "recursos": [
      "Suporte amplo a formatos de trajetória",
      "RMSD acelerado",
      "Ligações, ângulos e diedros",
      "Detectores de ligação de hidrogênio e estrutura secundária",
      "Comando mdconvert"
    ],
    "plataformas": [],
    "links": {
      "site": "https://github.com/mdtraj/mdtraj",
      "download": "https://pypi.org/project/mdtraj/",
      "documentacao": "https://mdtraj.readthedocs.io/en/latest/",
      "tutorial": "https://mdtraj.readthedocs.io/en/latest/notebook-examples/index.html",
      "suporte": "https://github.com/mdtraj/mdtraj/discussions",
      "codigo": "https://github.com/mdtraj/mdtraj",
      "publicacao": "https://doi.org/10.1016/j.bpj.2015.08.015"
    }
  },
  {
    "id": 54,
    "name": "Packmol",
    "area": "dinamica-molecular",
    "applicability": [
      "cli",
      "python"
    ],
    "price": "free",
    "description": "Programa que gera configurações iniciais para dinâmica molecular empacotando moléculas em regiões do espaço.",
    "tags": [
      "Configuração Inicial",
      "Empacotamento",
      "Bicada Lipídica",
      "Preparação"
    ],
    "license": "MIT",
    "website": "https://m3g.github.io/packmol/",
    "arquivo": "softwares/software-54-packmol.html",
    "recursos": [
      "Restrições espaciais por molécula ou átomo",
      "Eliminação de sobreposições repulsivas",
      "Montagem de lamelas, esferas e tubos",
      "Entradas PDB, TINKER e XYZ",
      "Instalação via pip, conda, fpm ou código-fonte"
    ],
    "plataformas": [],
    "links": {
      "site": "https://m3g.github.io/packmol/",
      "download": "https://github.com/m3g/packmol/releases",
      "documentacao": "https://m3g.github.io/packmol/",
      "tutorial": "https://m3g.github.io/packmol/userguide.shtml",
      "suporte": null,
      "codigo": "https://github.com/m3g/packmol",
      "publicacao": "https://m3g.github.io/packmol/citation.shtml"
    }
  },
  {
    "id": 55,
    "name": "ACPYPE",
    "area": "dinamica-molecular",
    "applicability": [
      "python",
      "cli"
    ],
    "price": "free",
    "description": "Interface Python do Antechamber para gerar topologias de ligantes e convertê-las entre pacotes de MD.",
    "tags": [
      "Antechamber",
      "GAFF",
      "Topologia",
      "Conversão de Formato",
      "Parametrização"
    ],
    "license": "GNU GPL v3",
    "website": "https://github.com/alanwilter/acpype",
    "arquivo": "softwares/software-55-acpype.html",
    "recursos": [
      "Fluxo único com antechamber, parmchk2 e tleap",
      "Saídas GROMACS, CNS/XPLOR, CHARMM e AMBER",
      "amb2gmx sem AmberTools",
      "Métodos de carga bcc, abcg2, gas e user",
      "Instalação via conda-forge, pip e Docker"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://github.com/alanwilter/acpype",
      "download": "https://github.com/alanwilter/acpype",
      "documentacao": "https://acpype.readthedocs.io/",
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/alanwilter/acpype",
      "publicacao": "https://doi.org/10.1186/1756-0500-5-367"
    }
  },
  {
    "id": 56,
    "name": "HADDOCK3",
    "area": "docking",
    "applicability": [
      "python",
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Suíte modular de modelagem integrativa de complexos biomoleculares guiada por restrições ambíguas de interação.",
    "tags": [
      "Docking",
      "Modelagem Integrativa",
      "Complexos Proteicos",
      "Restrições Experimentais"
    ],
    "license": "Apache-2.0",
    "website": "https://www.bonvinlab.org/software/haddock3/",
    "arquivo": "softwares/software-56-haddock3.html",
    "recursos": [
      "Restrições ambíguas de interação (AIRs)",
      "Workflows modulares em TOML",
      "Docking proteína-proteína, proteína-peptídeo e proteína-ácido nucleico",
      "Integração de dados experimentais e predições",
      "Manual do usuário com cenários de docking",
      "Servidor web HADDOCK 2.4 para produção"
    ],
    "plataformas": [],
    "links": {
      "site": "https://www.bonvinlab.org/software/haddock3/",
      "download": "https://pypi.org/project/haddock3/",
      "documentacao": "https://www.bonvinlab.org/haddock3",
      "tutorial": "https://www.bonvinlab.org/haddock3-user-manual/",
      "suporte": "https://ask.bioexcel.eu/",
      "codigo": "https://github.com/haddocking/haddock3",
      "publicacao": "https://doi.org/10.1021/acs.jcim.5c00969"
    }
  },
  {
    "id": 57,
    "name": "GOLD",
    "area": "docking",
    "applicability": [
      "desktop",
      "hpc"
    ],
    "price": "paid",
    "description": "Programa de docking proteína-ligante da CCDC baseado em algoritmo genético.",
    "tags": [
      "Docking",
      "Algoritmo Genético",
      "Scoring",
      "Triagem Virtual",
      "CCDC"
    ],
    "license": "Comercial, incluído nas licenças CSD-Discovery e CSD-Enterprise; licenças acadêmicas pagas com desconto",
    "website": "https://www.ccdc.cam.ac.uk/solutions/software/gold/",
    "arquivo": "softwares/software-57-gold.html",
    "recursos": [
      "Funções ChemPLP, ChemScore, GoldScore e ASP",
      "Docking covalente",
      "Docking de ensemble",
      "Flexibilidade de cadeias laterais",
      "Triagem virtual em ambiente HPC",
      "API Python e componente KNIME"
    ],
    "plataformas": [],
    "links": {
      "site": "https://www.ccdc.cam.ac.uk/solutions/software/gold/",
      "download": "https://www.ccdc.cam.ac.uk/support-and-resources/csdsdownloads/",
      "documentacao": null,
      "tutorial": null,
      "suporte": "https://support.ccdc.cam.ac.uk/support/home",
      "codigo": null,
      "publicacao": "https://doi.org/10.1002/prot.10465"
    }
  },
  {
    "id": 58,
    "name": "rDock",
    "area": "docking",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Plataforma open source de docking rápida para triagem virtual de alto rendimento.",
    "tags": [
      "Docking",
      "HTVS",
      "Open Source",
      "Ácidos Nucleicos"
    ],
    "license": "GNU LGPL v3",
    "website": "https://rdock.github.io/",
    "arquivo": "softwares/software-58-rdock.html",
    "recursos": [
      "Docking de proteínas e ácidos nucleicos",
      "Otimização para HTVS",
      "Preparação e pós-processamento incluídos",
      "Execução em cluster com escalonamento linear",
      "Scripts em Perl e Python"
    ],
    "plataformas": [
      "Linux"
    ],
    "links": {
      "site": "https://rdock.github.io/",
      "download": "https://github.com/CBDD/rDock",
      "documentacao": "https://rdock.github.io/documentation/",
      "tutorial": "https://rdock.github.io/getting-started/",
      "suporte": null,
      "codigo": "https://github.com/CBDD/rDock",
      "publicacao": null
    }
  },
  {
    "id": 59,
    "name": "AutoDock-GPU",
    "area": "docking",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Versão do AutoDock4 otimizada para GPUs, voltada a triagem virtual de alto rendimento.",
    "tags": [
      "GPU",
      "AutoDock4",
      "CUDA",
      "HIP",
      "Triagem virtual"
    ],
    "license": "GPL-2.0",
    "website": "https://autodock.scripps.edu/",
    "arquivo": "softwares/software-59-autodock-gpu.html",
    "recursos": [
      "Docking AutoDock4 acelerado em GPU",
      "Busca local por gradiente (L-GAPA e AD4-SO)",
      "Suporte a CUDA e a HIP/ROCm",
      "Modo de triagem em lote para grandes bibliotecas",
      "Compatível com grades de potencial .map.grd"
    ],
    "plataformas": [
      "Linux",
      "macOS"
    ],
    "links": {
      "site": "https://autodock.scripps.edu/",
      "download": "https://github.com/forlilab/AutoDock-GPU/releases",
      "documentacao": "https://github.com/ccsb-scripps/AutoDock-GPU/wiki/Guideline-for-users",
      "tutorial": "https://github.com/ccsb-scripps/AutoDock-GPU/wiki/Guideline-for-users",
      "suporte": "https://github.com/ccsb-scripps/AutoDock-GPU/issues",
      "codigo": "https://github.com/forlilab/AutoDock-GPU",
      "publicacao": "https://doi.org/10.1021/acs.jctc.0c01006"
    }
  },
  {
    "id": 60,
    "name": "Smina",
    "area": "docking",
    "applicability": [
      "cli"
    ],
    "price": "free",
    "description": "Fork do AutoDock Vina com função de pontuação ampliada e opções extras de docking.",
    "tags": [
      "Vina",
      "Docking",
      "CLI",
      "Força de campo CHARMM",
      "Open Source"
    ],
    "license": "GPLv2",
    "website": "https://sourceforge.net/projects/smina/",
    "arquivo": "softwares/software-60-smina.html",
    "recursos": [
      "Interface compatível com o AutoDock Vina",
      "Função de pontuação estendida",
      "Energias de força de campo Amber e CHARMM",
      "Modo somente de pontuação (--score)",
      "Receptor flexível"
    ],
    "plataformas": [],
    "links": {
      "site": "https://sourceforge.net/projects/smina/",
      "download": "https://sourceforge.net/projects/smina/files/",
      "documentacao": null,
      "tutorial": null,
      "suporte": "https://sourceforge.net/p/smina/tickets/",
      "codigo": "https://sourceforge.net/p/smina/code/",
      "publicacao": null
    }
  },
  {
    "id": 61,
    "name": "GNINA",
    "area": "docking",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Suíte de docking com pontuação por redes neurais convolucionais, compatível com o Vina.",
    "tags": [
      "Deep Learning",
      "CNN",
      "Docking",
      "CUDA",
      "Open Source"
    ],
    "license": "Apache-2.0 (código) e GPL-2.0 (componentes derivados do AutoDock)",
    "website": "https://github.com/gnina/gnina",
    "arquivo": "softwares/software-61-gnina.html",
    "recursos": [
      "Pontuação por CNN 3D treinada em dados experimentais",
      "Busca e minimização compatíveis com o AutoDock Vina",
      "Aceleração por GPU via CUDA",
      "Geração de poses com modelo de difusão",
      "Saída em SDF/PDB com análise de interações"
    ],
    "plataformas": [],
    "links": {
      "site": "https://github.com/gnina/gnina",
      "download": "https://github.com/gnina/gnina/releases",
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/gnina/gnina",
      "publicacao": "https://doi.org/10.1186/s13321-025-00973-x"
    }
  },
  {
    "id": 62,
    "name": "AlphaFold",
    "area": "bioquimica",
    "applicability": [
      "cli",
      "hpc"
    ],
    "price": "free",
    "description": "Sistema de predição de estrutura proteica por aprendizado profundo desenvolvido pela DeepMind.",
    "tags": [
      "Predição de estrutura",
      "Deep Learning",
      "Proteínas",
      "AlphaFold DB",
      "GPU"
    ],
    "license": "Código sob Apache-2.0; parâmetros do AlphaFold 2 sob CC BY 4.0; AlphaFold 3 sob termos próprios da Google DeepMind; servidor web apenas para uso não comercial",
    "website": "https://deepmind.google/science/alphafold/",
    "arquivo": "softwares/software-62-alphafold.html",
    "recursos": [
      "Predição de estrutura a partir da sequência",
      "AlphaFold 2 com MSA e templates",
      "AlphaFold 3 para complexos, ligantes e íons",
      "Milhões de estruturas pré-computadas no AlphaFold DB",
      "Reimplementação aberta OpenFold"
    ],
    "plataformas": [
      "Linux"
    ],
    "links": {
      "site": "https://deepmind.google/science/alphafold/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/google-deepmind/alphafold",
      "publicacao": "https://doi.org/10.1038/s41586-021-03819-2"
    }
  },
  {
    "id": 63,
    "name": "MODELLER",
    "area": "bioquimica",
    "applicability": [
      "desktop",
      "cli"
    ],
    "price": "academic",
    "description": "Programa clássico de modelagem por homologia por satisfação de restrições espaciais.",
    "tags": [
      "Modelagem por homologia",
      "Restrições espaciais",
      "Loops",
      "Complexos",
      "Python"
    ],
    "license": "Gratuito para uso acadêmico; uso comercial mediante licença",
    "website": "https://salilab.org/modeller/",
    "arquivo": "softwares/software-63-modeller.html",
    "recursos": [
      "Modelagem por homologia a partir de alinhamento sequência-estrutura",
      "Otimização por restrições espaciais",
      "Potenciais estatísticos de avaliação (DOPE)",
      "Modelagem de loops e refinamento local",
      "Construção de complexos e modelos simétricos",
      "Interface em Python para automação"
    ],
    "plataformas": [],
    "links": {
      "site": "https://salilab.org/modeller/",
      "download": "https://salilab.org/modeller/download_installation.html",
      "documentacao": "https://salilab.org/modeller/documentation.html",
      "tutorial": "https://salilab.org/modeller/tutorial/",
      "suporte": null,
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 64,
    "name": "SWISS-MODEL",
    "area": "bioquimica",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Servidor web de modelagem por homologia mantido pelo SIB/Expasy, com banco de moldes.",
    "tags": [
      "Modelagem por homologia",
      "Servidor web",
      "Moldes",
      "SWISS-MODEL Repository"
    ],
    "license": "Gratuito (servidor mantido pelo SIB Swiss Institute of Bioinformatics)",
    "website": "https://swissmodel.expasy.org/",
    "arquivo": "softwares/software-64-swiss-model.html",
    "recursos": [
      "Modelagem por homologia pelo navegador",
      "Busca automática de moldes estruturais",
      "Alinhamento interativo editável",
      "Estimativas de qualidade do modelo",
      "SWISS-MODEL Repository com modelos publicados"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://swissmodel.expasy.org/",
      "download": null,
      "documentacao": "https://swissmodel.expasy.org/docs/help",
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1093/nar/gky427"
    }
  },
  {
    "id": 65,
    "name": "ESMFold",
    "area": "bioquimica",
    "applicability": [
      "python",
      "cli"
    ],
    "price": "free",
    "description": "Predição de estrutura proteica por modelo de linguagem de proteínas (ESM-2), sem alinhamento.",
    "tags": [
      "Modelo de linguagem",
      "Predição de estrutura",
      "Deep Learning",
      "GPU"
    ],
    "license": "MIT (código e pesos abertos)",
    "website": "https://github.com/facebookresearch/esm",
    "arquivo": "softwares/software-65-esmfold.html",
    "recursos": [
      "Predição de estrutura apenas com a sequência",
      "Modelos de linguagem ESM-2 e ESM-1b",
      "ESM Atlas com estruturas de sequências de metagenomas",
      "Inferência acelerada em GPU",
      "Biblioteca Python com pesos abertos"
    ],
    "plataformas": [],
    "links": {
      "site": "https://github.com/facebookresearch/esm",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/facebookresearch/esm",
      "publicacao": "https://doi.org/10.1126/science.ade2574"
    }
  },
  {
    "id": 66,
    "name": "FreeSASA",
    "area": "bioquimica",
    "applicability": [
      "cli",
      "python"
    ],
    "price": "free",
    "description": "Biblioteca em C e utilitário de linha de comando para áreas acessíveis a solvente.",
    "tags": [
      "SASA",
      "Biofísica",
      "C",
      "Python",
      "Trajetórias"
    ],
    "license": "MIT",
    "website": "https://freesasa.github.io/",
    "arquivo": "softwares/software-66-freesasa.html",
    "recursos": [
      "Métodos Lee-Richards e Shrake-Rupley",
      "Cálculo por grade e por pontos de sonda",
      "Uso como linha de comando e como módulo Python",
      "Séries temporais a partir de trajetórias",
      "SASA por resíduo, grupo e cadeia"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://freesasa.github.io/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.12688/f1000research.7931.1"
    }
  },
  {
    "id": 67,
    "name": "PLIP",
    "area": "bioquimica",
    "applicability": [
      "web",
      "cli",
      "python"
    ],
    "price": "free",
    "description": "Detector automático de interações não covalentes em complexos proteína-ligante.",
    "tags": [
      "Interações moleculares",
      "Ponte de hidrogênio",
      "Análise de docking",
      "Python"
    ],
    "license": "GPL-2.0",
    "website": "https://plip-tool.biotec.tu-dresden.de/plip-web/plip/index",
    "arquivo": "softwares/software-67-plip.html",
    "recursos": [
      "Detecção de pontes de hidrogênio e interações hidrofóbicas",
      "Empilhamento aromático e cátion-π/ânion-π",
      "Pontes salinas, água de ponte e contato com metais",
      "Servidor web, pacote Python e linha de comando",
      "Saída estruturada para análise em lote"
    ],
    "plataformas": [],
    "links": {
      "site": "https://plip-tool.biotec.tu-dresden.de/plip-web/plip/index",
      "download": "https://pypi.org/project/plip/",
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/pharmai/plip",
      "publicacao": "https://doi.org/10.1093/nar/gkab294"
    }
  },
  {
    "id": 68,
    "name": "Biopython",
    "area": "bioquimica",
    "applicability": [
      "python"
    ],
    "price": "free",
    "description": "Conjunto de módulos Python para biologia computacional: sequências, estruturas e bancos de dados.",
    "tags": [
      "Python",
      "Genômica",
      "PDB",
      "Alinhamento",
      "Bioinformática"
    ],
    "license": "Biopython License Agreement (livre, compatível com BSD-3 para parte dos módulos)",
    "website": "https://biopython.org/",
    "arquivo": "softwares/software-68-biopython.html",
    "recursos": [
      "Objetos de sequência e alinhamento",
      "Parser de PDB, mmCIF, FASTA e GenBank",
      "Filogenia e árvores",
      "Acesso a UniProt, NCBI e outros bancos",
      "Ferramentas de estrutura para preparação de sistemas"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://biopython.org/",
      "download": null,
      "documentacao": "https://biopython.org/wiki/Documentation",
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/biopython/biopython",
      "publicacao": "https://doi.org/10.1093/bioinformatics/btp163"
    }
  },
  {
    "id": 69,
    "name": "Ketcher",
    "area": "quimioinformatica",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Editor de estruturas químicas em JavaScript para embutir em páginas e aplicações web.",
    "tags": [
      "Editor 2D",
      "SMILES",
      "JavaScript",
      "Web",
      "Open Source"
    ],
    "license": "Apache-2.0",
    "website": "https://lifescience.opensource.epam.com/ketcher/index.html",
    "arquivo": "softwares/software-69-ketcher.html",
    "recursos": [
      "Desenho de estruturas 2D no navegador",
      "Componentes React e Angular embutíveis",
      "Visualização 3D da estrutura desenhada",
      "R-grupos, mer e polímeros",
      "Conversão de formatos de intercâmbio"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://lifescience.opensource.epam.com/ketcher/index.html",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/epam/ketcher",
      "publicacao": null
    }
  },
  {
    "id": 70,
    "name": "DeepChem",
    "area": "quimioinformatica",
    "applicability": [
      "python"
    ],
    "price": "free",
    "description": "Biblioteca Python de aprendizado de máquina para moléculas, materiais e biologia.",
    "tags": [
      "Machine Learning",
      "QSAR",
      "Grafos moleculares",
      "Python",
      "Featurizers"
    ],
    "license": "MIT",
    "website": "https://deepchem.io/",
    "arquivo": "softwares/software-70-deepchem.html",
    "recursos": [
      "Descritores e fingerprints moleculares",
      "Featurizers 2D, 3D e de grafo",
      "Modelos lineares, florestas e redes neurais",
      "Redes de grafo (GCN, MPNN) e transformers",
      "Datasets de referência e scripts de exemplo"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://deepchem.io/",
      "download": null,
      "documentacao": "https://deepchem.readthedocs.io/en/latest/",
      "tutorial": "https://deepchem.github.io/tutorials/",
      "suporte": null,
      "codigo": "https://github.com/deepchem/deepchem",
      "publicacao": null
    }
  },
  {
    "id": 71,
    "name": "CDK (Chemistry Development Kit)",
    "area": "quimioinformatica",
    "applicability": [
      "cli"
    ],
    "price": "free",
    "description": "Biblioteca Java para leitura, manipulação, descrição e desenho de moléculas.",
    "tags": [
      "Java",
      "SMILES",
      "Descritores",
      "Subestrutura",
      "RSS"
    ],
    "license": "LGPL-2.1-or-later",
    "website": "https://cdk.github.io/",
    "arquivo": "softwares/software-71-cdk-chemistry-development-kit.html",
    "recursos": [
      "Leitura e escrita de formatos moleculares",
      "Atribuição de tipos de átomo e aromatividade",
      "Descritores moleculares e fingerprints",
      "Busca por subestrutura com SMARTS",
      "Renderização e layout 2D",
      "Utilitários de linha de comando"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://cdk.github.io/",
      "download": "https://github.com/cdk/cdk/releases",
      "documentacao": "https://cdk.github.io/cdk/latest/docs/api/index.html",
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/cdk/cdk",
      "publicacao": "https://doi.org/10.1186/s13321-017-0220-4"
    }
  },
  {
    "id": 72,
    "name": "Jmol / JSmol",
    "area": "visualizacao",
    "applicability": [
      "desktop",
      "web"
    ],
    "price": "free",
    "description": "Visualizador molecular de código aberto, em Java (Jmol) e em JavaScript (JSmol).",
    "tags": [
      "Visualização",
      "Java",
      "JavaScript",
      "Embedding",
      "PDB"
    ],
    "license": "LGPL",
    "website": "https://jmol.sourceforge.net/",
    "arquivo": "softwares/software-72-jmol-jsmol.html",
    "recursos": [
      "Modos de exibição 3D para moléculas e proteínas",
      "Superfícies de van der Waals, solvente e potencial eletrostático",
      "Linguagem de script para animação e automação",
      "JSmol em HTML5 para embutir na web",
      "Leitura de PDB, CIF, mol e muitos outros formatos"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://jmol.sourceforge.net/",
      "download": "https://sourceforge.net/projects/jmol/files/",
      "documentacao": "https://chemapps.stolaf.edu/jmol/docs/",
      "tutorial": null,
      "suporte": "https://wiki.jmol.org/",
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 73,
    "name": "3Dmol.js",
    "area": "visualizacao",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Biblioteca JavaScript de visualização molecular acelerada por WebGL, para páginas web.",
    "tags": [
      "WebGL",
      "JavaScript",
      "Visualização",
      "Embedding",
      "Trajetórias"
    ],
    "license": "BSD-3-Clause",
    "website": "https://3dmol.csb.pitt.edu/",
    "arquivo": "softwares/software-73-3dmol-js.html",
    "recursos": [
      "Renderização WebGL sem plug-ins",
      "Estilos, cores por cadeia/resíduo e superfícies",
      "Suporte a trajetórias e animação",
      "API JavaScript com seleções e eventos",
      "Documentação com exemplos embutíveis"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://3dmol.csb.pitt.edu/",
      "download": null,
      "documentacao": "https://3dmol.csb.pitt.edu/doc/",
      "tutorial": "https://3dmol.csb.pitt.edu/doc/tutorial-embeddable.html",
      "suporte": null,
      "codigo": "https://github.com/3dmol/3Dmol.js",
      "publicacao": null
    }
  },
  {
    "id": 74,
    "name": "NGLview",
    "area": "visualizacao",
    "applicability": [
      "web",
      "python"
    ],
    "price": "free",
    "description": "Widget interativo de visualização molecular para notebooks Jupyter, baseado na engine NGL.",
    "tags": [
      "Jupyter",
      "Widget",
      "WebGL",
      "Python",
      "Visualização"
    ],
    "license": "MIT",
    "website": "https://github.com/nglviewer/nglview",
    "arquivo": "softwares/software-74-nglview.html",
    "recursos": [
      "Widget de visualização para Jupyter e JupyterLab",
      "Carregamento de trajetórias de dinâmica molecular",
      "Representações, estilos e seleções interativas",
      "Integração com Biopython e ferramentas de análise",
      "Instalação por pip e conda"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://github.com/nglviewer/nglview",
      "download": "https://pypi.org/project/nglview/",
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": "https://github.com/nglviewer/nglview",
      "publicacao": null
    }
  },
  {
    "id": 75,
    "name": "OVITO",
    "area": "visualizacao",
    "applicability": [
      "desktop",
      "python"
    ],
    "price": "freemium",
    "description": "Programa de visualização e análise de dados de simulações atomísticas.",
    "tags": [
      "Dinâmica Molecular",
      "Análise",
      "OpenGL",
      "Python",
      "Renderização"
    ],
    "license": "OVITO Basic gratuito; OVITO Pro comercial (licença por assinatura)",
    "website": "https://www.ovito.org/",
    "arquivo": "softwares/software-75-ovito.html",
    "recursos": [
      "Modificadores de análise e pipeline de dados",
      "Identificação de estrutura local e defeitos",
      "Seleção e coloração por propriedade atômica",
      "Animação e render de alta qualidade",
      "API Python e versão sem interface gráfica"
    ],
    "plataformas": [
      "Linux",
      "macOS",
      "Windows"
    ],
    "links": {
      "site": "https://www.ovito.org/",
      "download": "https://www.ovito.org/download/",
      "documentacao": "https://www.ovito.org/docs/current/",
      "tutorial": null,
      "suporte": "https://matsci.org/c/ovito/",
      "codigo": null,
      "publicacao": "https://doi.org/10.1088/0965-0393/18/1/015012"
    }
  },
  {
    "id": 76,
    "name": "PubChem",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Repositório público do NIH com compostos, substâncias, bioensaios e propriedades calculadas.",
    "tags": [
      "Banco de dados",
      "Bioensayo",
      "SMILES",
      "API",
      "NCBI"
    ],
    "license": "Conteúdo do domínio público (governo dos EUA); uso sujeito às políticas do NCBI",
    "website": "https://pubchem.ncbi.nlm.nih.gov/",
    "arquivo": "softwares/software-76-pubchem.html",
    "recursos": [
      "Compostos (CID) e substâncias (SID) com propriedades",
      "Registros de bioensaios com dados dose-resposta",
      "APIs PUG REST e PUG View",
      "Download em massa de arquivos SDF/CSV",
      "Fusão de dados de literatura e patentes"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://pubchem.ncbi.nlm.nih.gov/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1093/nar/gkae1059"
    }
  },
  {
    "id": 77,
    "name": "ChEMBL",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Banco curado de atividades bioquímicas de fármacos e moléculas bioativas, mantido pelo EMBL-EBI.",
    "tags": [
      "Banco de dados",
      "SAR",
      "Atividade",
      "Alvos",
      "QSAR"
    ],
    "license": "CC BY-SA 3.0",
    "website": "https://www.ebi.ac.uk/chembl/",
    "arquivo": "softwares/software-77-chembl.html",
    "recursos": [
      "Medidas de atividade curadas ligadas a alvos",
      "Busca por estrutura, similaridade e alvo",
      "API REST e ferramentas web",
      "Downloads completos em SDF/CSV por versão",
      "Dados de ADMET e ensaios funcionais"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://www.ebi.ac.uk/chembl/",
      "download": null,
      "documentacao": "https://chembl.gitbook.io/chembl-interface-documentation/frequently-asked-questions/general-questions",
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1093/nar/gkad1004"
    }
  },
  {
    "id": 78,
    "name": "ZINC20",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Biblioteca ultragrande de compostos prontos para docking e triagem virtual.",
    "tags": [
      "Banco de dados",
      "Docking",
      "Triagem virtual",
      "Compra",
      "3D"
    ],
    "license": "Gratuito para acesso e uso",
    "website": "https://zinc20.docking.org/",
    "arquivo": "softwares/software-78-zinc20.html",
    "recursos": [
      "Bibliotecas de compostos disponíveis para compra",
      "Conformeros 3D preparados para docking",
      "Busca por subestrutura e similaridade",
      "Filtros de propriedade e de reagrupamento",
      "Download em lote por transação de compra"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://zinc20.docking.org/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1021/acs.jcim.0c00675"
    }
  },
  {
    "id": 79,
    "name": "RCSB Protein Data Bank",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Repositório internacional de estruturas 3D de biomoléculas determinadas experimentalmente.",
    "tags": [
      "Banco de dados",
      "PDB",
      "Cristalografia",
      "RMN",
      "Criomicroscopia"
    ],
    "license": "Dados em domínio público/CC0; software sob licenças abertas (MIT/Apache-2.0)",
    "website": "https://www.rcsb.org/",
    "arquivo": "softwares/software-79-rcsb-protein-data-bank.html",
    "recursos": [
      "Busca por sequência, estrutura, ligante e metadados",
      "Arquivos em mmCIF, PDB e formatos derivados",
      "Anotação de sítios, ligações e domínios",
      "Ferramentas de superposição e comparação",
      "PDB-101 com material de ensino"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://www.rcsb.org/",
      "download": null,
      "documentacao": "https://www.rcsb.org/pages/policies",
      "tutorial": "https://pdb101.rcsb.org/",
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1093/nar/28.1.235"
    }
  },
  {
    "id": 80,
    "name": "Materials Project",
    "area": "bases-dados",
    "applicability": [
      "web",
      "python"
    ],
    "price": "free",
    "description": "Banco aberto de propriedades de materiais calculadas por DFT, com API em Python.",
    "tags": [
      "Banco de dados",
      "DFT",
      "Materiais",
      "API",
      "pymatgen"
    ],
    "license": "CC BY 4.0 (dados)",
    "website": "https://materialsproject.org/",
    "arquivo": "softwares/software-80-materials-project.html",
    "recursos": [
      "Propriedades estruturais e eletrônicas por DFT",
      "Estabilidade termodinâmica e convex hull",
      "Propriedades elásticas, dielétricas e de superfície",
      "API e pacote Python mp-api",
      "Integração com pymatgen para análise"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://materialsproject.org/",
      "download": null,
      "documentacao": "https://docs.materialsproject.org/frequently-asked-questions",
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1063/1.4812323"
    }
  },
  {
    "id": 81,
    "name": "NOMAD",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Repositório FAIR de dados de simulações em ciência dos materiais e química.",
    "tags": [
      "Banco de dados",
      "FAIR",
      "DFT",
      "Metadados",
      "Parse"
    ],
    "license": "Plataforma open source; dados sob a licença escolhida pelo autor",
    "website": "https://nomad-lab.eu/",
    "arquivo": "softwares/software-81-nomad.html",
    "recursos": [
      "Parse automático de arquivos de saída de muitos códigos",
      "Metadados padronizados e buscáveis",
      "Publicação com DOI e licenças do autor",
      "API e ferramentas de análise online",
      "Filtros por método, funcional e material"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://nomad-lab.eu/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.21105/joss.05388"
    }
  },
  {
    "id": 82,
    "name": "Crystallography Open Database",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Coletivo aberto de estruturas cristalográficas moleculares e inorgânicas em domínio público.",
    "tags": [
      "Banco de dados",
      "Cristalografia",
      "CIF",
      "Domínio público",
      "Pó"
    ],
    "license": "CC0 (domínio público)",
    "website": "https://www.crystallography.net/cod/",
    "arquivo": "softwares/software-82-crystallography-open-database.html",
    "recursos": [
      "Arquivos CIF completos e reutilizáveis",
      "Busca por fórmula, célula e subestrutura",
      "Download do conjunto inteiro",
      "Dados derivados de difração de raios X e nêutrons",
      "Licença CC0, sem restrição de reuso"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://www.crystallography.net/cod/",
      "download": "https://wiki.crystallography.net/howtoobtaincod/",
      "documentacao": "https://wiki.crystallography.net/howtoquerycod/",
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1093/nar/gkr900"
    }
  },
  {
    "id": 83,
    "name": "Cambridge Structural Database",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "academic",
    "description": "Base paga da CCDC com estruturas de moléculas orgânicas e organometálicas, e software de análise.",
    "tags": [
      "Banco de dados",
      "Cristalografia",
      "CCDC",
      "Conformação",
      "Análise de empirismo"
    ],
    "license": "Comercial; licenças institucionais e acadêmicas pela CCDC",
    "website": "https://www.ccdc.cam.ac.uk/",
    "arquivo": "softwares/software-83-cambridge-structural-database.html",
    "recursos": [
      "Estruturas curadas de moléculas orgânicas e organometálicas",
      "Busca por subestrutura e por padrão de ligação de hidrogênio",
      "Análise conformacional e de empacotamento",
      "Dados de referência para parametrização e validação",
      "Pacote de software associado à consulta"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://www.ccdc.cam.ac.uk/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": null
    }
  },
  {
    "id": 84,
    "name": "BindingDB",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "free",
    "description": "Base de dados de afinidades de ligação proteína-ligante medida experimentalmente.",
    "tags": [
      "Banco de dados",
      "Ki",
      "IC50",
      "SAR",
      "Docking"
    ],
    "license": "CC BY 3.0 (registros derivados de outras fontes seguem a licença original, como CC BY-SA do ChEMBL)",
    "website": "https://www.bindingdb.org/",
    "arquivo": "softwares/software-84-bindingdb.html",
    "recursos": [
      "Medidas de afinidade Ki, IC50 e Kd anotadas",
      "Busca por composto, alvo e faixa de atividade",
      "Download de subconjuntos em planilha",
      "Referência para calibração de pontuação de docking",
      "Curadoria a partir de literatura e depósitos"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://www.bindingdb.org/",
      "download": null,
      "documentacao": "https://www.bindingdb.org/rwd/bind/info.jsp",
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": "https://doi.org/10.1093/nar/gkae1075"
    }
  },
  {
    "id": 85,
    "name": "DrugBank",
    "area": "bases-dados",
    "applicability": [
      "web"
    ],
    "price": "academic",
    "description": "Recurso integrado de fármacos, seus alvos e dados químicos e farmacológicos.",
    "tags": [
      "Banco de dados",
      "Fármacos",
      "Alvos",
      "Farmacologia",
      "Interações"
    ],
    "license": "Gratuito para uso acadêmico; licença comercial para redistribuição e uso empresarial",
    "website": "https://go.drugbank.com/",
    "arquivo": "softwares/software-85-drugbank.html",
    "recursos": [
      "Fichas de fármacos aprovados e experimentais",
      "Anotação de alvos, enzimas e transportadores",
      "Dados de interações e farmacocinética",
      "Estruturas químicas e identificadores normalizados",
      "Busca integrada e conteúdo para mineração"
    ],
    "plataformas": [
      "Web"
    ],
    "links": {
      "site": "https://go.drugbank.com/",
      "download": null,
      "documentacao": null,
      "tutorial": null,
      "suporte": null,
      "codigo": null,
      "publicacao": null
    }
  }
];
