if (innerWidth >= 800) {
	// After update OptimizedHTML5
	let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree


	// Custom JS

	cx = window.innerWidth / 2
	cy = window.innerHeight / 2

	window.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		mouseCoords(e)
		cursor.classList.remove('hidden')
		follower.classList.remove('hidden')

	})

	const cursor = document.getElementById('cursor'),
		follower = document.getElementById('aura'),
		links = document.querySelectorAll('a, button, i');

	mouseX = 0, mouseY = 0, posX = 0, posY = 0

	function mouseCoords(e) {

		mouseX = e.pageX
		mouseY = e.pageY

	}

	gsap.to({}, .01, {

		repeat: -1,

		onRepeat: () => {

			posX += (mouseX - posX)
			posY += (mouseY - posY)

			gsap.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY
				}
			})

			gsap.set(follower, {
				css: {
					left: posX - 24,
					top: posY - 24
				}
			})

		}

	})

	for (let i = 0; i < links.length; i++) {

		links[i].addEventListener('mouseover', () => {
			cursor.classList.add('active')
			follower.classList.add('active')
		})

		links[i].addEventListener('mouseout', () => {
			cursor.classList.remove('active')
			follower.classList.remove('active')
		})

	}

	const whiteElems = document.querySelectorAll('.white-element');

	whiteElems.forEach(item => {
		item.addEventListener('mouseover', () => {
			cursor.classList.add('black')
			follower.classList.add('black')
		});

		item.addEventListener('mouseout', () => {
			cursor.classList.remove('black')
			follower.classList.remove('black')
		});
	});

	window.addEventListener('mouseout', () => {
		cursor.classList.add('hidden')
		follower.classList.add('hidden')
	})

	window.addEventListener('scroll', () => {
		cursor.classList.add('hidden')
		follower.classList.add('hidden')
	})

	document.addEventListener('click', () => {
		cursor.classList.add('click')

		setTimeout(() => {
			cursor.classList.remove('click')
		}, 500)
	})
}