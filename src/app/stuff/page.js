import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SideBar from "@/components/SideBar";

export default function Stuff() {
  const projects = [
    {
      title1: "Research concept-map",
      title2: "3/18/2024",
      src: "/",
    },
    {
      title1: "Research process",
      title2: "3/18/2024",
      src: "/",
    },
    {
      title1: "Research planning & milestones",
      title2: "3/18/2024",
      src: "/",
    },
    {
      title1: "Project: AP CSP Wordle",
      title2: "3/18/2024",
      src: "/",
    },
    {
      title1: "Past research project",
      title2: "3/18/2024",
      src: "/",
    },
    {
      title1: "Iterations of RQ",
      title2: "3/18/2024",
      src: "/",
    },
  ];

  return (
    <>
    <MaxWidthWrapper>
      <div className="md:pl-[20.5rem] md:pr-20 pt-4 pr-10 font-semibold pl-6">
        <div className="border-b pt-6 mb-8">
          <p className="font-medium uppercase text-[12px] text-gray-400">
            i n s p e c t
          </p>
          <h1 className="text-4xl mt-5 mb-4 text-[#3B3D41]">
            Ideas about interfaces
          </h1>
          <p className="text-[14px] font-normal mb-9 text-[#3B3D41]">
            Some ideas about interfaces that Ive thought of and decided to build
            for fun. If you have any thoughts about these, let me know!
          </p>
        </div>

        {projects.map((project, i) => {
          return (
            <div className="flex justify-between">
              <a
                href={`${project.src}`}
                className="text-[#3B3D41] py-2 text-[20px] font-semibold"
                key={i}
              >
                {project.title1}
              </a>
              <a className="text-gray-400 font-normal text-[14px] py-2" key={i}>
                {project.title2}
              </a>
            </div>
          );
        })}
      </div>
      </MaxWidthWrapper>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-40">
        <SideBar />
      </div>
    </>
  );
}
