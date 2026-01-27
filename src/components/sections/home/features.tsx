import AnimationUpwardManagement from "@/components/ui/animation-upward-management";
import AnimationMeetingsConfidence from "@/components/ui/animation-meetings-confidence";
import AnimationIELTSMastery from "@/components/ui/animation-ielts-mastery";
import AnimationWorkplaceEnglish from "@/components/ui/animation-workplace-english";

type Feature = {
  title: string;
  description: string;
  component?: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Upward Management",
    description:
      "Master high-level communication with superiors. Learn to manage pressure, handle conflict, command resources, and build executive presence through authentic workplace scenarios.",
    component: <AnimationUpwardManagement className="absolute inset-0" />,
  },
  {
    title: "Meetings with Confidence",
    description:
      "Speak with authority, defend strategically, and drive effective outcomes. Navigate meeting dynamics and tension like a seasoned professional.",
    component: <AnimationMeetingsConfidence className="absolute inset-0" />,
  },
  {
    title: "IELTS Mastery",
    description:
      "Achieve your target IELTS score with structured practice and high-impact vocabulary. Get the results you need for higher education and global opportunities.",
    component: <AnimationIELTSMastery className="absolute inset-0" />,
  },
  {
    title: "Workplace English Excellence",
    description:
      "Build professional fluency through shadowing drills, diverse accent challenges, and real career scenarios. Communicate confidently in any international workplace.",
    component: <AnimationWorkplaceEnglish className="absolute inset-0" />,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const { component } = feature;

  return (
    <div className="bg-card border-border-light relative flex flex-col rounded-2xl border p-6 text-left shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]">
      <h3 className="text-foreground text-lg font-medium sm:text-xl">
        {feature.title}
      </h3>
      <p className="text-muted-foreground mt-2 text-sm sm:text-base">
        {feature.description}
      </p>

      <div className="relative mt-6 w-full overflow-hidden rounded-xl">
        <div className="bg-accent relative h-[220px] w-full sm:h-[260px] md:h-[300px]">
          {component ?? null}
        </div>
      </div>
    </div>
  );
}

const Features = () => {
  const [f1, f2, f3, f4] = FEATURES;

  return (
    <section id="features" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm sm:text-base">
          Learning Collections
        </p>

        <h2 className="text-foreground mx-auto max-w-3xl text-center text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
          Everything You Need for a <br className="hidden sm:block" />
          Global Career
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base sm:text-lg">
          Master professional English through nano-skills training. From
          workplace communication to IELTS success - structured, effective, and
          ready for real-world application.
        </p>

        <div className="mt-12 flex flex-col gap-6 md:mt-14 md:gap-8 lg:flex-row">
          <div className="lg:flex-1">
            <FeatureCard feature={f1!} />
          </div>
          <div className="lg:w-[500px]">
            <FeatureCard feature={f2!} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:gap-8 lg:flex-row">
          <div className="lg:w-[500px]">
            <FeatureCard feature={f3!} />
          </div>
          <div className="lg:flex-1">
            <FeatureCard feature={f4!} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
