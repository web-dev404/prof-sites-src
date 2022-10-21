const textareas = document.querySelectorAll('.form__textarea');

textareas.forEach(item => {
	item.addEventListener('keyup', e => {
		e.target.style.height = '74px';
		let scHeight = e.target.scrollHeight;
		e.target.style.height = `${scHeight}px`;
		
		if (scHeight >= 100) {
			e.target.style.borderRadius = '50px';
		}

		if (scHeight >= 200) {
			e.target.style.borderRadius = '30px';
		}
	})
})