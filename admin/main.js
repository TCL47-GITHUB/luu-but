// Danh sách icon mới
var fontName = "maumau-admin";

var prefix = "ad-mm ";

let abc = "adm";
// Danh sách icon mới
var newIcons = [
  `${abc}-calendar`,
  `${abc}-calendar-1`,
  `${abc}-page-setting`,
  `${abc}-post-setting`,
  `${abc}-solid-page-setting`,
  `${abc}-solid-post-setting`,
  `${abc}-solid-tag`,
  `${abc}-tag`,
  `${abc}-share-link`,
  `${abc}-solid-share-link`,
  `${abc}-list-link`,
  `${abc}-solid-list-link`,
  `${abc}-save`,
  `${abc}-solid-save`,
  `${abc}-solid-star-half`,
  `${abc}-x`,
];

// read iconData
fetch("admin/iconData-1.txt")
  .then((response) => response.text())
  .then((data) => {
    // Xử lý dữ liệu từ file iconData.txt
    const iconDataText = data.replace("export default", "");
    const iconData = eval(iconDataText);

    const container = document.getElementById("icon-container");

    iconData.forEach((icon) => {
      const glyphDiv = document.createElement("div");
      glyphDiv.classList.add("glyph", "fs1");

      const iconDiv = document.createElement("div");
      iconDiv.classList.add("clearfix", "bshadow0", "pbs");

      const iconElement = document.createElement("i");
      icon.code.split(" ").forEach((cls) => iconElement.classList.add(cls));
      iconDiv.appendChild(iconElement);

      const spanElement = document.createElement("span");
      spanElement.classList.add("mls");
      spanElement.textContent = icon.code;
      iconDiv.appendChild(spanElement);

      glyphDiv.appendChild(iconDiv);

      const fieldset = document.createElement("fieldset");
      fieldset.classList.add("fs0", "size1of1", "clearfix", "hidden-false");

      const input = document.createElement("input");
      input.type = "text";
      input.readOnly = true;
      input.value = icon.content;
      input.classList.add("unit", "size1of2");
      fieldset.appendChild(input);

      glyphDiv.appendChild(fieldset);

      container.appendChild(glyphDiv);
    });
    //Hiển thị tên font
    const fontNameDIV = document.getElementById("fontName");
    fontNameDIV.textContent = `${fontName}`;
    // Hiển thị số lượng icon
    const iconCountDiv = document.getElementById("totalIconCount");
    iconCountDiv.textContent = `Icon: ${iconData.length}`;
  })
  .catch((error) => console.error("Error fetching iconData:", error));

// Function to fetch and display the file content Icon data
async function displayFileContent() {
  try {
    const response = await fetch("admin/iconData-1.txt");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    fileContent.textContent = text;

    // Count the occurrences of "ad-tgic"
    // const iconCountMatch = text.match(/ad-mm/g);
    const iconCountMatch = text.match(new RegExp(`${prefix}`, "g"));
    const count = iconCountMatch ? iconCountMatch.length : 0;
    iconCount.textContent = ` (${count})`;
  } catch (error) {
    fileContent.textContent = `Error: ${error.message}`;
  }
}
