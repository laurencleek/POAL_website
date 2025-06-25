import Image from "next/image"
import Link from "next/link"

export default function PeoplePage() {
  const directors = [
    {
      id: 1,
      name: "Prof Will Jennings",
      title: "Co-director",
      image: "/bio_will.jpg?height=300&width=300&text=WJ",
      personal_website: "https://www.linkedin.com/today/author/will-jennings-91b01224",
      institutional_website: "https://www.southampton.ac.uk/people/5x8zrf/professor-will-jennings",
      role: "Overseeing the impact and public engagement theme",
      focus: "Public Policy, Public Opinion, Polling",
    },
    {
      id: 2,
      name: "Prof Sara Hobolt",
      title: "Co-director",
      image: "/bio_hobolt.jpg?height=300&width=300&text=SH",
      personal_website: "https://hobolt.com/",
      institutional_website: "https://www.lse.ac.uk/government/people/academic-staff/sara-hobolt",
      role: "Overseeing the research excellence theme",
      focus: "Elections, Referendums, Public Opinion, European Union Politics",
    },
    {
      id: 3,
      name: "Dr Miriam Sorace",
      title: "Co-director",
      image: "/bio_miriam.jpg?height=300&width=300&text=MS",
      personal_website: "https://miriamsorace.github.io/",
      institutional_website: "https://www.reading.ac.uk/politics-international-relations/staff/miriam-sorace",
      role: "Overseeing the innovation and training theme",
      focus: "Electoral Behaviour, Public Opinion; Political Campaigns; European Politics",
  
    },
  ]

  const leadership = [
    {
      id: 10,
      name: "Dr Katharina Lawall",
      title: "Academic Events Unit Lead",
      image: "/bio_katharina.png?height=200&width=200&text=KL",
      personal_website: "https://katharinalawall.com/",
      institutional_website: "https://www.reading.ac.uk/politics-international-relations/staff/dr-katharina-lawall",
      focus: "Political Behaviour, Gender and Politics, Polarization, Emotions, Radical Right, Experiments"
     
    },
    {
      id: 6,
      name: "Prof Jason Reifler",
      title: "Grant Unit Lead",
      image: "/bio_jason.jpg?height=200&width=200&text=JR",
      personal_website: "https://jasonreifler.com/",
      institutional_website: "https://www.southampton.ac.uk/people/65dh7n/professor-jason-reifler",
      focus: "Public Opinion, Political Behavior, and Misinformation"
    },
    {
      id: 18,
      name: "Dr Daniel Devine",
      title: "Executive/Academic Programmes Unit Lead",
      image: "/bio_daniel.jpg?height=200&width=200&text=DD",
      personal_website: "https://djdevine.org/",
      institutional_website: "https://www.southampton.ac.uk/people/65grkh/doctor-daniel-devine",
      focus: "Public Opinion, Voting Behaviour, Political Psychology"
    },
    {
      id: 9,
      name: "Prof Robert Johns",
      title: "Media Unit Lead",
      image: "/bio_robert.jpg?height=200&width=200&text=RJ",
      personal_website: "https://www.southampton.ac.uk/people/65brpg/professor-robert-johns",
      institutional_website: "https://www.southampton.ac.uk/people/65brpg/professor-robert-johns",
      focus: "Public Opinion, British and especially Scottish elections, Political Psychology"
     
    },
    {
      id: 22,
      name: "Dr Marta Antonetti",
      title: "Consultancy/contracts Unit Lead",
      image: "/bio_anton.jpeg?height=200&width=200&text=MA",
      personal_website: "https://www.martaantonetti.com",
      institutional_website: "https://www.lse.ac.uk/government/people",
      focus: "Democratic Values, Political Participation, Political leaders and Campaigns, Experimental Methods, Survey Designs ",

    },
  ]

  const members = [
    {
      id: 4,
      name: "Prof Gabi Durrant",
      image: "/bio_gabi.jpg?height=200&width=200&text=GD",
      personal_website: "https://www.southampton.ac.uk/people/5x25ff/professor-gabriele-durrant",
      institutional_website: "https://www.southampton.ac.uk/people/5x25ff/professor-gabriele-durrant",
      focus: "Survey Data Collection, Survey Methodology, Statistical Modelling"
    },
    {
      id: 5,
      name: "Prof Kenneth Benoit",
      image: "/bio_ken.jpg?height=200&width=200&text=KB",
      personal_website: "https://kenbenoit.net/",
      institutional_website: "https://socsc.smu.edu.sg/faculty/profile/7891/kenneth-benoit",
      focus: "Computational social science, text analysis, social media, LLMs"
     
    },
    {
      id: 7,
      name: "Prof Patrick Sturgis",
      image: "/bio_patrick.png?height=200&width=200&text=PS",
      personal_website: "https://www.lse.ac.uk/Methodology/People/Academic-Staff/Patrick-Sturgis/Patrick-Sturgis",
      institutional_website: "https://www.lse.ac.uk/Methodology/People/Academic-Staff/Patrick-Sturgis/Patrick-Sturgis",
      focus: "Survey and Statistical Methods, Understanding Social and Political Behaviour"
    },
    {
      id: 8,
      name: "Prof Tereza Capelos",
      image: "/bio_tereza.jpg?height=200&width=200&text=TC",
      personal_website: "https://www.southampton.ac.uk/people/656nwf/professor-tereza-capelos",
      institutional_website: "https://www.southampton.ac.uk/people/656nwf/professor-tereza-capelos",
      focus: "Grievance Politics, Resentful Emotionality, Reactionary Orientations, Anti-democratic and Authoritarian Political Preferences"
,
    },
    {
      id: 11,
      name: "Dr Victor Araujo Silva",
      image: "/bio_victor.jpg?height=200&width=200&text=VA",
      personal_website: "https://sites.google.com/view/victoraraujo/about-me",
      institutional_website: "https://www.reading.ac.uk/politics-international-relations/staff/dr-victor-araujo",
      focus: "The Americas (US and LA), Political Polarization, Populism, Persuasion, Identity Politics, Survey methodology and field experiments"
,
    },
    {
      id: 12,
      name: "Dr Matthias Kroenke",
      image: "/bio_matthias.jpg?height=200&width=200&text=MK",
      personal_website: "https://www.matthiaskroenke.com",
      institutional_website: "https://www.reading.ac.uk/politics-international-relations/staff/dr-matthias-kroenke ",
      focus: "Comparative Politics, Political Behavior, Sub-Saharan Africa, Quantitative and Qualitative Methods,"
,
    },
    {
      id: 13,
      name: "Dr Thomas Robinson",
      image: "/bio_tom.jpg?height=200&width=200&text=TR",
      personal_website: "https://ts-robinson.com",
      institutional_website: "https://www.lse.ac.uk/Methodology/People/Academic-Staff/Thomas-Robinson/",
      focus: "Money in Politics, Voting Behaviour, and Methodological issues in experimental design and machine learning"
    },
    {
      id: 14,
      name: "Dr Ben Tappin",
      image: "/bio_ben.png?height=200&width=200&text=BT",
      personal_website: "https://www.benmtappin.com/",
      institutional_website: "https://www.lse.ac.uk/pbs/people/Dr-Ben-Tappin",
      focus: "Technology, Persuasive Communication, and Attitude and Behaviour Change"

    },
    {
      id: 15,
      name: "Dr Florian Foos",
      image: "/bio_florian.png?height=200&width=200&text=FF",
      personal_website: "http://www.florianfoos.net/",
      institutional_website: "https://www.lse.ac.uk/government/people/academic-staff/florian-foos",
      focus: "Randomized Experiments, Field Experiments, Election campaigns, Social Media"
    },
    {
      id: 16,
      name: "Dr Zach Dickson",
      image: "/bio_zac.jpg?height=200&width=200&text=ZD",
      personal_website: "https://z-dickson.github.io",
      institutional_website: "https://www.lse.ac.uk/Methodology/People/Academic-Staff/Zach-Dickson/Zach-Dickson",
      focus: "US and UK politics, Elites, Representation and Public Opinion using Causal Inference and Computational Methods",

    },
    {
      id: 17,
      name: "Dr Stuart Turnbull-Dugarte",
      image: "/bio_stuart.jpg?height=200&width=200&text=ST",
      personal_website: "https://turnbulldugarte.com/",
      institutional_website: "https://www.southampton.ac.uk/people/5y5zj6/doctor-stuart-turnbull-dugarte",
      focus: "experimental methods, political sociology, LGBTQ+ politics"
    },
    {
      id: 19,
      name: "Dr Jessica Smith",
      image: "/bio_jessica.jpg?height=200&width=200&text=JS",
      personal_website: "https://drjessicacsmith.wordpress.com",
      institutional_website: "https://www.southampton.ac.uk/people/5xt882/doctor-jessica-smith",
      focus: "Political behaviour and gender-based stereotyping, Executive Politics, British Politics",

    },
    {
      id: 20,
      name: "Dr Vanessa Cheng-Matsuno",
      image: "/bio_vanessa.jpg?height=200&width=200&text=VC",
      personal_website: "https://vchengm.wordpress.com/",
      institutional_website: "https://www.lse.ac.uk/government/people/research-students/vanessa-cheng-matsuno",
      focus: "Political Economy, Political behaviour, Quantitative methods, Data science"
    },
    {
      id: 21,
      name: "Dr Olga Maslovskaya",
      image: "/bio_olga.jpg?height=200&width=200&text=OM",
      personal_website: "https://www.southampton.ac.uk/people/5wzzpw/doctor-olga-maslovskaya",
      institutional_website: "https://www.southampton.ac.uk/people/5wzzpw/doctor-olga-maslovskaya",
      focus: "All Aspects of Survey, Survey Data Colleciton, Data Quality"
    },
    {
      id: 23,
      name: "Lauren Leek",
      image: "/bio_Leek.png?height=200&width=200&text=LL",
      personal_website: "https://laurenleek.eu/",
      institutional_website: "https://www.eui.eu/people?id=lauren-leek",
      focus: "Political Economy, Public Policy, Public Opinion using Causal Inference and Computational Methods",

    },
    {
      id: 24,
      name: "Conrad Martinez-Lambert",
      image: "/bio_conrad.jpg?height=200&width=200&text=LL",
      personal_website: "https://uk.linkedin.com/in/conrad-pollcat-elections-postgrad",
      institutional_website: "https://uk.linkedin.com/in/conrad-pollcat-elections-postgrad",
      focus: "Inequality and Polarization, Public Opinion, Elections",
    },
  ]

  

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our People</h1>

          <h2 className="text-2xl font-bold mb-8">Directors</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {directors.map((person) => (
              <div
                key={person.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-sm mx-auto"
              >
                <div className="relative h-96 w-full">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-emerald-600 mb-4">{person.title}</p>
                  <p className="text-gray-700 mb-4">{person.role}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm">
                    {"personal_website" in person && (
                      <Link
                        href={person.personal_website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-800 font-medium"
                      >
                        Personal
                      </Link>
                    )}
                    {"institutional_website" in person && (
                      <Link
                        href={person.institutional_website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-800 font-medium"
                      >
                        Institutional
                      </Link>
                    )}
                  </div>
                  {"focus" in person && (
                    <p className="text-gray-700">{person.focus}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {leadership.map((person) => (
              <div
                key={person.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-sm mx-auto"
              >
                <div className="relative h-96 w-full">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-emerald-600 mb-4">{person.title}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm">
                    {"personal_website" in person && (
                      <Link
                        href={person.personal_website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-800 font-medium"
                      >
                        Personal
                      </Link>
                    )}
                    {"institutional_website" in person && (
                      <Link
                        href={person.institutional_website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-800 font-medium"
                      >
                        Institutional
                      </Link>
                    )}
                  </div>
                  {"focus" in person && (
                    <p className="text-gray-700">{person.focus}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Members</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((person) => (
              <div key={person.id} className="flex flex-col items-center text-center p-4">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-lg font-bold">{person.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{person.focus}</p>
                <div className="flex items-center space-x-4 mt-auto pt-2 text-sm">
                  {"personal_website" in person && (
                    <Link
                      href={person.personal_website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-800 font-medium"
                    >
                      Personal
                    </Link>
                  )}
                  {"institutional_website" in person && (
                    <Link
                      href={person.institutional_website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-800 font-medium"
                    >
                      Institutional
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}

