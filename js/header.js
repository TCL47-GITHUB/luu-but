class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <div class="bgc1 px-2 py-2 flex gap-2 items-center sticky top-0 clearfix flex-col-reverse xl:flex-row sm:gap-1 sm:px-3 md:gap-2">
<a class="logo hidden xl:block" href="#!">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
  <path d="M4.65846 18.3828C6.54809 19.768 8.7516 20.6824 11.3559 20.9958C11.6615 21.0326 11.9424 20.8247 11.9952 20.5238L12.3434 18.54C12.37 18.3887 12.4807 18.2656 12.6291 18.2217C18.7554 16.4095 22.4766 12.5968 22.9986 6.12336C23.027 5.7714 22.5916 5.5822 22.3504 5.84181C20.4454 7.89113 18.0867 9.40599 15.3262 10.4474C15.3824 9.98051 15.3817 9.52349 15.3154 9.07789L16.1135 8.47877L15.1644 8.44664L16.1351 7.33398L14.83 7.72981C13.7353 6.09287 10.8321 6.34701 10.1706 8.35033C10.0253 8.97577 10.0474 9.65295 10.1814 10.2012C7.49049 8.96306 4.65666 6.20354 1.78742 3.14203C1.51667 2.8531 1.02914 3.03335 1.0146 3.42755C0.792435 9.45425 3.10855 14.5419 7.42847 16.8144C7.48395 16.8436 7.47933 16.9239 7.42089 16.9467L4.70869 18.0059C4.54861 18.0684 4.52009 18.2813 4.65846 18.3828Z" fill="white"/>
</svg></a>
<div class="min-w-80 flex rounded gap-1 items-center search-container bg-white px-4 py-1.5">
<input type="text" class="" id="searchInput" oninput="searchIconByName(this.value)" placeholder="Tìm Icon...">

<i class="mm-1 icon1-search cursor-pointer"></i>

</div>
<!-- Popup structure -->
<div class="flex flex-col-reverse w-full xl:w-fit gap-2 sm:flex-row sm:gap-2  items-center">
    <a class="logo hidden sm:block xl:hidden" href="#!">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
  <path d="M4.65846 18.3828C6.54809 19.768 8.7516 20.6824 11.3559 20.9958C11.6615 21.0326 11.9424 20.8247 11.9952 20.5238L12.3434 18.54C12.37 18.3887 12.4807 18.2656 12.6291 18.2217C18.7554 16.4095 22.4766 12.5968 22.9986 6.12336C23.027 5.7714 22.5916 5.5822 22.3504 5.84181C20.4454 7.89113 18.0867 9.40599 15.3262 10.4474C15.3824 9.98051 15.3817 9.52349 15.3154 9.07789L16.1135 8.47877L15.1644 8.44664L16.1351 7.33398L14.83 7.72981C13.7353 6.09287 10.8321 6.34701 10.1706 8.35033C10.0253 8.97577 10.0474 9.65295 10.1814 10.2012C7.49049 8.96306 4.65666 6.20354 1.78742 3.14203C1.51667 2.8531 1.02914 3.03335 1.0146 3.42755C0.792435 9.45425 3.10855 14.5419 7.42847 16.8144C7.48395 16.8436 7.47933 16.9239 7.42089 16.9467L4.70869 18.0059C4.54861 18.0684 4.52009 18.2813 4.65846 18.3828Z" fill="white"/>
</svg></a>
    <div class="flex w-full text-nowrap">
<a href="./admin.html" class="hidden w-full text-sm rounded-r-none hover:scale-105 focus:outline-none flex justify-center px-2 py-1 rounded cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition">
<div class="flex leading-5">Admin</div>
</a>
<a href="./user.html" class="w-full text-sm hover:scale-105 focus:outline-none flex justify-center px-2 py-1 cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition">
<div class="flex leading-5">User</div>
</a>

<button id="open-popup" class="text-sm w-full hover:scale-105 focus:outline-none flex justify-center px-2 py-1 cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border border-r-0 duration-200 ease-in-out border-teal-600 transition">
<div class="flex leading-5">Icon data</div>
</button>

<button onclick="openModal()" class="text-sm w-full rounded-l-none hover:scale-105 focus:outline-none flex justify-center px-2 py-1 rounded cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">
<div class="flex leading-5">New Icon</div>
</button>
</div>
    <div class="flex gap-2 items-center">
<form class="w-max">
<select id="copyFunctionSelect" class="w-full text-sm bg-gray-50 border border-gray-300 text-gray-800 rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option value="copyIconName1">Copy full tag</option>
<option selected="" value="copyIconName2">Copy tên class</option>
</select>
</form>
<h1 class="mhmm mvm text-sm text-nowrap">
<span class="fgc1">Font name:</span> <span id="fontName"></span>
<small class="fgc1"><span id="totalIconCount"></span></small>
</h1>
</div>
</div>
</div>


<div id="popup" class="popup">
<div class="popup-content">
<i class="close-btn mm-1 icon1-times"></i>
<p
class="text-gray-600 font-bold"
style="
  font-size: 1.5rem;
  margin-top: 14px;
  border-bottom: 1px solid #e8e8e8;
"
>
Icon Data <span id="icon-count"></span>
</p>
<pre id="file-content"></pre>

<button
id="copy-btn"
class="mt-3 text-sm focus:outline-none flex justify-center px-4 py-2 rounded cursor-pointer bg-white text-teal-700 border border-teal-600"
>
<div class="flex leading-5 gap-1 item-center">
  <i class="mm-1 icon1-copy"></i> Sao chép
</div>
</button>
</div>
</div>

<div class="toast-container" id="toastContainer"></div>
<!-- Thẻ overlay và modal -->
<div class="overlay" id="overlay">
<div class="modal">
<strong
class="text-gray-600"
style="
  font-size: 1.5rem;
  margin-top: 14px;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 1rem;
"
>Icon mới</strong
>
<div class="icon-container" id="newIconContainer"></div>
<i onclick="closeModal()" class="close-btn mm-1 icon1-times"></i>
</div>
</div>

        `;
  }
}

customElements.define("my-header", Header);
