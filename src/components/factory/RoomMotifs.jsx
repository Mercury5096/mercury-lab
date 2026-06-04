import CookbookProductionScene from "./scenes/CookbookProductionScene";
import PrintEngineScene from "./scenes/PrintEngineScene";
import AiWorkflowLabScene from "./scenes/AiWorkflowLabScene";
import StoryArchiveScene from "./scenes/StoryArchiveScene";
import EditorialKitchenScene from "./scenes/EditorialKitchenScene";
import OperationControlScene from "./scenes/OperationControlScene";
import CommerceVisualScene from "./scenes/CommerceVisualScene";
import MultimediaWorkshopScene from "./scenes/MultimediaWorkshopScene";

function InteriorGrid() {
  return (
    <g className="interior-grid">
      <path d="M34 70H566M34 144H566M34 218H566M34 292H566M104 44V346M202 44V346M300 44V346M398 44V346M496 44V346" />
      <path className="interior-floor" d="M22 348H578M40 336H560" />
    </g>
  );
}

function PrintInterior() {
  return (
    <>
      <InteriorGrid />
      <g className="interior-equipment">
        <path d="M92 206h246v102H92zM113 188h195v18M130 238h172M130 260h172M130 282h172" />
        <circle cx="151" cy="307" r="19" />
        <circle cx="278" cy="307" r="19" />
        <path d="M326 243h116v65H326M361 228h92v15M442 258h70v50h-70" />
      </g>
      <g className="interior-detail">
        <path d="M376 92h96v110h-96zM366 102V81h21M462 81h20v21M366 191v21h21M462 212h20v-21" />
        <path d="M400 110h48M400 124h58M400 138h40M400 152h52" />
        <circle cx="116" cy="113" r="25" />
        <path d="M86 113h60M116 83v60" />
      </g>
    </>
  );
}

function EditorialInterior() {
  return (
    <>
      <InteriorGrid />
      <g className="interior-equipment">
        <path d="M68 92h132v216H68zM82 106v188M105 106v188M128 106v188M151 106v188M174 106v188" />
        <path d="M236 250h258v48H236zM262 298v39M468 298v39M300 237h122" />
      </g>
      <g className="interior-detail">
        <path d="M248 102h94v111h-94zM358 103h132M358 123h111M358 143h124M358 163h92M358 183h119" />
        <path d="M286 122l12 12 21-27M286 157l12 12 21-27" />
        <path d="M422 218l12-19 12 19M438 201v25" />
      </g>
    </>
  );
}

function CookbookInterior() {
  return (
    <>
      <InteriorGrid />
      <g className="interior-equipment">
        <path d="M72 194h214v113H72zM92 213h70v34H92zM178 213h88v34h-88zM92 260h70v30H92zM178 260h88v30h-88z" />
        <path d="M338 226h155v71H338zM359 297v40M472 297v40" />
        <circle cx="415" cy="258" r="25" />
        <circle cx="415" cy="258" r="17" />
      </g>
      <g className="interior-detail">
        <path d="M76 92h170v70H76zM92 111h108M92 126h88M92 141h123" />
        <path d="M343 100h160M343 122h136M343 144h160" />
        <path d="M511 103l8 8 14-19M511 125l8 8 14-19M511 147l8 8 14-19" />
      </g>
    </>
  );
}

function StoryInterior() {
  return (
    <>
      <InteriorGrid />
      <g className="interior-equipment">
        <path d="M62 105h153v203H62zM77 121h124M77 163h124M77 205h124M77 247h124" />
        <path d="M91 129h35v25H91zM136 129h44v25h-44zM91 171h65v25H91zM91 213h42v25H91z" />
        <path d="M316 260h164v43H316zM342 303v35M455 303v35" />
      </g>
      <g className="interior-detail">
        <path d="M282 105h58v42M340 126h67v-33M340 126h67v41M407 93h63M407 167h63" />
        <circle cx="282" cy="105" r="8" />
        <circle cx="407" cy="93" r="8" />
        <circle cx="407" cy="167" r="8" />
        <path d="M273 191h163M273 208h124M273 225h150" />
      </g>
    </>
  );
}

function OperationInterior() {
  return (
    <>
      <InteriorGrid />
      <g className="interior-equipment">
        <path d="M74 246h441v57H74zM96 303v35M493 303v35" />
        <path d="M96 105h126v84H96zM238 105h126v84H238zM380 105h126v84H380z" />
        <path d="M109 171h100M251 171h100M393 171h100" />
      </g>
      <g className="interior-detail">
        <path d="M119 125h69M119 142h50M260 126h83M260 143h45M402 126h79M402 143h60" />
        <path d="M120 225h92l27-20h103l28 20h103" />
        <circle cx="119" cy="225" r="8" />
        <circle cx="239" cy="205" r="8" />
        <circle cx="370" cy="225" r="8" />
        <circle cx="474" cy="225" r="8" />
      </g>
    </>
  );
}

