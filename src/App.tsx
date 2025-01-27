import "./App.css";
import { Button } from "./components/ui/button";
import downloadImg from "./assets/download-yarn.png";
import thoseImg from "./assets/those.png";
import yarnImg from "./assets/yarn.png";

const yarnLandingPageUrl = "https://musicyarns.com";
const yarnAppStoreUrl =
  "https://apps.apple.com/us/app/yarn-for-fans-music-lovers/id6737612928";
const yarnPlayStoreUrl =
  "https://play.google.com/store/apps/details?id=com.thehouseofsounds.yarnapp";
const androidIconUrl = `${yarnLandingPageUrl}/android-icon.png`;
const iosIconUrl = `${yarnLandingPageUrl}/apple-icon.png`;

function App() {
  return (
    <div className="flex flex-col !overflow-hidden  lg:flex-row items-start lg:items-center gap-5 lg:gap-0 mx-auto ">
      {/* DOWNLOAD BUTTONS AND TEXT */}
      <div className="order-3 lg:order-none lg:w-[25%] flex flex-col items-start lg:items-end space-y-5">
        <div className="flex flex-row lg:flex-col text-xl lg:text-4xl font-semibold text-left lg:text-right items-center lg:items-end space-x-1 lg:space-x-0">
          <div>DOWNLOAD</div>

          <div className="flex items-center space-x-1">
            <img src={yarnImg} className="size-7 lg:size-10" alt="yarn-image" />
            <div>YARN</div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-5  ">
          <a href={yarnAppStoreUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              <img src={iosIconUrl} className="size-5" alt="ios icon" />
              App Store
            </Button>
          </a>

          <a href={yarnPlayStoreUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              <img src={androidIconUrl} className="size-5" alt="andriod icon" />
              Play Store
            </Button>
          </a>
        </div>
      </div>

      {/* IMAGES DISPLAY */}
      <div className="order-1 lg:order-none relative flex-1 flex flex-col justify-start ">
        <a href={yarnLandingPageUrl} target="_blank" className="flex-shrink-0">
          <img
            src={downloadImg}
            alt="download"
            className="size-[50vh] lg:size-[90vh] 2xl:size-[100dvh] object-cover lg:object-bottom"
          />
        </a>

        <div className="hidden lg:flex lg:absolute z-10 -bottom-10 right-0 left-0 flex-col items-center">
          <div>from</div>

          <img
            src={thoseImg}
            alt="download"
            className="size-44  object-contain object-top "
          />
        </div>
      </div>

      {/* ABOUT YARN */}
      <div className="order-2 lg:w-[25%] lg:order-none flex flex-col text-left items-start space-y-2 -mt-16 lg:-mt-0">
        <div className="text-xl lg:text-2xl font-semibold">ABOUT YARN</div>

        <div className=" leading-relaxed tracking-wider text-left lg:text-left">
          Yarn is a social music application for mobile designed to help you
          discover new music & connect with your favorite artists and other
          fans.
        </div>
      </div>

      <div className="flex order-4 lg:hidden flex-col items-center  -pb-14 pt-2 w-full justify-center">
        <div>from</div>

        <img
          src={thoseImg}
          alt="download"
          className="size-44  object-contain object-top"
        />
      </div>
    </div>
  );
}

export default App;
