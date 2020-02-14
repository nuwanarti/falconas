import React, { useState, useEffect } from "react";

const Slider = props => {
  const { innerWidth: width, innerHeight: height } = window;
  const urls = [
    "https://www.imb.com.au/templates/client/images/header/IMB-logo.svg",
    "https://www.mkmcapital.com.au/wp-content/uploads/2016/08/MKM_logo-2.png",
    "https://www.pnbank.com.au/Static/Theme/assets/images/pnbank-logo-narrow--7465fe2f1d3e10cf7acfc008991cebef.svg",
    "https://www.provident.com.au/images/logo-blue.png",
    "https://www.adelaidebank.com.au/globalassets/globalresources/brand-logos/abl-logo.png",
    "https://www.amp.com.au/content/dam/amp-au/data/icons/amp-logo-reversed.svg",
    "https://www.anz.com.au//content/dam/anzconz/images/common/promopages/logo-promo-anz-small.png",
    "https://www.bt.com.au//content/dam/public/btfg-bt/images/logo/bt_financial_group_logo_mob-2x1.png",
    "https://www.commbank.com.au/content/dam/commbank/commBank-logo.svg",
    "https://www.collinshomeloans.com.au/hs-fs/hubfs/collins-logo-shedow.png?width=230&name=collins-logo-shedow.png",
    "https://depositpower.com.au/wp-content/uploads/2019/01/DepositPower_stacked_white.png",
    "https://www.latrobefinancial.com.au//Images/Logos/Logo-LTF_v2.jpg",
    "https://d2ttwt9gu7swv4.cloudfront.net/assets/images/logo.svg",
    "https://www.mebank.com.au/MEBank/Assets/Images/me-logo.svg",
    "https://www.nab.com.au//etc/designs/nabrwd/clientlibs/images/logo.png",
    "https://www.pepper.com.au//siteassets/logos/pepper-money-logo.png",
    "https://www.suncorp.com.au//content/dam/suncorp/corporate/images/logos/Suncorp_New_Logo_2x.png",
    "https://www.equifax.com.au/sites/all/themes/vedacorporate/logo.png"
  ];
  const imageWidth = 100;
  const padding = 20;
  const sliderWidth = urls.length * (imageWidth + padding * 2);
  let [offset, setOffset] = useState(0);
  let [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    let offset = sliderWidth;
    function tick() {
      offset -= 2;
      if (offset < 0) offset += sliderWidth;
      if (document.querySelector(".sl1")) {
        document.querySelector(".sl1").style.left = offset + "px";
        document.querySelector(".sl2").style.left = offset - sliderWidth + "px";
      }
      if (animationStarted) requestAnimationFrame(tick);
    }
    tick();
    setAnimationStarted(true);
    return () => setAnimationStarted(false);
  }, [animationStarted]);

  const Images = props => (
    <div className={["Images", props.cls].join(" ")}>
      {urls.map((u, i) => (
        <img key={u} src={u} style={{ width: imageWidth, padding: padding }} />
      ))}
    </div>
  );

  return (
    <div className="Scroller" style={{ background: '#FAD161'}}>
      <Images cls="sl1" />
      <Images cls="sl2 " />
    </div>
  );
};

export default Slider;
