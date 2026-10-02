import SkillCard from "@/components/SkillCard";

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-4xl font-extrabold text-slate-900">About Me</h1>
      
      <div className="prose text-slate-700 space-y-4 text-lg">
        <p>
          TODO: Replace this text with your real bio. Example: Hello! I am a student taking WDD430. I enjoy solving problems and creating efficient, user-friendly web applications.
        </p>
        <p>
          TODO: Add another paragraph about your goals or hobbies. When I am not coding, I enjoy learning about new technologies and building projects that challenge my current skill set.
        </p>
      </div>

      <div className="pt-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkillCard 
            title="Frontend Development" 
            skills={["TODO: React", "TODO: Next.js", "TODO: Tailwind CSS"]} 
          />
          <SkillCard 
            title="Tools & Environment" 
            skills={["TODO: Git & GitHub", "TODO: VS Code", "TODO: Vercel Deployment"]} 
          />
        </div>
      </div>
    </div>
  );
}