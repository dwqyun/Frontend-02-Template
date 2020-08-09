var standards = [{ "name": "Requirements for Chinese Text Layout中文排版需求", "url": "https://www.w3.org/TR/2020/WD-clreq-20200801/" }, { "name": "Media Queries Level 5", "url": "https://www.w3.org/TR/2020/WD-mediaqueries-5-20200731/" }, { "name": "Media Queries Level 4", "url": "https://www.w3.org/TR/2020/CR-mediaqueries-4-20200721/" }, { "name": "CSS Lists Module Level 3", "url": "https://www.w3.org/TR/2020/WD-css-lists-3-20200709/" }, { "name": "CSS Inline Layout Module Level 3", "url": "https://www.w3.org/TR/2020/WD-css-inline-3-20200618/" }, { "name": "CSS Overflow Module Level 3", "url": "https://www.w3.org/TR/2020/WD-css-overflow-3-20200603/" }, { "name": "CSS Containment Module Level 2", "url": "https://www.w3.org/TR/2020/WD-css-contain-2-20200603/" }, { "name": "Encoding", "url": "https://www.w3.org/TR/2020/NOTE-encoding-20200602/" }, { "name": "Requirements for Hangul Text Layout and Typography : 한국어 텍스트 레이아웃 및 타이포그래피를 위한 요구사항", "url": "https://www.w3.org/TR/2020/NOTE-klreq-20200527/" }, { "name": "CSS Box Sizing Module Level 4", "url": "https://www.w3.org/TR/2020/WD-css-sizing-4-20200526/" }, { "name": "Ethiopic Layout Requirements", "url": "https://www.w3.org/TR/2020/WD-elreq-20200526/" }, { "name": "CSS Positioned Layout Module Level 3", "url": "https://www.w3.org/TR/2020/WD-css-position-3-20200519/" }, { "name": "CSS Display Module Level 3", "url": "https://www.w3.org/TR/2020/CR-css-display-3-20200519/" }, { "name": "CSS Text Decoration Module Level 4", "url": "https://www.w3.org/TR/2020/WD-css-text-decor-4-20200506/" }, { "name": "CSS Ruby Layout Module Level 1", "url": "https://www.w3.org/TR/2020/WD-css-ruby-1-20200429/" }, { "name": "CSS Text Module Level 3", "url": "https://www.w3.org/TR/2020/WD-css-text-3-20200429/" }, { "name": "CSS Box Model Module Level 3", "url": "https://www.w3.org/TR/2020/WD-css-box-3-20200421/" }, { "name": "CSS Box Alignment Module Level 3", "url": "https://www.w3.org/TR/2020/WD-css-align-3-20200421/" }, { "name": "CSS Box Model Module Level 4", "url": "https://www.w3.org/TR/2020/WD-css-box-4-20200421/" }, { "name": "CSS Color Adjustment Module Level 1", "url": "https://www.w3.org/TR/2020/WD-css-color-adjust-1-20200402/" }, { "name": "CSS Speech Module", "url": "https://www.w3.org/TR/2020/CR-css-speech-1-20200310/" }, { "name": "CSS Transforms Module Level 2", "url": "https://www.w3.org/TR/2020/WD-css-transforms-2-20200303/" }, { "name": "CSS Color Module Level 5", "url": "https://www.w3.org/TR/2020/WD-css-color-5-20200303/" }, { "name": "CSS Conditional Rules Module Level 4", "url": "https://www.w3.org/TR/2020/WD-css-conditional-4-20200303/" }, { "name": "Resize Observer", "url": "https://www.w3.org/TR/2020/WD-resize-observer-1-20200211/" }, { "name": "CSS Scroll Anchoring Module Level 1", "url": "https://www.w3.org/TR/2020/WD-css-scroll-anchoring-1-20200211/" }, { "name": "Timed Text Markup Language 2 (TTML2) (2nd Edition)", "url": "https://www.w3.org/TR/2020/CR-ttml2-20200128/" }, { "name": "CSS Basic User Interface Module Level 4", "url": "https://www.w3.org/TR/2020/WD-css-ui-4-20200124/" }, { "name": "CSS Writing Modes Level 3", "url": "https://www.w3.org/TR/2019/REC-css-writing-modes-3-20191210/" }, { "name": "CSS Grid Layout Module Level 2", "url": "https://www.w3.org/TR/2019/WD-css-grid-2-20191203/" }, { "name": "CSS Spatial Navigation Level 1", "url": "https://www.w3.org/TR/2019/WD-css-nav-1-20191126/" }, { "name": "CSS Containment Module Level 1", "url": "https://www.w3.org/TR/2019/REC-css-contain-1-20191121/" }, { "name": "CSS Text Module Level 4", "url": "https://www.w3.org/TR/2019/WD-css-text-4-20191113/" }, { "name": "CSS Fonts Module Level 4", "url": "https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/" }, { "name": "CSS Color Module Level 4", "url": "https://www.w3.org/TR/2019/WD-css-color-4-20191105/" }, { "name": "CSS Properties and Values API Level 1", "url": "https://www.w3.org/TR/2019/WD-css-properties-values-api-1-20191025/" }, { "name": "CSS Multi-column Layout Module Level 1", "url": "https://www.w3.org/TR/2019/WD-css-multicol-1-20191015/" }, { "name": "CSS Images Module Level 3", "url": "https://www.w3.org/TR/2019/CR-css-images-3-20191010/" }, { "name": "CSS Text Decoration Module Level 3", "url": "https://www.w3.org/TR/2019/CR-css-text-decor-3-20190813/" }, { "name": "CSS Generated Content Module Level 3", "url": "https://www.w3.org/TR/2019/WD-css-content-3-20190802/" }, { "name": "CSS Writing Modes Level 4", "url": "https://www.w3.org/TR/2019/CR-css-writing-modes-4-20190730/" }, { "name": "CSS Table Module Level 3", "url": "https://www.w3.org/TR/2019/WD-css-tables-3-20190727/" }, { "name": "CSS Syntax Module Level 3", "url": "https://www.w3.org/TR/2019/CR-css-syntax-3-20190716/" }, { "name": "CSS Animation Worklet API", "url": "https://www.w3.org/TR/2019/WD-css-animation-worklet-1-20190625/" }, { "name": "CSS Overscroll Behavior Module Level 1", "url": "https://www.w3.org/TR/2019/WD-css-overscroll-1-20190606/" }, { "name": "CSS Values and Units Module Level 3", "url": "https://www.w3.org/TR/2019/CR-css-values-3-20190606/" }, { "name": "CSS Intrinsic & Extrinsic Sizing Module Level 3", "url": "https://www.w3.org/TR/2019/WD-css-sizing-3-20190522/" }, { "name": "CSS Easing Functions Level 1", "url": "https://www.w3.org/TR/2019/CR-css-easing-" }]


// Array.prototype.slice.call(document.querySelector("#container").children).filter(e => e.getAttribute("data-tag").match(/css/)).map(e => ({name:e.children[1].innerText, url:e.children[1].children[0].href}))



var iframe = document.createElement("iframe");
document.body.innerHTML = "";
document.body.appendChild(iframe);


function happen(element, event) {
  return new Promise(resolve => {
    let handler = () => {
      resolve();
      element.removeEventListener(event, handler);
    }
    element.addEventListener(event, handler)
  })
}


void async function () {
  for (let standard of standards) {
    iframe.src = standard.url;
    console.log(standard.name);
    await happen(iframe, "load");
    console.log(iframe.contentDocument.querySelectorAll(".propdef"))
  }
}();