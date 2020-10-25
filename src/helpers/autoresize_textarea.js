function resize({ target }) {
	if(!target) return;	
  target.style.height = "1px";
	target.style.height = (+target.scrollHeight)+"px";	
}
  
export function autoresize_textarea(el) {
	resize({ target: el });
	el.style.overflow = 'hidden';
	el.addEventListener('input', resize);
	
	return {
		destroy: () => el.removeEventListener('input', resize)
	}
}