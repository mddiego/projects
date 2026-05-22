import { helper } from "@/app/assets/js/helper";

export default function Footer() {
  return (
    <footer className="shrink-0">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee py-6 whitespace-nowrap">
          {helper.getSkillsFooter().map((v) => {
            return (
              <div key={v.name + v.key} className="inline">
                <span key={v.key} className="text-lg">
                  {v.name}
                </span>
                <span className="mx-3">&bull;</span>
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 animate-marquee2 py-6 whitespace-nowrap">
          {helper.getSkillsFooter().map((v) => {
            return (
              <div key={v.name + v.key} className="inline">
                <span key={v.key} className="text-lg">
                  {v.name}
                </span>
                <span className="mx-3">&bull;</span>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