function CommerceInterior() {
  return (
    <>
      <InteriorGrid />
      <g className="interior-equipment">
        <path d="M76 102h128v148H76zM223 102h128v148H223zM370 102h128v148H370z" />
        <path d="M89 116h102v69H89zM236 116h102v69H236zM383 116h102v69H383z" />
        <path d="M88 205h75M236 205h84M383 205h69M88 220h91M236 220h71M383 220h88" />
        <path d="M72 285h433v36H72z" />
      </g>
      <g className="interior-detail">
        <path d="M111 131l58 39M169 131l-58 39M258 131l58 39M316 131l-58 39M405 131l58 39M463 131l-58 39" />
        <path d="M167 276h52l20-20M312 276h52l20-20M239 256l-10 2 8 7M384 256l-10 2 8 7" />
      </g>
    </>
  );
}

function MultimediaInterior() {
  return (
    <>
      <InteriorGrid />
      <g className="interior-equipment">
        <path d="M76 98h205v120H76zM95 116h166v83H95zM325 105h155v95H325z" />
        <path d="M65 268h445v38H65zM85 279h64M164 279h34M214 279h103M333 279h47M394 279h90" />
        <path d="M144 218v36M217 218v36M357 200v54M446 200v54" />
      </g>
      <g className="interior-detail">
        <path d="M335 149h13l10-21 12 43 12-31 13 19 11-34 14 24h31" />
        <path d="M112 137h116v41H112zM121 187h48M182 187h37" />
        <path d="M285 283v-10M386 283v-10" />
      </g>
    </>
  );
}

function AiInterior() {
  return (
    <>
      <InteriorGrid />
      <g className="interior-equipment">
        <path d="M62 232h184v77H62zM84 253h140M84 270h104M84 287h127" />
        <path d="M367 241h140v68H367zM391 260h92M391 277h72" />
      </g>
      <g className="interior-detail">
        <path d="M126 151h84M210 151l80-57M210 151l80 57M290 94h73M290 208h73M363 94l74 39M363 208l74-39" />
        <circle cx="118" cy="151" r="10" />
        <circle cx="210" cy="151" r="12" />
        <circle cx="290" cy="94" r="10" />
        <circle cx="290" cy="208" r="10" />
        <circle cx="363" cy="94" r="10" />
        <circle cx="363" cy="208" r="10" />
        <circle cx="437" cy="133" r="10" />
        <circle cx="437" cy="169" r="10" />
      </g>
    </>
  );
}

const interiors = {
  "print-engine-room": <PrintInterior />,
  "editorial-kitchen": <EditorialInterior />,
  "cookbook-production-floor": <CookbookInterior />,
  "story-archive-ip-office": <StoryInterior />,
  "operation-control-room": <OperationInterior />,
  "commerce-visual-line": <CommerceInterior />,
  "multimedia-workshop": <MultimediaInterior />,
  "ai-workflow-lab": <AiInterior />,
};

export default function RoomInterior({ roomId }) {
  if (roomId === "print-engine-room") {
    return (
      <span className="room-interior room-interior--print" aria-hidden="true">
        <PrintEngineScene />
      </span>
    );
  }

  if (roomId === "cookbook-production-floor") {
    return (
      <span className="room-interior room-interior--cookbook" aria-hidden="true">
        <CookbookProductionScene />
      </span>
    );
  }

  if (roomId === "ai-workflow-lab") {
    return (
      <span className="room-interior room-interior--ai" aria-hidden="true">
        <AiWorkflowLabScene />
      </span>
    );
  }

  if (roomId === "story-archive-ip-office") {
    return (
      <span className="room-interior room-interior--story" aria-hidden="true">
        <StoryArchiveScene />
      </span>
    );
  }

  if (roomId === "editorial-kitchen") {
    return (
      <span className="room-interior room-interior--editorial" aria-hidden="true">
        <EditorialKitchenScene />
      </span>
    );
  }

  if (roomId === "operation-control-room") {
    return (
      <span className="room-interior room-interior--operation" aria-hidden="true">
        <OperationControlScene />
      </span>
    );
  }

  if (roomId === "commerce-visual-line") {
    return (
      <span className="room-interior room-interior--commerce" aria-hidden="true">
        <CommerceVisualScene />
      </span>
    );
  }

  if (roomId === "multimedia-workshop") {
    return (
      <span className="room-interior room-interior--multimedia" aria-hidden="true">
        <MultimediaWorkshopScene />
      </span>
    );
  }

  return (
    <span className="room-interior" aria-hidden="true">
      <svg viewBox="0 0 600 370" preserveAspectRatio="none">
        {interiors[roomId]}
      </svg>
    </span>
  );
}
