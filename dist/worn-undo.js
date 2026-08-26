//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, h = () => {};
function g(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function ee() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var _ = 1024, v = 2048, y = 4096, te = 8192, ne = 16384, re = 32768, ie = 1 << 25, ae = 65536, oe = 1 << 19, se = 1 << 20, ce = 65536, le = 1 << 21, ue = 1 << 22, de = 1 << 23, fe = Symbol("$state"), pe = Symbol("legacy props"), me = Symbol(""), he = Symbol("attributes"), ge = Symbol("class"), _e = Symbol("style"), ve = Symbol("text"), ye = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), be = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function xe() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Se() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ce() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function we(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Te() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ke() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ae(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function je() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var b = !1;
function x(e) {
	b = e;
}
var S;
function C(t) {
	if (t === null) throw Ae(), e;
	return S = t;
}
function Me() {
	return C(/* @__PURE__ */ L(S));
}
function Ne(t) {
	if (b) {
		if (/* @__PURE__ */ L(S) !== null) throw Ae(), e;
		S = t;
	}
}
function Pe(e = 1) {
	if (b) {
		for (var t = e, n = S; t--;) n = /* @__PURE__ */ L(n);
		S = n;
	}
}
function Fe(e = !0) {
	for (var t = 0, n = S;;) {
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
function Ie(t) {
	if (!t || t.nodeType !== 8) throw Ae(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Le(e) {
	return e === this.v;
}
function Re(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function ze(e) {
	return !Re(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var w = null;
function Be(e) {
	w = e;
}
function Ve(e, t = !1, n) {
	w = {
		p: w,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: null
	};
}
function He(e) {
	var t = w, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) rn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, w = t.p, e ?? {};
}
function Ue() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var T = [];
function We() {
	var e = T;
	T = [], g(e);
}
function E(e) {
	if (T.length === 0 && !xt) {
		var t = T;
		queueMicrotask(() => {
			t === T && We();
		});
	}
	T.push(e);
}
function Ge() {
	for (; T.length > 0;) We();
}
function Ke(e) {
	var t = G;
	if (t === null) return H.f |= de, e;
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
var qe = ~(v | y | _);
function O(e, t) {
	e.f = e.f & qe | t;
}
function Je(e) {
	e.f & 512 || e.deps === null ? O(e, _) : O(e, y);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ye(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ce, Ye(t.deps));
}
function Xe(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ye(e.deps), O(e, _);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Ze = !1;
function Qe(e) {
	var t = Ze;
	try {
		return Ze = !1, [e(), Ze];
	} finally {
		Ze = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function $e(e) {
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
function et(e) {
	let t = 0, n = It(0), r;
	return () => {
		tn() && ($(n), ln(() => (t === 0 && (r = Rn(() => e(() => Bt(n)))), t += 1, () => {
			E(() => {
				--t, t === 0 && (r?.(), r = void 0, Bt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var tt = ae | oe;
function nt(e, t, n, r) {
	new rt(e, t, n, r);
}
var rt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = b ? S : null;
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
	#h = et(() => (this.#m = It(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = dn(() => {
			if (b) {
				let e = this.#t;
				Me();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, tt), b && (this.#e = S);
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
				je();
				return;
			}
			t = !0, n && Oe(), this.#s !== null && _n(this.#s, () => {
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
			e.append(t), this.#a = this.#S(() => z(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, _n(this.#o, () => {
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
				xn(this.#a, e);
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
		Xe(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = G, n = H, r = w;
		K(this.#i), W(this.#i), Be(this.#i.ctx);
		try {
			return Dt.ensure(), e();
		} catch (e) {
			return Ke(e), null;
		} finally {
			K(t), W(n), Be(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && _n(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, E(() => {
			this.#d = !1, this.#m && Rt(this.#m, this.#l);
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
		this.#a &&= (B(this.#a), null), this.#o &&= (B(this.#o), null), this.#s &&= (B(this.#s), null), b && (C(this.#t), Pe(), C(Fe()));
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
function it(e, t, n, r) {
	let i = Ue() ? ct : ft;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = G, c = at(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				D(e, s);
			}
			ot();
		}
	}
	var d = st();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ ut(e))).then(u).catch((e) => D(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), ot();
	}) : f();
}
function at() {
	var e = G, t = H, n = w, r = k;
	return function(i = !0) {
		K(e), W(t), Be(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function ot(e = !0) {
	K(null), W(null), Be(null), e && k?.deactivate();
}
function st() {
	var e = G, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function ct(e) {
	var n = 2 | v;
	return G !== null && (G.f |= oe), {
		ctx: w,
		deps: null,
		effects: null,
		equals: Le,
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
var lt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function ut(e, n, r) {
	let i = G;
	i === null && xe();
	var a = void 0, o = It(t), s = !H, c = /* @__PURE__ */ new Set();
	return cn(() => {
		var t = G, n = ee();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ye && n.reject(e);
			}).finally(ot);
		} catch (e) {
			n.reject(e), ot();
		}
		var r = k;
		if (s) {
			if (t.f & 32768) var l = st();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(lt);
			else for (let e of c.values()) e.reject(lt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== lt && (r.activate(), t ? (o.f |= de, Rt(o, t)) : (o.f & 8388608 && (o.f ^= de), Rt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), nn(() => {
		for (let e of c) e.reject(lt);
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
function dt(e) {
	let t = /* @__PURE__ */ ct(e);
	return Tn(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function ft(e) {
	let t = /* @__PURE__ */ ct(e);
	return t.equals = ze, t;
}
function pt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) B(t[n]);
	}
}
function mt(e) {
	var n, r = G, i = e.parent;
	if (!V && i !== null && e.v !== t && i.f & 24576) return ke(), e.v;
	K(i);
	try {
		e.f &= ~ce, pt(e), n = Mn(e);
	} finally {
		K(r);
	}
	return n;
}
function ht(e) {
	var t = mt(e);
	if (!e.equals(t) && (e.wv = kn(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), yt?.capture(e, t, !0)), e.deps === null))) {
		O(e, _);
		return;
	}
	V || (A === null ? Je(e) : (tn() || k?.is_fork) && A.set(e, t));
}
function gt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && $e(() => {
		t.ac.abort(ye), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Pn(t, 0), pn(t));
}
function _t(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Fn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var vt = null, k = null, yt = null, A = null, bt = null, xt = !1, St = !1, Ct = null, wt = null, Tt = 0, Et = 1, Dt = class e {
	id = Et++;
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
		vt === null ? vt = this : (vt.#n = this, this.#t = vt), vt = this;
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
			for (var r of n.d) O(r, v), t(r);
			for (r of n.m) O(r, y), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Tt++ > 1e3 && (this.#x(), kt());
		for (let e of this.#u) this.#d.delete(e), O(e, v), this.schedule(e);
		for (let e of this.#d) O(e, y), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Ct = [], r = [], i = wt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Nt(e), this.#h() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Ct = null, wt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Mt(e, t);
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
		this.#r.clear(), yt = this, At(r), At(n), yt = null, this.#s?.resolve();
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
		e.f ^= _;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= _ : i & 4 ? t.push(r) : An(r) && (i & 16 && this.#d.add(r), Fn(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), O(i, v), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), k = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Xe(e[t], this.#u, this.#d);
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
			St = !0, k = this, this.#g();
		} finally {
			Tt = 0, bt = null, Ct = null, wt = null, St = !1, k = null, A = null, M.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(lt);
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
		return (this.#s ??= ee()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!St && !xt && E(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		A = null;
	}
	schedule(e) {
		if (bt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Ct !== null && t === G && (H === null || !(H.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= _;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? vt = e : t.#t = e, this.linked = !1;
		}
	}
};
function Ot(e) {
	var t = xt;
	xt = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (Ge(), k === null) return n;
			k.flush();
		}
	} finally {
		xt = t;
	}
}
function kt() {
	try {
		Se();
	} catch (e) {
		D(e, bt);
	}
}
var j = null;
function At(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && An(r) && (j = /* @__PURE__ */ new Set(), Fn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && gn(r), j?.size > 0)) {
				M.clear();
				for (let e of j) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) j.has(n) && (j.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Fn(n);
					}
				}
				j.clear();
			}
		}
		j = null;
	}
}
function jt(e) {
	k.schedule(e);
}
function Mt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), O(e, _);
		for (var n = e.first; n !== null;) Mt(n, t), n = n.next;
	}
}
function Nt(e) {
	O(e, _);
	for (var t = e.first; t !== null;) Nt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Pt = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), Ft = !1;
function It(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Le,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function N(e, t) {
	let n = It(e, t);
	return Tn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Lt(e, t = !1, n = !0) {
	let r = It(e);
	return t || (r.equals = ze), r;
}
function P(e, t, n = !1) {
	return H !== null && (!U || H.f & 131072) && Ue() && H.f & 4325394 && (q === null || !q.has(e)) && De(), Rt(e, n ? F(t) : t, wt);
}
function Rt(e, t, n = null) {
	if (!e.equals(t)) {
		M.set(e, V ? t : e.v);
		var r = Dt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && mt(t), A === null && Je(t);
		}
		e.wv = kn(), Vt(e, v, n), Ue() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? En([e]) : X.push(e)), !r.is_fork && Pt.size > 0 && !Ft && zt();
	}
	return t;
}
function zt() {
	Ft = !1;
	for (let e of Pt) {
		e.f & 1024 && O(e, y);
		let t;
		try {
			t = An(e);
		} catch {
			t = !0;
		}
		t && Fn(e);
	}
	Pt.clear();
}
function Bt(e) {
	P(e, e.v + 1);
}
function Vt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ue(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === G)) {
			var l = (c & v) === 0;
			if (l && O(s, t), c & 131072) Pt.add(s);
			else if (c & 2) {
				var u = s;
				A?.delete(u), c & 65536 || (c & 512 && (G === null || !(G.f & 2097152)) && (s.f |= ce), Vt(u, y, n));
			} else if (l) {
				var d = s;
				c & 16 && j !== null && j.add(d), n === null ? jt(d) : n.push(d);
			}
		}
	}
}
function F(e) {
	if (typeof e != "object" || !e || fe in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ N(0), s = null, c = Q, u = (e) => {
		if (Q === c) return e();
		var t = H, n = Q;
		W(null), On(c);
		var r = e();
		return W(t), On(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ N(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Te();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ N(n.value, s);
				return i.set(t, e), e;
			}) : P(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ N(t, s));
					i.set(n, e), Bt(o);
				}
			} else P(r, t), Bt(o);
			return !0;
		},
		get(n, r, a) {
			if (r === fe) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ N(F(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = $(o);
				return d === t ? void 0 : d;
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
			if (n === fe) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || G !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ N(a ? F(e[n]) : t, s)), i.set(n, r)), $(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ N(t, s)), i.set(p + "", m)) : P(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ N(void 0, s)), P(d, F(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => F(r));
				P(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var ee = i.get("length"), _ = Number(n);
					Number.isInteger(_) && _ >= ee.v && P(ee, _ + 1);
				}
				Bt(o);
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
			Ee();
		}
	});
}
var Ht, Ut, Wt, Gt;
function Kt() {
	if (Ht === void 0) {
		Ht = window, Ut = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Wt = l(t, "firstChild").get, Gt = l(t, "nextSibling").get, m(e) && (e[ge] = void 0, e[he] = null, e[_e] = void 0, e.__e = void 0), m(n) && (n[ve] = void 0);
	}
}
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function qt(e) {
	return Wt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function L(e) {
	return Gt.call(e);
}
function Jt(e, t) {
	if (!b) return /* @__PURE__ */ qt(e);
	var n = /* @__PURE__ */ qt(S);
	if (n === null) n = S.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), C(r), r;
	}
	return t && $t(n), C(n), n;
}
function Yt(e, t = 1, n = !1) {
	let r = b ? S : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ L(r);
	if (!b) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), C(a), a;
		}
		$t(r);
	}
	return C(r), r;
}
function Xt(e) {
	e.textContent = "";
}
function Zt() {
	return !1;
}
function Qt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function $t(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function en(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function R(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= te);
	var r = {
		ctx: w,
		deps: null,
		nodes: null,
		f: e | v | 512,
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
	if (e & 4) Ct === null ? Dt.ensure().schedule(r) : Ct.push(r);
	else if (t !== null) {
		try {
			Fn(r);
		} catch (e) {
			throw B(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ae));
	}
	if (i !== null && (i.parent = n, n !== null && en(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function tn() {
	return H !== null && !U;
}
function nn(e) {
	let t = R(8, null);
	return O(t, _), t.teardown = e, t;
}
function rn(e) {
	return R(4 | se, e);
}
function an(e) {
	Dt.ensure();
	let t = R(64 | oe, e);
	return () => {
		B(t);
	};
}
function on(e) {
	Dt.ensure();
	let t = R(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? _n(t, () => {
			B(t), n(void 0);
		}) : (B(t), n(void 0));
	});
}
function sn(e) {
	return R(4, e);
}
function cn(e) {
	return R(ue | oe, e);
}
function ln(e, t = 0) {
	return R(8 | t, e);
}
function un(e, t = [], n = [], r = []) {
	it(r, t, n, (t) => {
		R(8, () => {
			e(...t.map($));
		});
	});
}
function dn(e, t = 0) {
	return R(16 | t, e);
}
function z(e) {
	return R(32 | oe, e);
}
function fn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = V, n = H;
		wn(!0), W(null);
		try {
			t.call(null);
		} finally {
			wn(e), W(n);
		}
	}
}
function pn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && $e(() => {
			e.abort(ye);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : B(n, t), n = r;
	}
}
function mn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || B(t), t = n;
	}
}
function B(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (hn(e.nodes.start, e.nodes.end), n = !0), e.f |= ie, pn(e, t && !n), Pn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	fn(e), e.f ^= ie, e.f |= ne;
	var i = e.parent;
	i !== null && i.first !== null && gn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function hn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ L(e);
		e.remove(), e = n;
	}
}
function gn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function _n(e, t, n = !0) {
	var r = [];
	vn(e, r, !0);
	var i = () => {
		n && B(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function vn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= te;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				vn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function yn(e) {
	bn(e, !0);
}
function bn(e, t) {
	if (e.f & 8192) {
		e.f ^= te, e.f & 1024 || (O(e, v), Dt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			bn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function xn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ L(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Sn = null, Cn = !1, V = !1;
function wn(e) {
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
function Tn(e) {
	H !== null && (q ??= /* @__PURE__ */ new Set()).add(e);
}
var J = null, Y = 0, X = null;
function En(e) {
	X = e;
}
var Dn = 1, Z = 0, Q = Z;
function On(e) {
	Q = e;
}
function kn() {
	return ++Dn;
}
function An(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ce), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (An(a) && ht(a), a.wv > e.wv) return !0;
		}
		t & 512 && A === null && O(e, _);
	}
	return !1;
}
function jn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(q !== null && q.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? jn(a, t, !1) : t === a && (n ? O(a, v) : a.f & 1024 && O(a, y), jt(a));
	}
}
function Mn(e) {
	var t = J, n = Y, r = X, i = H, a = q, o = w, s = U, c = Q, l = e.f;
	J = null, Y = 0, X = null, H = l & 96 ? null : e, q = null, Be(e.ctx), U = !1, Q = ++Z, e.ac !== null && ($e(() => {
		e.ac.abort(ye);
	}), e.ac = null);
	try {
		e.f |= le;
		var u = e.fn, d = u();
		e.f |= re;
		var f = e.deps, p = k?.is_fork;
		if (J !== null) {
			var m;
			if (p || Pn(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (tn() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (Pn(e, Y), f.length = Y);
		if (Ue() && X !== null && !U && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) jn(X[m], e);
		if (i !== null && i !== e) {
			if (Z++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Z;
			if (t !== null) for (let e of t) e.rv = Z;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= de), d;
	} catch (e) {
		return Ke(e);
	} finally {
		e.f ^= le, J = t, Y = n, X = r, H = i, q = a, Be(o), U = s, Q = c;
	}
}
function Nn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (J === null || !a.call(J, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ce), c.v !== t && Je(c), c.ac !== null && $e(() => {
			c.ac.abort(ye), c.ac = null, O(c, v);
		}), gt(c), Pn(c, 0);
	}
}
function Pn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Nn(e, n[r]);
}
function Fn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		O(e, _);
		var n = G, r = Cn;
		G = e, Cn = !(t & 96);
		try {
			t & 16777232 ? mn(e) : pn(e), fn(e);
			var i = Mn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Dn;
		} finally {
			Cn = r, G = n;
		}
	}
}
function $(e) {
	var t = !!(e.f & 2);
	if (Sn?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !q.has(e))) {
		var n = H.deps;
		if (H.f & 2097152) e.rv < Z && (e.rv = Z, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			H.deps ??= [], a.call(H.deps, e) || H.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [H] : a.call(r, H) || r.push(H);
		}
	}
	if (V && M.has(e)) return M.get(e);
	if (t) {
		var i = e;
		if (V) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Ln(i)) && (o = mt(i)), M.set(i, o), o;
		}
		var s = !(i.f & 512) && !U && H !== null && (Cn || !!(H.f & 512)), c = (i.f & re) === 0;
		An(i) && (s && (i.f |= 512), ht(i)), s && !c && (_t(i), In(i));
	}
	if (A?.has(e)) return A.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function In(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (_t(t), In(t));
}
function Ln(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (M.has(t) || t.f & 2 && Ln(t)) return !0;
	return !1;
}
function Rn(e) {
	var t = U;
	try {
		return U = !0, e();
	} finally {
		U = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var zn = Symbol("events"), Bn = /* @__PURE__ */ new Set(), Vn = /* @__PURE__ */ new Set();
function Hn(e, t, n) {
	(t[zn] ??= {})[e] = n;
}
function Un(e) {
	for (var t = 0; t < e.length; t++) Bn.add(e[t]);
	for (var n of Vn) n(e);
}
var Wn = null;
function Gn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Wn = e;
	var o = 0, s = Wn === e && e[zn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[zn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
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
					var h = a[zn]?.[r];
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
			e[zn] = t, delete e.currentTarget, W(d), K(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Kn = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function qn(e) {
	return Kn?.createHTML(e) ?? e;
}
function Jn(e) {
	var t = Qt("template");
	return t.innerHTML = qn(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Yn(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Xn(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (b) return Yn(S, null), S;
		i === void 0 && (i = Jn(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ qt(i)));
		var t = r || Ut ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ qt(t), s = t.lastChild;
			Yn(o, s);
		} else Yn(t, t);
		return t;
	};
}
function Zn(e, t) {
	if (b) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = S), Me();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Qn = ["touchstart", "touchmove"];
function $n(e) {
	return Qn.includes(e);
}
function er(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ve] ??= e.nodeValue) && (e[ve] = n, e.nodeValue = `${n}`);
}
function tr(e, t) {
	return ir(e, t);
}
function nr(t, n) {
	Kt(), n.intro = n.intro ?? !1;
	let r = n.target, i = b, a = S;
	try {
		for (var o = /* @__PURE__ */ qt(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ L(o);
		if (!o) throw e;
		x(!0), C(o);
		let i = ir(t, {
			...n,
			anchor: o
		});
		return x(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Ce(), Kt(), Xt(r), x(!1), tr(t, n);
	} finally {
		x(i), C(a);
	}
}
var rr = /* @__PURE__ */ new Map();
function ir(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	Kt();
	var u = void 0, d = on(() => {
		var c = r ?? n.appendChild(I());
		nt(c, { pending: () => {} }, (n) => {
			Ve({});
			var r = w;
			if (s && (r.c = s), a && (i.$$events = a), b && Yn(n, null), u = t(n, i) || {}, b && (G.nodes.end = S, S === null || S.nodeType !== 8 || S.data !== "]")) throw Ae(), e;
			He();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = $n(r);
					for (let e of [n, document]) {
						var a = rr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), rr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Gn, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o(Bn)), Vn.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = rr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, Gn), t.delete(e), t.size === 0 && rr.delete(r)) : t.set(e, i);
			}
			Vn.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return ar.set(u, d), u;
}
var ar = /* @__PURE__ */ new WeakMap();
function or(e, t) {
	let n = ar.get(e);
	return n ? (ar.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var sr = class {
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
			if (n) yn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (yn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
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
						xn(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else B(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), _n(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (B(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = Zt();
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
		} else b && (this.anchor = S), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function cr(e, t, n = !1) {
	var r;
	b && (r = S, Me());
	var i = new sr(e), a = n ? ae : 0;
	function o(e, t) {
		if (b) {
			var n = Ie(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Fe();
				C(a), i.anchor = a, x(!1), i.ensure(e, t), x(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	dn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function lr(e, t) {
	sn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = Qt("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ur = Symbol("is custom element"), dr = Symbol("is html"), fr = be ? "link" : "LINK";
function pr(e, t, n, r) {
	var i = mr(e);
	b && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === fr) || i[t] !== (i[t] = n) && (t === "loading" && (e[me] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && gr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function mr(e) {
	return e[he] ??= {
		[ur]: e.nodeName.includes("-"),
		[dr]: e.namespaceURI === n
	};
}
var hr = /* @__PURE__ */ new Map();
function gr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = hr.get(t);
	if (n) return n;
	hr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function _r(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ ct(r), $(u)) : (c && (c = !1, s = o ? Rn(r) : r), s);
	let f;
	if (a) {
		var p = fe in e || pe in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = Qe(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && we(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var ee = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || ee || h) && f(t ? g() : e), e) : g();
		});
	}
	var _ = !1, v = (n & 1 ? ct : ft)(() => (_ = !1, g()));
	a && $(v);
	var y = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? $(v) : i && a ? F(e) : e;
			return P(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return V && _ || y.f & 16384 ? v.v : $(v);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function vr(e) {
	return new yr(e);
}
var yr = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Lt(n, !1, !1);
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
				return r === pe || ($(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return P(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? nr : tr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && Ot(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && c(this, e, {
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
			or(this.#t);
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
}, br;
typeof HTMLElement == "function" && (br = class extends HTMLElement {
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
					let n = Qt("slot");
					e !== "default" && (n.name = e), Zn(t, n);
				};
			}
			let t = {}, n = Sr(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = xr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = vr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = an(() => {
				ln(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = xr(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = xr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function xr(e, t, n, r) {
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
function Sr(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Cr(e, t, n, r, i, a) {
	let o = class extends br {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = xr(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/types.ts
var wr = {
	done: "Marked as done",
	block: "Set blocker",
	unblock: "Cleared blocker",
	open: "Reopened",
	start: "Started",
	create: "Created",
	memory: "Added memory"
}, Tr = /* @__PURE__ */ Xn("<small class=\"svelte-1nnfbw9\"> </small>"), Er = /* @__PURE__ */ Xn("<button type=\"button\" class=\"wrn-undo-btn svelte-1nnfbw9\">Undo</button>"), Dr = /* @__PURE__ */ Xn("<button type=\"button\" class=\"wrn-undo-btn svelte-1nnfbw9\">Redo</button>"), Or = /* @__PURE__ */ Xn("<div class=\"wrn-undo-actions svelte-1nnfbw9\"><!> <!></div>"), kr = /* @__PURE__ */ Xn("<div class=\"wrn-undo-receipt svelte-1nnfbw9\"><span class=\"wrn-undo-icon svelte-1nnfbw9\" aria-hidden=\"true\">↩</span> <div class=\"wrn-undo-body svelte-1nnfbw9\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\"><strong class=\"svelte-1nnfbw9\"> </strong> <!></div> <!></div>"), Ar = {
	hash: "svelte-1nnfbw9",
	code: ".wrn-undo-receipt.svelte-1nnfbw9 {--wrn-undo-boundary: var(\n			--wrn-undo-border,\n			var(\n				--worn-border-strong,\n				color-mix(\n					in srgb,\n					var(--worn-border, #c8c2b9) 60%,\n					var(--worn-text, #21322b)\n				)\n			)\n		);display:grid;grid-template-columns:auto minmax(0, 1fr) auto;align-items:center;gap:10px;box-sizing:border-box;width:100%;max-width:100%;min-width:0;padding:10px 14px;overflow:hidden;background:var(--wrn-undo-bg, var(--worn-surface, #fdfbf7));border:1px solid var(--wrn-undo-boundary);border-radius:var(--wrn-undo-radius, 6px);font-family:var(--wrn-undo-font, inherit);font-size:13px;letter-spacing:0;color:var(--wrn-undo-text, var(--worn-text, #21322b));box-shadow:0 2px 8px rgb(0 0 0 / 6%);}.wrn-undo-icon.svelte-1nnfbw9 {flex-shrink:0;font-size:16px;opacity:0.7;}.wrn-undo-body.svelte-1nnfbw9 {display:grid;min-width:0;gap:2px;}.wrn-undo-body.svelte-1nnfbw9 strong:where(.svelte-1nnfbw9),\n	.wrn-undo-body.svelte-1nnfbw9 small:where(.svelte-1nnfbw9) {min-width:0;overflow-wrap:anywhere;}.wrn-undo-body.svelte-1nnfbw9 strong:where(.svelte-1nnfbw9) {font-size:13px;font-weight:600;}.wrn-undo-body.svelte-1nnfbw9 small:where(.svelte-1nnfbw9) {font-size:11px;color:var(--wrn-undo-muted, var(--worn-muted, #596a61));}.wrn-undo-actions.svelte-1nnfbw9 {display:flex;max-width:100%;flex-wrap:wrap;justify-content:flex-end;gap:4px;}.wrn-undo-btn.svelte-1nnfbw9 {min-height:32px;padding:4px 10px;border:1px solid var(--wrn-undo-boundary);border-radius:4px;background:transparent;color:var(--wrn-undo-text, var(--worn-text, #21322b));font:inherit;font-size:12px;letter-spacing:0;cursor:pointer;touch-action:manipulation;}.wrn-undo-btn.svelte-1nnfbw9:hover {background:var(--wrn-undo-hover, var(--worn-subtle, #eaf4f0));}.wrn-undo-btn.svelte-1nnfbw9:focus-visible {outline:2px solid var(--wrn-undo-focus, var(--worn-accent, #0f766e));outline-offset:2px;}\n\n	@media (max-width: 480px) {.wrn-undo-receipt.svelte-1nnfbw9 {grid-template-columns:auto minmax(0, 1fr);row-gap:6px;}.wrn-undo-actions.svelte-1nnfbw9 {grid-column:2;justify-content:flex-start;}\n	}\n\n	@media (pointer: coarse) {.wrn-undo-btn.svelte-1nnfbw9 {min-width:44px;min-height:44px;}\n	}\n\n	@media (forced-colors: active) {.wrn-undo-receipt.svelte-1nnfbw9,\n		.wrn-undo-btn.svelte-1nnfbw9 {border-color:CanvasText;}.wrn-undo-btn.svelte-1nnfbw9:focus-visible {outline-color:Highlight;}\n	}"
};
function jr(e, t) {
	Ve(t, !0), lr(e, Ar);
	let n = _r(t, "canUndo", 3, !0), r = _r(t, "canRedo", 3, !1), i = /* @__PURE__ */ dt(() => wr[t.action.type] ?? t.action.label ?? "Action");
	var a = kr(), o = Yt(Jt(a), 2), s = Jt(o), c = Jt(s, !0);
	Ne(s);
	var l = Yt(s, 2), u = (e) => {
		var n = Tr(), r = Jt(n, !0);
		Ne(n), un((e) => er(r, e), [() => t.action.packId.substring(0, 24)]), Zn(e, n);
	};
	cr(l, (e) => {
		t.action.packId && e(u);
	}), Ne(o);
	var d = Yt(o, 2), f = (e) => {
		var a = Or(), o = Jt(a), s = (e) => {
			var n = Er();
			un(() => pr(n, "aria-label", `Undo ${$(i)}`)), Hn("click", n, () => t.onundo(t.action)), Zn(e, n);
		};
		cr(o, (e) => {
			n() && t.onundo && e(s);
		});
		var c = Yt(o, 2), l = (e) => {
			var n = Dr();
			un(() => pr(n, "aria-label", `Redo ${$(i)}`)), Hn("click", n, () => t.onredo(t.action)), Zn(e, n);
		};
		cr(c, (e) => {
			r() && t.onredo && e(l);
		}), Ne(a), Zn(e, a);
	};
	cr(d, (e) => {
		(n() && t.onundo || r() && t.onredo) && e(f);
	}), Ne(a), un(() => er(c, $(i))), Zn(e, a), He();
}
Un(["click"]);
//#endregion
//#region src/UndoElement.svelte
function Mr(e, t) {
	Ve(t, !0);
	let n = _r(t, "label", 7, "Action"), r = _r(t, "packid", 7, ""), i = _r(t, "canundo", 7, !0), a = _r(t, "canredo", 7, !1), o = t.$$host;
	function s(e) {
		o.dispatchEvent(new CustomEvent(e, {
			detail: { action: $(c) },
			bubbles: !0,
			composed: !0
		}));
	}
	let c = /* @__PURE__ */ dt(() => ({
		type: "action",
		packId: r(),
		label: n(),
		createdAt: Date.now()
	}));
	return jr(e, {
		get action() {
			return $(c);
		},
		get canUndo() {
			return i();
		},
		get canRedo() {
			return a();
		},
		onundo: () => s("wrn-undo"),
		onredo: () => s("wrn-redo")
	}), He({
		get label() {
			return n();
		},
		set label(e = "Action") {
			n(e), Ot();
		},
		get packid() {
			return r();
		},
		set packid(e = "") {
			r(e), Ot();
		},
		get canundo() {
			return i();
		},
		set canundo(e = !0) {
			i(e), Ot();
		},
		get canredo() {
			return a();
		},
		set canredo(e = !1) {
			a(e), Ot();
		}
	});
}
customElements.define("worn-undo", Cr(Mr, {
	label: {},
	packid: {},
	canundo: { type: "Boolean" },
	canredo: { type: "Boolean" }
}, [], []));
//#endregion
export { Mr as default };
