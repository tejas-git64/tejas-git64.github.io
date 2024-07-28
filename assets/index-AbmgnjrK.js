(function () {
	const r = document.createElement("link").relList;
	if (r && r.supports && r.supports("modulepreload")) return;
	for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
	new MutationObserver((e) => {
		for (const t of e)
			if (t.type === "childList")
				for (const u of t.addedNodes)
					u.tagName === "LINK" && u.rel === "modulepreload" && i(u);
	}).observe(document, { childList: !0, subtree: !0 });
	function a(e) {
		const t = {};
		return (
			e.integrity && (t.integrity = e.integrity),
			e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
			e.crossOrigin === "use-credentials"
				? (t.credentials = "include")
				: e.crossOrigin === "anonymous"
				? (t.credentials = "omit")
				: (t.credentials = "same-origin"),
			t
		);
	}
	function i(e) {
		if (e.ep) return;
		e.ep = !0;
		const t = a(e);
		fetch(e.href, t);
	}
})();
document.querySelectorAll('a[href^="#"]').forEach((n) => {
	n.addEventListener("click", function (r) {
		r.preventDefault(),
			document
				.querySelector(this.getAttribute("href"))
				.scrollIntoView({ behavior: "smooth" });
	});
});
const c = document.getElementById("button-text"),
	o = document.getElementById("button-img"),
	s = document.getElementById("send-button");
var d = document.querySelectorAll(
	"#contact-form input, #contact-form textarea"
);
function f() {
	for (let n of d)
		n.value.length > 0
			? ((s.disabled = !1), (s.style.cursor = "pointer"))
			: ((s.disabled = !0), (s.style.cursor = "not-allowed"));
}
function l(n, r = {}) {
	let a = document.querySelectorAll(n);
	(a = Array.from(a)),
		a.forEach((i) => {
			m(i, r);
		});
}
function m(n, r) {
	if (!("IntersectionObserver" in window)) {
		r.cb ? r.cb(n) : entry.target.classList.add("active");
		return;
	}
	new IntersectionObserver((i, e) => {
		i.forEach((t) => {
			t.isIntersecting &&
				(r.cb ? r.cb(n) : t.target.classList.add("animated"),
				e.unobserve(t.target));
		});
	}, r).observe(n);
}
l(".stack-header", { rootMargin: "-10px" });
l(".tech", { rootMargin: "-10px" });
l(".animateFromLeft", { rootMargin: "-10px" });
l(".animateFromRight", { rootMargin: "-10px" });
l(".animateFadeIn", { rootMargin: "-10px" });
l(".animateFadeBottom", { rootMargin: "-10px" });
d.forEach((n) => n.addEventListener("input", f));
s.addEventListener("mouseover", function () {
	(c.style.transform = "translateX(-10px)"),
		(c.style.transition = "all 0.35s ease"),
		(o.style.transition = "all 0.35s ease"),
		(o.style.transform = "translateX(10px)"),
		(o.style.opacity = 1);
});
s.addEventListener("mouseleave", function () {
	(c.style.transform = "translateX(0px)"),
		(o.style.opacity = 0),
		(o.style.transform = "translateX(50px)");
});
s.addEventListener("click", function () {
	(c.style.transform = "translateX(0px)"),
		(o.style.transition = "all 0.8s ease"),
		(o.style.opacity = 1),
		(o.style.transform = "translateX(50px)"),
		(o.style.opacity = 0);
});
