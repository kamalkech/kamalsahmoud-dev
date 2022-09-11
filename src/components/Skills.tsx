import Fade from "@lib/animations/Fade";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <div className="skills my-16">
      <Fade>
        <div className="title-section h-10 my-6">
          <h2 className="glitch normal-case text-2xl tracking-tight font-extrabold sm:text-2xl md:text-4xl">
            Skills
          </h2>
        </div>
      </Fade>

      <div className="skills my-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-yellow glitch opacity-50">
        <div className="item">
          <h3>php</h3>
          <ProgressBar percentage={75} />
        </div>
        <div className="item">
          <h3>html / css</h3>
          <ProgressBar percentage={70} />
        </div>
        <div className="item">
          <h3>javascript</h3>
          <ProgressBar percentage={80} />
        </div>
        <div className="item">
          <h3>typescript</h3>
          <ProgressBar percentage={80} />
        </div>
        <div className="item">
          <h3>nodejs</h3>
          <ProgressBar percentage={65} />
        </div>
        <div className="item">
          <h3>angular/nestjs</h3>
          <ProgressBar percentage={65} />
        </div>
        <div className="item">
          <h3>react</h3>
          <ProgressBar percentage={80} />
        </div>
        <div className="item">
          <h3>svelte</h3>
          <ProgressBar percentage={80} />
        </div>
        <div className="item">
          <h3>ethereum</h3>
          <ProgressBar percentage={50} />
        </div>
        <div className="item">
          <h3>drupal</h3>
          <ProgressBar percentage={85} />
        </div>
        <div className="item">
          <h3>symfony</h3>
          <ProgressBar percentage={60} />
        </div>
        <div className="item">
          <h3>laravel</h3>
          <ProgressBar percentage={30} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
