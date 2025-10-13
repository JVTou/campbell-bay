import { useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';
import tippy from 'tippy.js';
import MapData from './MapData';

const Map = () => {
  const mapRef = useRef(null);
  const toolTipRef = useRef(null);
  const stateDropdownRef = useRef(null);

  useEffect(() => {
    loadMap();
    stateDropdown();
    emailTooltip();
  }, []);

  const emailTooltip = () => {
    const emailElement = document.getElementById("email");
    if (emailElement) {
      const clipboard = new ClipboardJS("#email");
      const copiedTippy = tippy("#email", {
        content: "Copied!",
        trigger: "",
      })[0];

      clipboard.on("success", function (e) {
        copiedTippy.show();
        setTimeout(copiedTippy.hide, 2000);
      });
    }
  };

  const loadMap = () => {
    const map = mapRef.current;
    const toolTip = toolTipRef.current;

    if (!map || !toolTip) return;

    // Add event listeners to map element
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      map.addEventListener("mousemove", mouseEntered, false);
      map.addEventListener("mouseout", mouseGone, false);
    }

    // Show tooltip on mousemove
    function mouseEntered(e) {
      const target = e.target;

      if (target.parentNode.className.baseVal === "state") {
        target.style.filter = `brightness(50%)`;
        const details = e.target.attributes;

        // Follow cursor
        toolTip.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;

        // Position tooltip in viewport
        if (window.innerWidth > e.offsetX + toolTip.offsetWidth + 50) {
          toolTip.style.left = `revert`;
        } else {
          toolTip.style.left = `${
            window.innerWidth - (e.offsetX + toolTip.offsetWidth + 50)
          }px`;
        }

        // Tooltip data
        toolTip.innerHTML = `
          <ul class="font-sans list-none p-4 m-0">
              <li class="mb-3"><b>Region: ${details.region.value}</b></li>
              <li class="mb-3">State: ${details.state.value}</li>
              <li class="mb-3">Projects: ${details.projects.value}+</li>
              <li class="mb-3">Partners: ${details.partners.value}+</li>
          </ul>`;
      }
    }

    // Clear tooltip on mouseout
    function mouseGone(e) {
      const target = e.target;
      if (target.parentNode.className.baseVal === "state") {
        target.style.filter = `brightness(1)`;
        toolTip.innerHTML = "";
      }
    }
  };

  // Dropdown for mobile
  const stateDropdown = () => {
    const stateDropdown = stateDropdownRef.current;
    const map = mapRef.current;
    const toolTip = toolTipRef.current;

    if (!stateDropdown || !map || !toolTip) return;

    let previousState = stateDropdown.value;

    // Add event listeners to dropdown menu
    stateDropdown.addEventListener("change", () => {
      const selectedStateID = stateDropdown.value;
      const selectedState = map.querySelector("." + selectedStateID);

      if (!selectedState) return;

      // Reset style of previous selection
      const prevState = map.querySelector("." + previousState);
      if (prevState) {
        prevState.style.filter = `brightness(1)`;
      }

      //Reset tooltip position
      toolTip.style.left = "8px";
      toolTip.style.top = "-64px";

      // Choose the element with the dropdown selection's class and style it
      selectedState.style.filter = `brightness(50%)`;

      // Add data to toolTip
      const details = selectedState.attributes;

      toolTip.innerHTML = `
          <ul class="font-sans list-none p-4 m-0">
              <li class="mb-3"><b>Region: ${details.region.value}</b></li>
              <li class="mb-3">State: ${details.state.value}</li>
              <li class="mb-3">Projects: ${details.projects.value}+</li>
              <li class="mb-3">Partners: ${details.partners.value}+</li>
          </ul>`;

      // Move selected state's tooltip to the state's position in the viewport
      const selectedStateLocation = selectedState.getBoundingClientRect();

      if (window.innerWidth > toolTip.offsetWidth + selectedStateLocation.right) {
        toolTip.style.transform = `translate(${selectedStateLocation.right}px, ${selectedStateLocation.top}px)`;
      } else {
        toolTip.style.transform = `translate(${
          selectedStateLocation.left - toolTip.offsetWidth - 20
        }px, ${selectedStateLocation.y}px)`;
      }

      previousState = stateDropdown.value;
    });
  };

  return (
    <div className="hidden md:flex flex-col md:flex-row relative h-screen z-10">
      <section className="content flex-[1_1_50%] order-1 md:flex-[1_1_80%] md:p-8 md:relative z-10">
      <div className="map-wrapper w-full h-fit m-auto z-10 relative">
          {/* Compact Legend - Positioned in top-left corner */}
          <div className="absolute top-0 left-0 z-[999] bg-base-100/90 backdrop-blur-sm rounded-lg shadow-lg p-3 max-w-[200px]">
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                <span className="text-base-content text-sm font-medium">Headquarters</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#ffe989] rounded-full mr-2 flex-shrink-0"></span>
                <span className="text-base-content text-sm font-medium">Offices</span>
              </div>
            </div>

        </div>

          <div
            id="toolTip"
            ref={toolTipRef}
            className="absolute transition ease-out duration-200 bg-base-300 rounded-md z-[999] pointer-events-none"
          ></div>
          <svg
            ref={mapRef}
            xmlns="http://www.w3.org/2000/svg"
            style={{ strokeLinejoin: "round", stroke: "#ecf0f1", fill: "none" }}
            version="1.1"
            viewBox="0 0 959 593"
            id="map"
            className="block z-10 mx-auto w-[90vw] h-[70vh] 3xl:h-[80vh]"
          >
            <defs>
              <style type="text/css">
                {`
                  path #map {
                    fill-rule: evenodd;
                  }
                  svg #map {
                    background-color: #2c3e50;
                  }
                  .state {
                    fill: #3498db;
                  }
                  .borders {
                    stroke: #ffffff;
                    stroke-width: 1;
                  }
                  .dccircle {
                    display: none;
                  }
                  .separator1 {
                    stroke: #b0b0b0;
                    stroke-width: 2;
                  }
                  .CA {
                    fill: #00d8c4;
                  }
                  .TX,
                  .ID,
                  .NV,
                  .AZ {
                    fill: #ffe989;
                  }
                `}
              </style>
            </defs>
            <MapData />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Map;
