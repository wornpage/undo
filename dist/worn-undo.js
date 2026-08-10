//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = Array.isArray, r = Array.prototype.indexOf, i = Array.prototype.includes, a = Array.from, o = Object.keys, s = Object.defineProperty, c = Object.getOwnPropertyDescriptor, l = Object.prototype, u = Array.prototype, d = Object.getPrototypeOf, f = Object.isExtensible, p = () => {};
function m(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function h() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var g = 1024, _ = 2048, v = 4096, y = 8192, ee = 16384, te = 32768, ne = 1 << 25, re = 65536, ie = 1 << 19, ae = 1 << 20, oe = 65536, se = 1 << 21, ce = 1 << 22, le = 1 << 23, ue = Symbol("$state"), de = Symbol("legacy props"), fe = Symbol("attributes"), pe = Symbol("class"), me = Symbol("style"), he = Symbol("text"), ge = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
globalThis.document?.contentType;
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function _e() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ve() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ye() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function be(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function xe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Se() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ce() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function we() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Te() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ee(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function De() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var b = !1;
function Oe(e) {
	b = e;
}
var x;
function S(t) {
	if (t === null) throw Ee(), e;
	return x = t;
}
function ke() {
	return S(/* @__PURE__ */ L(x));
}
function Ae(t) {
	if (b) {
		if (/* @__PURE__ */ L(x) !== null) throw Ee(), e;
		x = t;
	}
}
function je(e = 1) {
	if (b) {
		for (var t = e, n = x; t--;) n = /* @__PURE__ */ L(n);
		x = n;
	}
}
function Me(e = !0) {
	for (var t = 0, n = x;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ L(n);
		e && n.remove(), n = i;
	}
}
function Ne(t) {
	if (!t || t.nodeType !== 8) throw Ee(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Pe(e) {
	return e === this.v;
}
function Fe(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ie(e) {
	return !Fe(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var C = null;
function w(e) {
	C = e;
}
function Le(e, t = !1, n) {
	C = {
		p: C,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: null
	};
}
function Re(e) {
	var t = C, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) $t(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, C = t.p, e ?? {};
}
function ze() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var T = [];
function Be() {
	var e = T;
	T = [], m(e);
}
function E(e) {
	if (T.length === 0 && !_t) {
		var t = T;
		queueMicrotask(() => {
			t === T && Be();
		});
	}
	T.push(e);
}
function Ve() {
	for (; T.length > 0;) Be();
}
function He(e) {
	var t = G;
	if (t === null) return H.f |= le, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	D(e, t);
}
function D(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ue = ~(_ | v | g);
function O(e, t) {
	e.f = e.f & Ue | t;
}
function We(e) {
	e.f & 512 || e.deps === null ? O(e, g) : O(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ge(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= oe, Ge(t.deps));
}
function Ke(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ge(e.deps), O(e, g);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var qe = !1;
function Je(e) {
	var t = qe;
	try {
		return qe = !1, [e(), qe];
	} finally {
		qe = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Ye(e) {
	var t = H, n = G;
	W(null), K(null);
	try {
		return e();
	} finally {
		W(t), K(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Xe(e) {
	let t = 0, n = Mt(0), r;
	return () => {
		Zt() && ($(n), an(() => (t === 0 && (r = Pn(() => e(() => It(n)))), t += 1, () => {
			E(() => {
				--t, t === 0 && (r?.(), r = void 0, It(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ze = re | ie;
function Qe(e, t, n, r) {
	new $e(e, t, n, r);
}
var $e = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = b ? x : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = Xe(() => (this.#m = Mt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = sn(() => {
			if (b) {
				let e = this.#t;
				ke();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ze), b && (this.#e = x);
	}
	#g() {
		try {
			this.#a = z(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		E(r), t && (this.#s = z(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				De();
				return;
			}
			t = !0, n && we(), this.#s !== null && pn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					D(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = z(() => e(this.#e)), E(() => {
			var e = this.#c = document.createDocumentFragment(), t = I();
			e.append(t), this.#a = this.#S(() => z(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, pn(this.#o, () => {
				this.#o = null;
			}), this.#x(k));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = z(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				_n(this.#a, e);
				let t = this.#n.pending;
				this.#o = z(() => t(this.#e));
			} else this.#x(k);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ke(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = G, n = H, r = C;
		K(this.#i), W(this.#i), w(this.#i.ctx);
		try {
			return Ct.ensure(), e();
		} catch (e) {
			return He(e), null;
		} finally {
			K(t), W(n), w(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && pn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, E(() => {
			this.#d = !1, this.#m && Pt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), $(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		k?.is_fork ? (this.#a && k.skip_effect(this.#a), this.#o && k.skip_effect(this.#o), this.#s && k.skip_effect(this.#s), k.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (B(this.#a), null), this.#o &&= (B(this.#o), null), this.#s &&= (B(this.#s), null), b && (S(this.#t), je(), S(Me()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return z(() => {
						var r = G;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return D(e, this.#i.parent), null;
				}
			}));
		};
		E(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				D(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => D(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function et(e, t, n, r) {
	let i = ze() ? it : ct;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = G, c = tt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				D(e, s);
			}
			nt();
		}
	}
	var d = rt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ ot(e))).then(u).catch((e) => D(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), nt();
	}) : f();
}
function tt() {
	var e = G, t = H, n = C, r = k;
	return function(i = !0) {
		K(e), W(t), w(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function nt(e = !0) {
	K(null), W(null), w(null), e && k?.deactivate();
}
function rt() {
	var e = G, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function it(e) {
	var n = 2 | _;
	return G !== null && (G.f |= ie), {
		ctx: C,
		deps: null,
		effects: null,
		equals: Pe,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: G,
		ac: null
	};
}
var at = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function ot(e, n, r) {
	let i = G;
	i === null && _e();
	var a = void 0, o = Mt(t), s = !H, c = /* @__PURE__ */ new Set();
	return rn(() => {
		var t = G, n = h();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ge && n.reject(e);
			}).finally(nt);
		} catch (e) {
			n.reject(e), nt();
		}
		var r = k;
		if (s) {
			if (t.f & 32768) var l = rt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(at);
			else for (let e of c.values()) e.reject(at);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== at && (r.activate(), t ? (o.f |= le, Pt(o, t)) : (o.f & 8388608 && (o.f ^= le), Pt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Qt(() => {
		for (let e of c) e.reject(at);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function st(e) {
	let t = /* @__PURE__ */ it(e);
	return xn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function ct(e) {
	let t = /* @__PURE__ */ it(e);
	return t.equals = Ie, t;
}
function lt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) B(t[n]);
	}
}
function ut(e) {
	var n, r = G, i = e.parent;
	if (!V && i !== null && e.v !== t && i.f & 24576) return Te(), e.v;
	K(i);
	try {
		e.f &= ~oe, lt(e), n = On(e);
	} finally {
		K(r);
	}
	return n;
}
function dt(e) {
	var t = ut(e);
	if (!e.equals(t) && (e.wv = Tn(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), ht?.capture(e, t, !0)), e.deps === null))) {
		O(e, g);
		return;
	}
	V || (A === null ? We(e) : (Zt() || k?.is_fork) && A.set(e, t));
}
function ft(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Ye(() => {
		t.ac.abort(ge), t.ac = null;
	}), t.fn !== null && (t.teardown = p), An(t, 0), ln(t));
}
function pt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && jn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var mt = null, k = null, ht = null, A = null, gt = null, _t = !1, vt = !1, yt = null, bt = null, xt = 0, St = 1, Ct = class e {
	id = St++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		mt === null ? mt = this : (mt.#n = this, this.#t = mt), mt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) O(r, _), t(r);
			for (r of n.m) O(r, v), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, xt++ > 1e3 && (this.#x(), Tt());
		for (let e of this.#u) this.#d.delete(e), O(e, _), this.schedule(e);
		for (let e of this.#d) O(e, v), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = yt = [], r = [], i = bt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw kt(e), this.#h() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (yt = null, bt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Ot(e, t);
			i.length > 0 && k.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), ht = this, Et(r), Et(n), ht = null, this.#s?.resolve();
		var s = k;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= g;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= g : i & 4 ? t.push(r) : En(r) && (i & 16 && this.#d.add(r), jn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), O(i, _), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), k = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Ke(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), A?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, A = null;
	}
	flush() {
		try {
			vt = !0, k = this, this.#g();
		} finally {
			xt = 0, gt = null, yt = null, bt = null, vt = !1, k = null, A = null, M.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(at);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, E(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= h()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!vt && !_t && E(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		A = null;
	}
	schedule(e) {
		if (gt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (yt !== null && t === G && (H === null || !(H.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= g;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? mt = e : t.#t = e, this.linked = !1;
		}
	}
};
function wt(e) {
	var t = _t;
	_t = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (Ve(), k === null) return n;
			k.flush();
		}
	} finally {
		_t = t;
	}
}
function Tt() {
	try {
		ve();
	} catch (e) {
		D(e, gt);
	}
}
var j = null;
function Et(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && En(r) && (j = /* @__PURE__ */ new Set(), jn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && fn(r), j?.size > 0)) {
				M.clear();
				for (let e of j) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) j.has(n) && (j.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || jn(n);
					}
				}
				j.clear();
			}
		}
		j = null;
	}
}
function Dt(e) {
	k.schedule(e);
}
function Ot(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), O(e, g);
		for (var n = e.first; n !== null;) Ot(n, t), n = n.next;
	}
}
function kt(e) {
	O(e, g);
	for (var t = e.first; t !== null;) kt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var At = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), jt = !1;
function Mt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Pe,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function N(e, t) {
	let n = Mt(e, t);
	return xn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Nt(e, t = !1, n = !0) {
	let r = Mt(e);
	return t || (r.equals = Ie), r;
}
function P(e, t, n = !1) {
	return H !== null && (!U || H.f & 131072) && ze() && H.f & 4325394 && (q === null || !q.has(e)) && Ce(), Pt(e, n ? F(t) : t, bt);
}
function Pt(e, t, n = null) {
	if (!e.equals(t)) {
		M.set(e, V ? t : e.v);
		var r = Ct.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && ut(t), A === null && We(t);
		}
		e.wv = Tn(), Lt(e, _, n), ze() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? Sn([e]) : X.push(e)), !r.is_fork && At.size > 0 && !jt && Ft();
	}
	return t;
}
function Ft() {
	jt = !1;
	for (let e of At) {
		e.f & 1024 && O(e, v);
		let t;
		try {
			t = En(e);
		} catch {
			t = !0;
		}
		t && jn(e);
	}
	At.clear();
}
function It(e) {
	P(e, e.v + 1);
}
function Lt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = ze(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === G)) {
			var l = (c & _) === 0;
			if (l && O(s, t), c & 131072) At.add(s);
			else if (c & 2) {
				var u = s;
				A?.delete(u), c & 65536 || (c & 512 && (G === null || !(G.f & 2097152)) && (s.f |= oe), Lt(u, v, n));
			} else if (l) {
				var d = s;
				c & 16 && j !== null && j.add(d), n === null ? Dt(d) : n.push(d);
			}
		}
	}
}
function F(e) {
	if (typeof e != "object" || !e || ue in e) return e;
	let r = d(e);
	if (r !== l && r !== u) return e;
	var i = /* @__PURE__ */ new Map(), a = n(e), o = /* @__PURE__ */ N(0), s = null, f = Q, p = (e) => {
		if (Q === f) return e();
		var t = H, n = Q;
		W(null), wn(f);
		var r = e();
		return W(t), wn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ N(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && xe();
			var r = i.get(t);
			return r === void 0 ? p(() => {
				var e = /* @__PURE__ */ N(n.value, s);
				return i.set(t, e), e;
			}) : P(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = p(() => /* @__PURE__ */ N(t, s));
					i.set(n, e), It(o);
				}
			} else P(r, t), It(o);
			return !0;
		},
		get(n, r, a) {
			if (r === ue) return e;
			var o = i.get(r), l = r in n;
			if (o === void 0 && (!l || c(n, r)?.writable) && (o = p(() => /* @__PURE__ */ N(F(l ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var u = $(o);
				return u === t ? void 0 : u;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = $(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === ue) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || G !== null && (!a || c(e, n)?.writable)) && (r === void 0 && (r = p(() => /* @__PURE__ */ N(a ? F(e[n]) : t, s)), i.set(n, r)), $(r) === t) ? !1 : a;
		},
		set(e, n, r, l) {
			var u = i.get(n), d = n in e;
			if (a && n === "length") for (var f = r; f < u.v; f += 1) {
				var m = i.get(f + "");
				m === void 0 ? f in e && (m = p(() => /* @__PURE__ */ N(t, s)), i.set(f + "", m)) : P(m, t);
			}
			if (u === void 0) (!d || c(e, n)?.writable) && (u = p(() => /* @__PURE__ */ N(void 0, s)), P(u, F(r)), i.set(n, u));
			else {
				d = u.v !== t;
				var h = p(() => F(r));
				P(u, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(l, r), !d) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && P(_, v + 1);
				}
				It(o);
			}
			return !0;
		},
		ownKeys(e) {
			$(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			Se();
		}
	});
}
var Rt, zt, Bt, Vt;
function Ht() {
	if (Rt === void 0) {
		Rt = window, zt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Bt = c(t, "firstChild").get, Vt = c(t, "nextSibling").get, f(e) && (e[pe] = void 0, e[fe] = null, e[me] = void 0, e.__e = void 0), f(n) && (n[he] = void 0);
	}
}
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Ut(e) {
	return Bt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function L(e) {
	return Vt.call(e);
}
function Wt(e, t) {
	if (!b) return /* @__PURE__ */ Ut(e);
	var n = /* @__PURE__ */ Ut(x);
	if (n === null) n = x.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), S(r), r;
	}
	return t && Yt(n), S(n), n;
}
function Gt(e, t = 1, n = !1) {
	let r = b ? x : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ L(r);
	if (!b) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), S(a), a;
		}
		Yt(r);
	}
	return S(r), r;
}
function Kt(e) {
	e.textContent = "";
}
function qt() {
	return !1;
}
function Jt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Yt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Xt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function R(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= y);
	var r = {
		ctx: C,
		deps: null,
		nodes: null,
		f: e | _ | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	k?.register_created_effect(r);
	var i = r;
	if (e & 4) yt === null ? Ct.ensure().schedule(r) : yt.push(r);
	else if (t !== null) {
		try {
			jn(r);
		} catch (e) {
			throw B(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= re));
	}
	if (i !== null && (i.parent = n, n !== null && Xt(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Zt() {
	return H !== null && !U;
}
function Qt(e) {
	let t = R(8, null);
	return O(t, g), t.teardown = e, t;
}
function $t(e) {
	return R(4 | ae, e);
}
function en(e) {
	Ct.ensure();
	let t = R(64 | ie, e);
	return () => {
		B(t);
	};
}
function tn(e) {
	Ct.ensure();
	let t = R(64 | ie, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? pn(t, () => {
			B(t), n(void 0);
		}) : (B(t), n(void 0));
	});
}
function nn(e) {
	return R(4, e);
}
function rn(e) {
	return R(ce | ie, e);
}
function an(e, t = 0) {
	return R(8 | t, e);
}
function on(e, t = [], n = [], r = []) {
	et(r, t, n, (t) => {
		R(8, () => {
			e(...t.map($));
		});
	});
}
function sn(e, t = 0) {
	return R(16 | t, e);
}
function z(e) {
	return R(32 | ie, e);
}
function cn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = V, n = H;
		bn(!0), W(null);
		try {
			t.call(null);
		} finally {
			bn(e), W(n);
		}
	}
}
function ln(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Ye(() => {
			e.abort(ge);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : B(n, t), n = r;
	}
}
function un(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || B(t), t = n;
	}
}
function B(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (dn(e.nodes.start, e.nodes.end), n = !0), e.f |= ne, ln(e, t && !n), An(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	cn(e), e.f ^= ne, e.f |= ee;
	var i = e.parent;
	i !== null && i.first !== null && fn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function dn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ L(e);
		e.remove(), e = n;
	}
}
function fn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function pn(e, t, n = !0) {
	var r = [];
	mn(e, r, !0);
	var i = () => {
		n && B(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function mn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= y;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				mn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function hn(e) {
	gn(e, !0);
}
function gn(e, t) {
	if (e.f & 8192) {
		e.f ^= y, e.f & 1024 || (O(e, _), Ct.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			gn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function _n(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ L(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var vn = null, yn = !1, V = !1;
function bn(e) {
	V = e;
}
var H = null, U = !1;
function W(e) {
	H = e;
}
var G = null;
function K(e) {
	G = e;
}
var q = null;
function xn(e) {
	H !== null && (q ??= /* @__PURE__ */ new Set()).add(e);
}
var J = null, Y = 0, X = null;
function Sn(e) {
	X = e;
}
var Cn = 1, Z = 0, Q = Z;
function wn(e) {
	Q = e;
}
function Tn() {
	return ++Cn;
}
function En(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~oe), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (En(a) && dt(a), a.wv > e.wv) return !0;
		}
		t & 512 && A === null && O(e, g);
	}
	return !1;
}
function Dn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(q !== null && q.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Dn(a, t, !1) : t === a && (n ? O(a, _) : a.f & 1024 && O(a, v), Dt(a));
	}
}
function On(e) {
	var t = J, n = Y, r = X, i = H, a = q, o = C, s = U, c = Q, l = e.f;
	J = null, Y = 0, X = null, H = l & 96 ? null : e, q = null, w(e.ctx), U = !1, Q = ++Z, e.ac !== null && (Ye(() => {
		e.ac.abort(ge);
	}), e.ac = null);
	try {
		e.f |= se;
		var u = e.fn, d = u();
		e.f |= te;
		var f = e.deps, p = k?.is_fork;
		if (J !== null) {
			var m;
			if (p || An(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (Zt() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (An(e, Y), f.length = Y);
		if (ze() && X !== null && !U && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) Dn(X[m], e);
		if (i !== null && i !== e) {
			if (Z++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Z;
			if (t !== null) for (let e of t) e.rv = Z;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= le), d;
	} catch (e) {
		return He(e);
	} finally {
		e.f ^= se, J = t, Y = n, X = r, H = i, q = a, w(o), U = s, Q = c;
	}
}
function kn(e, n) {
	let a = n.reactions;
	if (a !== null) {
		var o = r.call(a, e);
		if (o !== -1) {
			var s = a.length - 1;
			s === 0 ? a = n.reactions = null : (a[o] = a[s], a.pop());
		}
	}
	if (a === null && n.f & 2 && (J === null || !i.call(J, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~oe), c.v !== t && We(c), c.ac !== null && Ye(() => {
			c.ac.abort(ge), c.ac = null, O(c, _);
		}), ft(c), An(c, 0);
	}
}
function An(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) kn(e, n[r]);
}
function jn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		O(e, g);
		var n = G, r = yn;
		G = e, yn = !(t & 96);
		try {
			t & 16777232 ? un(e) : ln(e), cn(e);
			var i = On(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Cn;
		} finally {
			yn = r, G = n;
		}
	}
}
function $(e) {
	var t = !!(e.f & 2);
	if (vn?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !q.has(e))) {
		var n = H.deps;
		if (H.f & 2097152) e.rv < Z && (e.rv = Z, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			H.deps ??= [], i.call(H.deps, e) || H.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [H] : i.call(r, H) || r.push(H);
		}
	}
	if (V && M.has(e)) return M.get(e);
	if (t) {
		var a = e;
		if (V) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || Nn(a)) && (o = ut(a)), M.set(a, o), o;
		}
		var s = !(a.f & 512) && !U && H !== null && (yn || !!(H.f & 512)), c = (a.f & te) === 0;
		En(a) && (s && (a.f |= 512), dt(a)), s && !c && (pt(a), Mn(a));
	}
	if (A?.has(e)) return A.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Mn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (pt(t), Mn(t));
}
function Nn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (M.has(t) || t.f & 2 && Nn(t)) return !0;
	return !1;
}
function Pn(e) {
	var t = U;
	try {
		return U = !0, e();
	} finally {
		U = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Fn = Symbol("events"), In = /* @__PURE__ */ new Set(), Ln = /* @__PURE__ */ new Set();
function Rn(e, t, n) {
	(t[Fn] ??= {})[e] = n;
}
function zn(e) {
	for (var t = 0; t < e.length; t++) In.add(e[t]);
	for (var n of Ln) n(e);
}
var Bn = null;
function Vn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Bn = e;
	var o = 0, c = Bn === e && e[Fn];
	if (c) {
		var l = i.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[Fn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		s(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = H, f = G;
		W(null), K(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Fn]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Fn] = t, delete e.currentTarget, W(d), K(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Hn = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Un(e) {
	return Hn?.createHTML(e) ?? e;
}
function Wn(e) {
	var t = Jt("template");
	return t.innerHTML = Un(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Gn(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Kn(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (b) return Gn(x, null), x;
		i === void 0 && (i = Wn(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Ut(i)));
		var t = r || zt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Ut(t), s = t.lastChild;
			Gn(o, s);
		} else Gn(t, t);
		return t;
	};
}
function qn(e, t) {
	if (b) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = x), ke();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Jn = ["touchstart", "touchmove"];
function Yn(e) {
	return Jn.includes(e);
}
function Xn(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[he] ??= e.nodeValue) && (e[he] = n, e.nodeValue = `${n}`);
}
function Zn(e, t) {
	return er(e, t);
}
function Qn(t, n) {
	Ht(), n.intro = n.intro ?? !1;
	let r = n.target, i = b, a = x;
	try {
		for (var o = /* @__PURE__ */ Ut(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ L(o);
		if (!o) throw e;
		Oe(!0), S(o);
		let i = er(t, {
			...n,
			anchor: o
		});
		return Oe(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && ye(), Ht(), Kt(r), Oe(!1), Zn(t, n);
	} finally {
		Oe(i), S(a);
	}
}
var $n = /* @__PURE__ */ new Map();
function er(t, { target: n, anchor: r, props: i = {}, events: o, context: s, intro: c = !0, transformError: l }) {
	Ht();
	var u = void 0, d = tn(() => {
		var c = r ?? n.appendChild(I());
		Qe(c, { pending: () => {} }, (n) => {
			Le({});
			var r = C;
			if (s && (r.c = s), o && (i.$$events = o), b && Gn(n, null), u = t(n, i) || {}, b && (G.nodes.end = x, x === null || x.nodeType !== 8 || x.data !== "]")) throw Ee(), e;
			Re();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = Yn(r);
					for (let e of [n, document]) {
						var a = $n.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), $n.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Vn, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(a(In)), Ln.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = $n.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, Vn), t.delete(e), t.size === 0 && $n.delete(r)) : t.set(e, i);
			}
			Ln.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return tr.set(u, d), u;
}
var tr = /* @__PURE__ */ new WeakMap();
function nr(e, t) {
	let n = tr.get(e);
	return n ? (tr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var rr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) hn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (hn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (B(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						_n(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else B(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), pn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (B(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = qt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = I();
				i.append(a), this.#n.set(e, {
					effect: z(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, z(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else b && (this.anchor = x), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function ir(e, t, n = !1) {
	var r;
	b && (r = x, ke());
	var i = new rr(e), a = n ? re : 0;
	function o(e, t) {
		if (b) {
			var n = Ne(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Me();
				S(a), i.anchor = a, Oe(!1), i.ensure(e, t), Oe(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	sn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function ar(e, t) {
	nn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = Jt("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function or(e, t) {
	return e === t || e?.[ue] === t;
}
function sr(e = {}, t, n, r) {
	var i = C.r, a = G;
	return nn(() => {
		var o, s;
		return an(() => {
			o = s, s = r?.() || [], Pn(() => {
				or(n(...s), e) || (t(e, ...s), o && or(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && or(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function cr(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, l = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ it(r), $(u)) : (l && (l = !1, s = o ? Pn(r) : r), s);
	let f;
	if (a) {
		var p = ue in e || de in e;
		f = c(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = Je(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && be(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (l = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? it : ct)(() => (v = !1, g()));
	a && $(y);
	var ee = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? $(y) : i && a ? F(e) : e;
			return P(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return V && v || ee.f & 16384 ? y.v : $(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function lr(e) {
	return new ur(e);
}
var ur = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Nt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return $(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === de || ($(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return P(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Qn : Zn)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && wt(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && s(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			nr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, dr;
typeof HTMLElement == "function" && (dr = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = Jt("slot");
					e !== "default" && (n.name = e), qn(t, n);
				};
			}
			let t = {}, n = pr(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = fr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = lr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = en(() => {
				an(() => {
					this.$$r = !0;
					for (let e of o(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = fr(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = fr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return o(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function fr(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function pr(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function mr(e, t, n, r, i, a) {
	let l = class extends dr {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return o(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return o(t).forEach((e) => {
		s(l.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = fr(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (c(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		s(l.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (l = a(l)), e.element = l, l;
}
//#endregion
//#region src/types.ts
var hr = {
	done: "Marked as done",
	block: "Set blocker",
	unblock: "Cleared blocker",
	open: "Reopened",
	start: "Started",
	create: "Created",
	memory: "Added memory"
}, gr = /* @__PURE__ */ Kn("<button type=\"button\" class=\"wrn-undo-btn svelte-1nnfbw9\" title=\"Redo\">Redo</button>"), _r = /* @__PURE__ */ Kn("<div class=\"wrn-undo-receipt svelte-1nnfbw9\" role=\"status\"><span class=\"wrn-undo-icon svelte-1nnfbw9\">↩</span> <div class=\"wrn-undo-body svelte-1nnfbw9\"><strong class=\"svelte-1nnfbw9\"> </strong> <small class=\"svelte-1nnfbw9\"> </small></div> <div class=\"wrn-undo-actions svelte-1nnfbw9\"><button type=\"button\" class=\"wrn-undo-btn svelte-1nnfbw9\" title=\"Undo (⌘Z)\">Undo</button> <!></div></div>"), vr = {
	hash: "svelte-1nnfbw9",
	code: ".wrn-undo-receipt.svelte-1nnfbw9 {display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--wrn-undo-bg, #fdfbf7);border:1px solid var(--wrn-undo-border, #e2ddd5);border-radius:var(--wrn-undo-radius, 6px);font-family:var(--wrn-undo-font, inherit);font-size:13px;color:var(--wrn-undo-text, #21322b);box-shadow:0 2px 8px rgba(0,0,0,0.06);}.wrn-undo-icon.svelte-1nnfbw9 {font-size:16px;opacity:0.7;flex-shrink:0;}.wrn-undo-body.svelte-1nnfbw9 {flex:1;display:grid;gap:2px;}.wrn-undo-body.svelte-1nnfbw9 strong:where(.svelte-1nnfbw9) {font-size:13px;font-weight:600;}.wrn-undo-body.svelte-1nnfbw9 small:where(.svelte-1nnfbw9) {font-size:11px;color:var(--wrn-undo-muted, #63746a);}.wrn-undo-actions.svelte-1nnfbw9 {display:flex;gap:4px;}.wrn-undo-btn.svelte-1nnfbw9 {padding:4px 10px;border:1px solid var(--wrn-undo-border, #e2ddd5);border-radius:4px;background:transparent;cursor:pointer;font:inherit;font-size:12px;color:var(--wrn-undo-text, #21322b);min-height:32px;}.wrn-undo-btn.svelte-1nnfbw9:hover {background:var(--wrn-undo-hover, #eaf4f0);}"
};
function yr(e, t) {
	Le(t, !0), ar(e, vr);
	let n = cr(t, "canRedo", 3, !1), r = /* @__PURE__ */ st(() => hr[t.action.type] ?? t.action.label ?? "Action");
	var i = _r(), a = Gt(Wt(i), 2), o = Wt(a), s = Wt(o, !0);
	Ae(o);
	var c = Gt(o, 2), l = Wt(c, !0);
	Ae(c), Ae(a);
	var u = Gt(a, 2), d = Wt(u), f = Gt(d, 2), p = (e) => {
		var n = gr();
		Rn("click", n, () => t.onredo?.()), qn(e, n);
	};
	ir(f, (e) => {
		n() && e(p);
	}), Ae(u), Ae(i), on((e) => {
		Xn(s, $(r)), Xn(l, e);
	}, [() => t.action.packId ? `${t.action.packId.substring(0, 24)}` : ""]), Rn("click", d, () => t.onundo?.(t.action)), qn(e, i), Re();
}
zn(["click"]);
//#endregion
//#region src/UndoElement.svelte
var br = /* @__PURE__ */ Kn("<div style=\"display:contents\"><!></div>");
function xr(e, t) {
	Le(t, !0);
	let n = cr(t, "label", 7, "Action"), r = cr(t, "packid", 7, ""), i = cr(t, "canredo", 7, !1), a;
	function o(e, t) {
		a?.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !0
		}));
	}
	let s = /* @__PURE__ */ st(() => ({
		type: "action",
		packId: r(),
		label: n(),
		createdAt: Date.now()
	}));
	var c = {
		get label() {
			return n();
		},
		set label(e = "Action") {
			n(e), wt();
		},
		get packid() {
			return r();
		},
		set packid(e = "") {
			r(e), wt();
		},
		get canredo() {
			return i();
		},
		set canredo(e = !1) {
			i(e), wt();
		}
	}, l = br();
	return yr(Wt(l), {
		get action() {
			return $(s);
		},
		get canRedo() {
			return i();
		},
		onundo: () => o("wrn-undo", { action: $(s) }),
		onredo: () => o("wrn-redo", {})
	}), Ae(l), sr(l, (e) => a = e, () => a), qn(e, l), Re(c);
}
customElements.define("worn-undo", mr(xr, {
	label: {},
	packid: {},
	canredo: { type: "Boolean" }
}, [], []));
//#endregion
export { xr as default };
