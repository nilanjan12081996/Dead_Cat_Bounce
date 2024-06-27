import { Link } from "react-router-dom";
import {
  AiFillPlusCircle,
  AiFillTag,
  AiFillTags,
  AiOutlineArrowUp,
  AiOutlineBulb,
  AiOutlinePlus,
  AiOutlineShoppingCart,
  BsCollection,
} from "../assets/icons/index";
import {
  AdobeIcon,
  AmericanFinancialIcon,
  AresAcquisitionCorporationIcon,
  CocaColaCoIcon,
  MicrosoftCorpIcon,
  PortfolioAnalytics,
  TopGainers01,
  TopGainers02,
  TopGainers03,
  TopGainers04,
  TopLosers01,
  TopLosers02,
  TopLosers03,
  TopLosers04,
  UnitedParcelServiceIcon,
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
      {/* Portfolio Analytics start here */}
      <div className="flex justify-between gap-4 mb-6">
        <div className="w-6/12 bg-white mb-4 md:mb-0 py-6 px-5 shadow-md rounded-xl">
          <img src={PortfolioAnalytics} alt="PortfolioAnalytics" />
        </div>
        <div className="w-6/12">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white mb-4 md:mb-0 py-4 px-2 shadow-md rounded-xl">
              <div className="mb-4 flex justify-between">
                <p className="text-black text-sm font-bold font-Manrope">
                  Top Gainers
                </p>
                <button className="bg-[#009BF2] w-6 h-6 rounded-md flex justify-center items-center hover:bg-black">
                  <AiOutlinePlus className="text-[12px] text-white" />
                </button>
              </div>
              <div>
                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img
                        src={AresAcquisitionCorporationIcon}
                        alt="AresAcquisitionCorporationIcon"
                      />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        Ares acquisition corporation ii
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        ARES
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $102.24
                        </p>
                        <p className="text-[#02A339] text-xs font-Manrope font-medium">
                          +3.02
                        </p>
                      </div>
                      <div>
                        <button>
                          <AiFillPlusCircle className="text-[#828282] hover:text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img src={CocaColaCoIcon} alt="CocaColaCoIcon" />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        Coca-Cola Co
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        KO
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $60.49
                        </p>
                        <p className="text-[#FF2229] text-xs font-Manrope font-medium">
                          −0.32
                        </p>
                      </div>
                      <div>
                        <button>
                          <AiFillPlusCircle className="text-[#828282] hover:text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img
                        src={AmericanFinancialIcon}
                        alt="AmericanFinancialIcon"
                      />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        American Financial Group. Inc
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        AFG
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $92.94
                        </p>
                        <p className="text-[#02A339] text-xs font-Manrope font-medium">
                          +0.59
                        </p>
                      </div>
                      <div>
                        <button>
                          <AiFillPlusCircle className="text-[#828282] hover:text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img src={MicrosoftCorpIcon} alt="MicrosoftCorpIcon" />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        Microsoft Corp
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        MSFT
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $248.16
                        </p>
                        <p className="text-[#02A339] text-xs font-Manrope font-medium">
                          +0.16
                        </p>
                      </div>
                      <div>
                        <button>
                          <AiFillPlusCircle className="text-[#828282] hover:text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img
                        src={UnitedParcelServiceIcon}
                        alt="UnitedParcelServiceIcon"
                      />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        United Parcel Service, Inc.
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        UPS
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $182.09
                        </p>
                        <p className="text-[#02A339] text-xs font-Manrope font-medium">
                          +2.39
                        </p>
                      </div>
                      <div>
                        <button>
                          <AiFillPlusCircle className="text-[#828282] hover:text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img src={AdobeIcon} alt="AdobeIcon" />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        Adobe Inc.
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        ADBE
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $374.03
                        </p>
                        <p className="text-[#FF2229] text-xs font-Manrope font-medium">
                          −3.21
                        </p>
                      </div>
                      <div>
                        <button>
                          <AiFillPlusCircle className="text-[#828282] hover:text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mb-4 md:mb-0 py-4 px-2 shadow-md rounded-xl">
              <div className="mb-4 flex justify-between">
                <p className="text-black text-sm font-bold font-Manrope">
                  Top Gainers
                </p>
                <button className="bg-[#009BF2] w-6 h-6 rounded-md flex justify-center items-center hover:bg-black">
                  <AiOutlinePlus className="text-[12px] text-white" />
                </button>
              </div>
              <div>
                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img
                        src={AresAcquisitionCorporationIcon}
                        alt="AresAcquisitionCorporationIcon"
                      />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        Ares acquisition corporation ii
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        ARES
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $102.24
                        </p>
                        <p className="text-[#02A339] text-xs font-Manrope font-medium">
                          +3.02
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img src={CocaColaCoIcon} alt="CocaColaCoIcon" />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        Coca-Cola Co
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        KO
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $60.49
                        </p>
                        <p className="text-[#FF2229] text-xs font-Manrope font-medium">
                          −0.32
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img
                        src={AmericanFinancialIcon}
                        alt="AmericanFinancialIcon"
                      />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        American Financial Group. Inc
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        AFG
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $92.94
                        </p>
                        <p className="text-[#02A339] text-xs font-Manrope font-medium">
                          +0.59
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img src={MicrosoftCorpIcon} alt="MicrosoftCorpIcon" />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        Microsoft Corp
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        MSFT
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $248.16
                        </p>
                        <p className="text-[#02A339] text-xs font-Manrope font-medium">
                          +0.16
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img
                        src={UnitedParcelServiceIcon}
                        alt="UnitedParcelServiceIcon"
                      />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        United Parcel Service, Inc.
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        UPS
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $182.09
                        </p>
                        <p className="text-[#02A339] text-xs font-Manrope font-medium">
                          +2.39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b border-[#DDDDDD] pb-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="mr-1">
                      <img src={AdobeIcon} alt="AdobeIcon" />
                    </div>
                    <div>
                      <p className="text-black text-xs font-Manrope font-semibold">
                        Adobe Inc.
                      </p>
                      <p className="text-[#565656] text-xs font-Manrope font-semibold uppercase">
                        ADBE
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center">
                      <div className="mr-3 text-right">
                        <p className="text-black text-xs font-Manrope font-medium">
                          $374.03
                        </p>
                        <p className="text-[#FF2229] text-xs font-Manrope font-medium">
                          −3.21
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Analytics ends here */}

      {/* top area start here */}
      <div className="flex justify-between gap-4">
        <div className="w-6/12 bg-white mb-4 md:mb-0 py-6 px-5 shadow-md rounded-xl">
          <div className="mb-8 flex justify-between">
            <p className="text-black text-sm font-bold font-Manrope">
              Top Gainers
            </p>
            <ul className="flex items-center">
              <li className="text-xs font-normal text-[#959494] px-1">
                <Link className="text-black text-xs font-semibold hover:text-[#009BF2] hover:underline">
                  Large
                </Link>
              </li>
              <li className="text-xs font-normal text-[#959494] px-1">|</li>
              <li className="text-xs font-normal text-[#959494] px-1">
                <Link className="text-black text-xs font-semibold hover:text-[#009BF2] hover:underline">
                  Mid
                </Link>
              </li>
              <li className="text-xs font-normal text-[#959494] px-1">|</li>
              <li className="text-xs font-normal text-[#959494] px-1">
                <Link className="text-black text-xs font-semibold hover:text-[#009BF2] hover:underline">
                  Small
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <img className="mb-3" src={TopGainers01} alt="TopGainers01" />
              <p className="text-black font-Manrope font-semibold text-xs pb-3">
                Enact Holdings Inc.
              </p>
              <p className="text-black font-Manrope font-semibold text-xs">
                $30.73
              </p>
              <p className="text-[#02A339] font-Manrope font-semibold text-xs">
                0.31 (1.02%)
              </p>
            </div>
            <div>
              <img className="mb-3" src={TopGainers02} alt="TopGainers02" />
              <p className="text-black font-Manrope font-semibold text-xs pb-3">
                Alset Inc.
              </p>
              <p className="text-black font-Manrope font-semibold text-xs">
                $1.36
              </p>
              <p className="text-[#02A339] font-Manrope font-semibold text-xs">
                0.10 (7.94%)
              </p>
            </div>
            <div>
              <img className="mb-3" src={TopGainers03} alt="TopGainers03" />
              <p className="text-black font-Manrope font-semibold text-xs pb-3">
                Amgen Inc.
              </p>
              <p className="text-black font-Manrope font-semibold text-xs">
                $318.15
              </p>
              <p className="text-[#02A339] font-Manrope font-semibold text-xs">
                9.99 (3.24%)
              </p>
            </div>
            <div>
              <img className="mb-3" src={TopGainers04} alt="TopGainers04" />
              <p className="text-black font-Manrope font-semibold text-xs pb-3">
                AAR Corp.Inc
              </p>
              <p className="text-black font-Manrope font-semibold text-xs">
                $71.71
              </p>
              <p className="text-[#02A339] font-Manrope font-semibold text-xs">
                0.71 (1.01%)
              </p>
            </div>
          </div>
        </div>
        <div className="w-6/12 bg-white mb-4 md:mb-0 py-6 px-5 shadow-md rounded-xl">
          <div className="mb-8 flex justify-between">
            <p className="text-black text-sm font-bold font-Manrope">
              Top Losers
            </p>
            <ul className="flex items-center">
              <li className="text-xs font-normal text-[#959494] px-1">
                <Link className="text-black text-xs font-semibold hover:text-[#009BF2] hover:underline">
                  Large
                </Link>
              </li>
              <li className="text-xs font-normal text-[#959494] px-1">|</li>
              <li className="text-xs font-normal text-[#959494] px-1">
                <Link className="text-black text-xs font-semibold hover:text-[#009BF2] hover:underline">
                  Mid
                </Link>
              </li>
              <li className="text-xs font-normal text-[#959494] px-1">|</li>
              <li className="text-xs font-normal text-[#959494] px-1">
                <Link className="text-black text-xs font-semibold hover:text-[#009BF2] hover:underline">
                  Small
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <img className="mb-3" src={TopLosers01} alt="TopLosers01" />
              <p className="text-black font-Manrope font-semibold text-xs pb-3">
                AMC Networks Inc
              </p>
              <p className="text-black font-Manrope font-semibold text-xs">
                $10.31
              </p>
              <p className="text-[#F83535] font-Manrope font-semibold text-xs">
                -0.63 (-5.76%)
              </p>
            </div>
            <div>
              <img className="mb-3" src={TopLosers02} alt="TopLosers02" />
              <p className="text-black font-Manrope font-semibold text-xs pb-3">
                Amesite Inc.
              </p>
              <p className="text-black font-Manrope font-semibold text-xs">
                $2.71
              </p>
              <p className="text-[#F83535] font-Manrope font-semibold text-xs">
                -0.08 (-2.87%)
              </p>
            </div>
            <div>
              <img className="mb-3" src={TopLosers03} alt="TopLosers03" />
              <p className="text-black font-Manrope font-semibold text-xs pb-3">
                Ansys Inc.
              </p>
              <p className="text-black font-Manrope font-semibold text-xs">
                $321.10
              </p>
              <p className="text-[#F83535] font-Manrope font-semibold text-xs">
                -4.25 (-1.31%)
              </p>
            </div>
            <div>
              <img className="mb-3" src={TopLosers04} alt="TopLosers04" />
              <p className="text-black font-Manrope font-semibold text-xs pb-3">
                Atri Cure
              </p>
              <p className="text-black font-Manrope font-semibold text-xs">
                $22.03
              </p>
              <p className="text-[#F83535] font-Manrope font-semibold text-xs">
                -0.91 (-3.97%)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* top area ends here */}
    </>
  );
};

export default DashboardCard;
