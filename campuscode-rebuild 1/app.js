const Auth = {
  getUser() {
    const stored = localStorage.getItem('cc_user');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        // fallback
      }
    }
    return {
      fullName: 'Sai',
      email: 'sai@campuscode.co.in',
      role: 'STUDENT',
      studentId: 'CC-2026-8941',
      teamName: 'TEAM CAMPUSCODE'
    };
  },

  setUser(userData) {
    localStorage.setItem('cc_user', JSON.stringify(userData));
  },

  logout() {
    localStorage.removeItem('cc_user');
    window.location.href = 'login.html';
  }
};


function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 bg-[#111111] text-white text-sm rounded-lg shadow-xl border border-[#deded8] font-mono transform transition-all duration-300 translate-y-4 opacity-0`;
  
  const icon = type === 'success' 
    ? `<span class="inline-block w-2.5 h-2.5 rounded-full bg-[#a8e62e]"></span>` 
    : `<span class="inline-block w-2.5 h-2.5 rounded-full bg-[#7665ff]"></span>`;
  
  toast.innerHTML = `${icon} <span>${message}</span>`;
  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}


function copyToClipboard(text, label = 'Copied to clipboard!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(label);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(label);
}


function initCountdown(targetElementId) {
  const targetEl = document.getElementById(targetElementId);
  if (!targetEl) return;

  function update() {
    const now = new Date();
  
    const target = new Date();
    target.setHours(22, 0, 0, 0);

    const diff = target - now;
    if (diff <= 0) {
      targetEl.innerText = "ROUND 1 ENDED (JUDGING IN PROGRESS)";
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    targetEl.innerText = `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s REMAINING`;
  }

  update();
  setInterval(update, 1000);
}


function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
    document.body.style.overflow = 'auto';
  }
});
