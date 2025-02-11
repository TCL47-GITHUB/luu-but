if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registered: ', registration);
      }).catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Lắng nghe sự kiện beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
// Ngăn không cho sự kiện hiển thị hộp thoại tự động
event.preventDefault();

// Lưu sự kiện lại để kích hoạt sau
deferredPrompt = event;

// Hiển thị nút "Cài đặt ứng dụng"
installBtn.style.display = 'block';

// Khi người dùng nhấn nút "Cài đặt"
installBtn.addEventListener('click', () => {
  // Ẩn nút cài đặt
  installBtn.style.display = 'none';

  // Hiển thị hộp thoại cài đặt PWA
  deferredPrompt.prompt();

  // Kiểm tra người dùng có chấp nhận cài đặt không
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('Người dùng đã chấp nhận cài đặt PWA');
    } else {
      console.log('Người dùng đã từ chối cài đặt PWA');
    }
    deferredPrompt = null;
  });
});
});

// Kiểm tra nếu PWA đã được cài đặt
window.addEventListener('appinstalled', (event) => {
console.log('PWA đã được cài đặt!');
});