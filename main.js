import "./style.css";

//Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
const btnTitle = document.getElementById("button-text");
const btnImg = document.getElementById("button-img");
const sendBtn = document.getElementById("send-button");

//Form Validation
var inputs = document.querySelectorAll(
	"#contact-form input, #contact-form textarea"
);

function checkInput() {
	for (let input of inputs) {
		if (input.value.length > 0) {
			sendBtn.disabled = false;
			sendBtn.style.cursor = "pointer";
		} else {
			sendBtn.disabled = true;
			sendBtn.style.cursor = "not-allowed";
		}
	}
}

//Trigger animation on scroll
function scrollTrigger(selector, options = {}) {
	let els = document.querySelectorAll(selector);
	els = Array.from(els);
	els.forEach((el) => {
		addObserver(el, options);
	});
}

//INtersection Observer function
function addObserver(el, options) {
	// Check if `IntersectionObserver` is supported
	if (!("IntersectionObserver" in window)) {
		// Simple fallback
		// The animation/callback will be called immediately so
		// the scroll animation doesn't happen on unsupported browsers
		if (options.cb) {
			options.cb(el);
		} else {
			entry.target.classList.add("active");
		}
		// We don't need to execute the rest of the code
		return;
	}
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (options.cb) {
					options.cb(el);
				} else {
					entry.target.classList.add("animated");
				}
				observer.unobserve(entry.target);
			}
		});
	}, options);
	observer.observe(el);
}

scrollTrigger(".stack-header", {
	rootMargin: "-100px",
});
scrollTrigger(".tech", {
	rootMargin: "-20px",
});
scrollTrigger(".animateFromLeft", {
	rootMargin: "-20px",
});
scrollTrigger(".animateFromRight", {
	rootMargin: "-20px",
});
scrollTrigger(".animateFadeIn", {
	rootMargin: "-20px",
});
scrollTrigger(".animateFadeBottom", {
	rootMargin: "-20px",
});

inputs.forEach((input) => input.addEventListener("input", checkInput));

sendBtn.addEventListener("mouseover", function () {
	btnTitle.style.transform = "translateX(-20px)";
	btnTitle.style.transition = "all 0.35s ease";
	btnImg.style.transition = "all 0.3s ease";
	btnImg.style.transform = "translateX(70px)";
	btnImg.style.opacity = 1;
});
sendBtn.addEventListener("mouseleave", function () {
	btnTitle.style.transform = "translateX(0px)";
	btnImg.style.opacity = 0;
	btnImg.style.transform = "translateX(50px)";
});

sendBtn.addEventListener("click", function () {
	btnTitle.style.transform = "translateX(0px)";
	btnImg.style.transition = "all 0.8s ease";
	btnImg.style.opacity = 1;
	btnImg.style.transform = "translateX(150px)";
	btnImg.style.opacity = 0;
});
