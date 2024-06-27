import { Link } from "react-router-dom";
import {
  AiFillTag,
  AiFillTags,
  AiOutlineArrowUp,
  AiOutlineBulb,
  AiOutlineShoppingCart,
  BsCollection,
} from "../assets/icons/index";
import {
  businessAnalystAI,
  businessSystemAnalystAI,
  developerAI,
  projectManagerAI,
  qualityAnalystAI,
  technicalAnalystAI,
  uATAnalystAI,
} from "../assets/images/images";
const DashboardCard = () => {
  return (
    <>
      <Link to="/business-analyst-ai">
        <div className="py-4 px-4 rounded-md shadow-xs border border-stroke max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <div className="text-center">
            <img
              src={businessAnalystAI}
              alt="businessAnalystAI"
              className="inline-block w-20 mb-4"
            />
            <p className="pb-2 text-lg text-blue-800 font-semibold">
              Business Analyst AI
            </p>
            <p className="text-[14px] min-h-[90px]">
              Gathers and analyzes stakeholder requirements, creates process
              models, and generates business documentation.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/technical-analyst-ai">
        <div className="py-4 px-4 rounded-md shadow-xs border border-stroke max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <div className="text-center">
            <img
              src={technicalAnalystAI}
              alt="technicalAnalystAI"
              className="inline-block w-20 mb-4"
            />
            <p className="pb-2 text-lg text-blue-800 font-semibold">
              Technical Analyst AI
            </p>
            <p className="text-[14px] min-h-[90px]">
              Translates business requirements into technical specifications,
              analyzes codebases, and optimizes database schemas.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/business-system-analyst-ai">
        <div className="py-4 px-4 rounded-md shadow-xs border border-stroke max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <div className="text-center">
            <img
              src={businessSystemAnalystAI}
              alt="businessSystemAnalystAI"
              className="inline-block w-20 mb-4"
            />
            <p className="pb-2 text-lg text-blue-800 font-semibold">
              Business System Analyst AI
            </p>
            <p className="text-[14px] min-h-[90px]">
              Generates test plans and scripts, and creates Gherkin structures
              for behaviour-driven development.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/uat-analyst-ai">
        <div className="py-4 px-4 rounded-md shadow-xs border border-stroke max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <div className="text-center">
            <img
              src={uATAnalystAI}
              alt="uATAnalystAI"
              className="inline-block w-20 mb-4"
            />
            <p className="pb-2 text-lg text-blue-800 font-semibold">
              UAT Analyst AI
            </p>
            <p className="text-[14px] min-h-[90px]">
              Prepares and executes user acceptance tests, and documents
              results.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/project-manager-ai">
        <div className="py-4 px-4 rounded-md shadow-xs border border-stroke max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <div className="text-center">
            <img
              src={projectManagerAI}
              alt="projectManagerAI"
              className="inline-block w-20 mb-4"
            />
            <p className="pb-2 text-lg text-blue-800 font-semibold">
              Project Manager AI
            </p>
            <p className="text-[14px] min-h-[90px]">
              Coordinates project tasks and generates project management
              reports.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/developer-ai">
        <div className="py-4 px-4 rounded-md shadow-xs border border-stroke max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <div className="text-center">
            <img
              src={developerAI}
              alt="developerAI"
              className="inline-block w-20 mb-4"
            />
            <p className="pb-2 text-lg text-blue-800 font-semibold">
              Developer AI
            </p>
            <p className="text-[14px] min-h-[90px]">
              Implements features and performs code reviews.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/quality-analyst-ai">
        <div className="py-4 px-4 rounded-md shadow-xs border border-stroke max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer">
          <div className="text-center">
            <img
              src={qualityAnalystAI}
              alt="qualityAnalystAI"
              className="inline-block w-20 mb-4"
            />
            <p className="pb-2 text-lg text-blue-800 font-semibold">
              Quality Analyst AI
            </p>
            <p className="text-[14px] min-h-[90px]">
              Automates testing and generates QA reports.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DashboardCard;
